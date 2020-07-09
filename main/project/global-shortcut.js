const { globalShortcut } = require('electron');
const { getSelectionText } = require('../get-selection-text');
const { instance } = require('./instance');
const { showWindow } = require('./show-window');

function register() {
  globalShortcut.register('CmdOrCtrl+Alt+R', async () => {
    const text = await getSelectionText();
    console.info('text: ', text);

    instance.redirectSubject.next(text);

    showWindow();
  });
}

module.exports = { register };
