const localShortcut = require('electron-localshortcut');

const { instance, QuitAppStatus } = require('./instance');

function register(win) {
  // localShortcut.register(win, 'Cmd+Q', () => {
  //   // instance.quitAppStatus = QuitAppStatus.block;
  //   setTimeout(() => {
  //     win.hide();
  //   }, 0);
  // });

  localShortcut.register(win, 'Cmd+W', () => {
    // instance.quitAppStatus = QuitAppStatus.block;
    setTimeout(() => {
      win.hide();
    }, 0);
  });
}

module.exports = { register };
