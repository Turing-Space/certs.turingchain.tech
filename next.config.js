/* eslint-disable */
const withTypescript = require('@zeit/next-typescript');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withOptimizedImages = require('next-optimized-images');

require('dotenv').config();

const { publicRuntimeConfig } = require('./next.runtimeConfig');

const { GITHUB, PROJ_NAME } = publicRuntimeConfig;

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { };
}

module.exports = withBundleAnalyzer(
  withTypescript(
    withCSS(
      withOptimizedImages({
        exportPathMap: function () {
          return {
            '/': { page: '/', query: { lng: '' } },
            '/product': { page: '/product', query: { lng: '', id: '' } },
            '/ipfs': { page: '/ipfs', query: { hash: '' } },
            '/auth/login': { page: '/auth/login', query: { mode: '' } },
            '/issuer': { page: '/issuer', query: { lng: '', id: '' } },
            '/issuer/issue-cert/1': {
              page: '/issuer/issue-cert/[page]',
              query: { page: '1' },
            },
            '/issuer/issue-cert/2': {
              page: '/issuer/issue-cert/[page]',
              query: { page: '2' },
            },

            '/zh-TW': { page: '/', query: { lng: 'zh-TW' } },
            '/zh-TW/product': { page: '/product', query: { lng: 'zh-TW' } },
            '/en': { page: '/', query: { lng: 'en' } },
            '/en/product': { page: '/product', query: { lng: 'en', id: '' } },
            '/en/ipfs': { page: '/ipfs', query: { hash: '' } },
            '/en/issuer': { page: '/issuer', query: { lng: '', id: '' } },
            'en/auth/login': { page: '/auth/login', query: { mode: '' } },
          };
        },
        assetPrefix: GITHUB ? `/${PROJ_NAME}/` : '',
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(
          process.env.BUNDLE_ANALYZE,
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html',
          },
        },

        // next-images: default values
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          plugins: [{ removeComments: true }],
        },
        webp: {
          preset: 'default',
          quality: 75,
        },
        responsive: {
          placeholder: true,
        },

        webpack: (config, { isServer, buildId, dev }) => {
          config.plugins = config.plugins || [];
          config.resolve.extensions = config.resolve.extensions.concat([
            '.mjs',
            '.less',
          ]);

          config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
              path: path.join(__dirname, '.env'),
              systemvars: true,
            }),
          ];

          const originalEntry = config.entry;
          config.entry = async () => {
            const entries = await originalEntry();

            if (
              entries['main.js'] &&
              !entries['main.js'].includes('./polyfill.js')
            ) {
              entries['main.js'].unshift('./polyfill.js');
            }

            return entries;
          };

          return config;
        },
        publicRuntimeConfig,
      }),
    ),
  ),
);
