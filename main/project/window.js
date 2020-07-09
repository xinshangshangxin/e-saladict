const { BrowserWindow } = require('electron');
const windowStateKeeper = require('electron-window-state');
const { isDev, staticServer } = require('../env');

function createWindow(isShow = false) {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });

  const win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
      webSecurity: false,
    },
    show: isShow,
    // titleBarStyle: 'hidden',
  });

  mainWindowState.manage(win);

  win.loadURL(staticServer.url);

  if (isDev) {
    win.webContents.openDevTools();
  }

  return win;
}

module.exports = { createWindow };
