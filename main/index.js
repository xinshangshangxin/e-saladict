require('./project/log');

const { app } = require('electron');
const { instance } = require('./project/instance');
const { showWindow } = require('./project/show-window');
const { registerProtocol } = require('./project/protocol');
const { lockInstance } = require('./project/lock');
const { addTray } = require('./project/tray');
const { blockQuit } = require('./project/block-quit');
const { initShortcut } = require('./project/global-shortcut');

require('./project/router');

lockInstance();

async function ready() {
  addTray();
  registerProtocol();
  initShortcut();

  await instance.portDeferred.promise;

  showWindow();
}

app.on('ready', ready);
app.on('activate', showWindow);
app.on('before-quit', blockQuit);

app.on('window-all-closed', () => {
  instance.win = null;

  if (app.dock) {
    app.dock.hide();
  }

  if (process.platform !== 'darwin') {
    app.quit();
  }
});
