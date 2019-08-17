import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

// system env
export const processEnv = (key: string, defaultValue = '') =>
  process.env[key] || defaultValue;

export const GITHUB =
  processEnv('DEPLOY_ENV') === 'github' ||
  (() => {
    // if run `yarn start`, that will get window is reference error
    try {
      return window.location.host.includes('github.io');
    } catch {
      return false;
    }
  })();

export const PROJ_NAME = processEnv('PROJ_NAME');

export const PRODUCTION = processEnv('NODE_ENV') === 'production';

// runtime env

export const runtimeEnv = publicRuntimeConfig;
