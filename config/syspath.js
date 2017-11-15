const root = require('app-root-path').path;

// export application root and related
module.exports = {
  root,
  bin: `${root}/bin`,
  config: `${root}/config`,
  resources: `${root}/resources`,
  public: `${root}/public`,
  src: `${root}/src`,
  logs: `${root}/logs`
};
