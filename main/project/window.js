const { BrowserWindow } = require('electron');
const windowStateKeeper = require('electron-window-state');
const { resolve: pathResolve } = require('path');

const { isDev, staticServer } = require('../env');

function createWindow(isShow = false) {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 350,
    defaultHeight: 550,
  });

  const win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: false,
      preload: pathResolve(__dirname, '../preload.js'),
      // allowRunningInsecureContent: true,
      webSecurity: false,
    },
    show: isShow,
  });

  mainWindowState.manage(win);

  win.loadURL(staticServer.url);

  if (isDev) {
    win.webContents.openDevTools();
  }

  return win;
}

module.exports = { createWindow };
