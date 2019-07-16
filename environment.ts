// runtime env

export const env = (key: string, defaultValue = '') =>
  process.env[key] || defaultValue;

export const GITHUB =
  env('DEPLOY_ENV') === 'github' ||
  (() => {
    // if run `yarn start`, that will get window is reference error
    try {
      return window.location.host.includes('github.io');
    } catch {
      return false;
    }
  })();

export const PROJ_NAME = env('PROJ_NAME');
