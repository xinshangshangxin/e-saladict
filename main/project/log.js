const { app } = require('electron');
const log = require('electron-log');
const { join } = require('path');

const { isDev } = require('../env');

if (!isDev) {
  log.transports.file.resolvePath = (variables) => {
    return join(app.getPath('logs'), variables.fileName || 'main.log');
  };

  log.transports.file.level = 'debug';

  Object.assign(console, log.functions);
}

module.exports = { log };
