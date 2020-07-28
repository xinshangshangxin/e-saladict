const localShortcut = require('electron-localshortcut');

const { instance, CloseWindowStatus } = require('./instance');

function blockClose(e) {
  const { closeWindowStatus, redirectSubject, win } = instance;
  console.info('window close status: ', closeWindowStatus);

  if (closeWindowStatus === CloseWindowStatus.block) {
    e.preventDefault();
    instance.closeWindowStatus = CloseWindowStatus.delay;
  } else if (closeWindowStatus === CloseWindowStatus.allow) {
    console.info('close window');

    // destroy close win
    setTimeout(() => {
      win && win.destroy();
    }, 0);
  } else {
    // 先阻止退出
    e.preventDefault();

    // 注销所有 window 上的事件
    localShortcut.unregisterAll(instance.win);

    // render unsubscribe redirectSubject
    redirectSubject.next('destroy');

    // 标注为可以退出
    instance.closeWindowStatus = CloseWindowStatus.allow;

    // 重新触发退出事件
    instance.win.close();
  }
}

module.exports = { blockClose };
