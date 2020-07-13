const localShortcut = require('electron-localshortcut');
const { quit } = require('./quit');
const { instance, QuitAppStatus } = require('./instance');

function register(win) {
  localShortcut.register(win, 'Cmd+Q', () => {
    instance.quitAppStatus = QuitAppStatus.block;
    quit();
  });

  localShortcut.register(win, 'Cmd+W', () => {
    setTimeout(() => {
      win.hide();
    }, 0);
  });
}

module.exports = { register };
