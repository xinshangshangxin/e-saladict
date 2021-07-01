const { app } = require('electron');

const { blockClose } = require('./block-close');
const { instance } = require('./instance');
const { register } = require('./local-shortcut');
const { createWindow } = require('./window');

function showWindow() {
  let { win } = instance;

  if (win === null) {
    // 创建 BrowserWindow
    win = createWindow(true);
    instance.win = win;

    // 绑定事件
    win.on('show', showWindow);
    win.on('close', blockClose);

    register(win);
  } else if (win.isMinimized()) {
    win.restore();
  } else if (!win.isVisible()) {
    win.show();
  }

  if (app.dock) {
    if (!app.dock.isVisible()) {
      app.dock.show();
    }
  }

  win.focus();
}

module.exports = { showWindow };
