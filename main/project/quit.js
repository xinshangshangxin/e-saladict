const { app } = require('electron');

const { instance, QuitAppStatus } = require('./instance');

function quit() {
  console.info('__destroy__');

  instance.quitAppStatus = QuitAppStatus.block;
  instance.redirectSubject.next('__destroy__');

  setTimeout(() => {
    instance.win && instance.win.hide();
    instance.quitAppStatus = QuitAppStatus.delay;
    app.quit();
  }, 10);

  return false;
}

module.exports = { quit };
