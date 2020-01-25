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
  require.extensions['.less'] = file => {};
}

const defaultLng = 'en';

function exportWithLocalePath(config) {
  const locales = ['zh-TW', 'en'];
  const configWithEn = { ...config };
  Object.keys(config).forEach(key => {
    for (const lng of locales) {
      const payloadWithQueryEn = {
        ...config[key],
        query: {
          ...config[key].query,
          lng,
        },
      };
      Object.assign(configWithEn, {
        [`/${lng}/${key}`]: payloadWithQueryEn,
      });
    }
  });
  return configWithEn;
}

module.exports = withBundleAnalyzer(
  withTypescript(
    withCSS(
      withOptimizedImages({
        exportPathMap: function() {
          const pathConfig = {
            '/': { page: '/', query: { lng: defaultLng } },
            '/product': {
              page: '/product',
              query: { lng: defaultLng, id: '' },
            },
            '/ipfs': { page: '/ipfs', query: { lng: defaultLng, hash: '' } },
            '/auth/login': {
              page: '/auth/login',
              query: { lng: defaultLng, mode: '' },
            },
            '/issuer': { page: '/issuer', query: { lng: '', id: '' } },
            '/issuer/issue-cert/1': {
              page: '/issuer/issue-cert/[page]',
              query: { lng: defaultLng, page: '1' },
            },
            '/issuer/issue-cert/2': {
              page: '/issuer/issue-cert/[page]',
              query: { lng: defaultLng, page: '2' },
            },
          };

          return process.env.NODE_ENV === 'development'
            ? pathConfig
            : exportWithLocalePath(pathConfig);
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
