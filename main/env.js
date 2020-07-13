const isDev = require('electron-is-dev');
const { resolve: pathResolve } = require('path');

const staticServer = {
  port: 10000,
  url: 'http://localhost/10000',
  staticFile: pathResolve(__dirname, '../ext-saladict/build/chrome/'),
};

const defaultProtocol = isDev ? 'saladict-dev' : 'saladict';

module.exports = { isDev, staticServer, defaultProtocol };
