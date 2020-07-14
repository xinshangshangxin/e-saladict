const { instance } = require('./instance');

function close() {
  console.info('window close');

  const { win, redirectSubject } = instance;

  // render unsubscribe redirectSubject
  redirectSubject.next('destroy');

  // destroy close win
  setTimeout(() => {
    win && win.destroy();
  }, 0);
}

module.exports = { close };
