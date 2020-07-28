const { app, clipboard } = require('electron');

const { isDev, defaultProtocol } = require('../env');
const { search } = require('./search');

function showSearchWindow(url = '') {
  console.log('showSearchWindow url: ', url);
  const text = url.replace(`${defaultProtocol}://`, '') || clipboard.readText('clipboard');

  search(text);
}

function registerProtocol(protocol = defaultProtocol) {
  // 不是开发环境, 并且未注册 protocol
  if (!isDev && !app.isDefaultProtocolClient(protocol)) {
    app.setAsDefaultProtocolClient(protocol);
  }

  // mac 下监听唤起
  app.on('open-url', (event, url) => {
    event.preventDefault();
    showSearchWindow(url);
  });

  // windows 下监听唤起
  app.on('second-instance', (e, argv) => {
    if (process.platform == 'win32') {
      const url = argv.slice(1).pop();
      showSearchWindow(url);
    } else {
      showSearchWindow();
    }
  });
}

module.exports = { registerProtocol };
