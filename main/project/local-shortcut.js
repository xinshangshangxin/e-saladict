const localShortcut = require('electron-localshortcut');

const { quit } = require('./quit');
const { instance, QuitAppStatus, CloseWindowStatus } = require('./instance');

function register(win) {
  localShortcut.register(win, 'Cmd+Q', () => {
    instance.quitAppStatus = QuitAppStatus.block;
    quit();
  });

  localShortcut.register(win, 'Cmd+W', () => {
    console.debug('Cmd+W');

    instance.closeWindowStatus = CloseWindowStatus.block;

    setTimeout(() => {
      win.hide();
    }, 0);
  });
}

module.exports = { register };
