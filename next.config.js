// Reference:
// Environment variables: https://gist.github.com/pkellner/a2362c22cfd214588b7a4450f59a0a6a

require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file and attach environment variables
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
    return config
  }
});