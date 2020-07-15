const { app } = require('electron');

const { instance, QuitAppStatus } = require('./instance');

async function blockQuit(e) {
  const { quitAppStatus } = instance;
  console.info('quit status: ', quitAppStatus);

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

module.exports = { blockQuit };
