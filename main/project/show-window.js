const { app } = require('electron');

const { close } = require('./close');
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
    win.on('close', close);

    register(win);

    // app.dock.show();
  } else if (win.isMinimized()) {
    win.restore();
  } else {
    win.show();
  }

  win.focus();
}

module.exports = { showWindow };
