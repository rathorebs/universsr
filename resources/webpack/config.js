// enable aliases for required modules
// this will also assign absolute paths to webpack's resolve.alias for mapping
require('module-alias/register');

// load environment variables for webpack build process
// based on the defined process.env.NODE_ENV value
const env = require('@root/env');

// retrieve client & server config, respectively
// also, passing env variable to client/server config for usage
const webpackClient = require('./client')(env);
const webpackServer = require('./server')(env);

module.exports = [webpackClient, webpackServer];
