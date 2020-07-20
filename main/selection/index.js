const { clipboard } = require('electron');
const robot = require('robotjs');
const BB = require('bluebird');

const getSelectionText = (() => {
  let lastVal = clipboard.readText();

  return async () => {
    robot.keyTap('c', ['command']);
    let text = clipboard.readText();
    console.debug('first copy: ', text);

    if (text == lastVal) {
      await BB.delay(500);
      text = clipboard.readText();

      console.debug('second copy: ', text);

      if (text == lastVal) {
        await BB.delay(500);
        text = clipboard.readText();

        console.debug('third copy: ', text);
      }
    }

    lastVal = text;
    return text;
  };
})();

module.exports = { getSelectionText };
