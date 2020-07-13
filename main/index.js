require('./project/log');

const { app } = require('electron');
const { instance, QuitAppStatus } = require('./project/instance');
const { showWindow } = require('./project/show-window');
const { registerProtocol } = require('./project/protocol');
const { lockInstance } = require('./project/lock');
const { addTray } = require('./project/tray');

lockInstance();

async function beforeQuit(e) {
  const { quitAppStatus } = instance;
  console.info('beforeQuit, status: ', quitAppStatus);

  if (quitAppStatus === QuitAppStatus.block) {
    e.preventDefault();
    instance.quitAppStatus = QuitAppStatus.delay;
  } else if (quitAppStatus === QuitAppStatus.allow) {
    console.info('quit app');
  } else {
    // 先阻止退出
    e.preventDefault();

    if (instance.server) {
      console.info('closing static server.....');
      await new Promise((resolve) => {
        instance.server.close((e) => {
          console.info('static server closed.');
          resolve();
        });
      });
    }

    // 标注为可以退出
    instance.quitAppStatus = QuitAppStatus.allow;

    // 重新触发退出事件
    app.quit();
  }
}

async function waitPortReadyAndShowWindow() {
  addTray();

  await instance.portDeferred.promise;

  registerProtocol();
  return showWindow();
}

app.on('ready', waitPortReadyAndShowWindow);
app.on('activate', showWindow);
app.on('before-quit', beforeQuit);

app.on('window-all-closed', () => {
  instance.win = null;

  // app.dock.hide();

  if (process.platform !== 'darwin') {
    app.quit();
  }
});
