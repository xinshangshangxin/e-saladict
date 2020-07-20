const { app } = require('electron');
const isDev = require('electron-is-dev');
const { resolve: pathResolve } = require('path');

let userData = app.getPath('userData');

if (isDev) {
  userData = pathResolve(__dirname, '../.tmp');
}

const staticServer = {
  port: 10000,
  url: 'http://localhost/10000',
  staticFile: pathResolve(__dirname, '../ext-saladict/pre-build/chrome/'),
};

const defaultProtocol = isDev ? 'saladict-dev' : 'saladict';

module.exports = { isDev, staticServer, defaultProtocol, userData };
