const publicRuntimeConfig = {
  GITHUB: process.env.DEPLOY_ENV === 'github',
  PROJ_NAME: process.env.PROJ_NAME,
  MVP: {
    account: process.env.MVP_ACCOUNT,
    password: process.env.MVP_PASSWORD,
    issuePassword: process.env.MVP_ISSUE_CERT_PASSWORD,
  },
};

module.exports = {
  publicRuntimeConfig,
};
