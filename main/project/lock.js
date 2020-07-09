const { app } = require('electron');

function lockInstance() {
  const isInstanceLock = app.requestSingleInstanceLock();
  if (!isInstanceLock) {
    app.quit();
    return false;
  }

  return true;
}

module.exports = { lockInstance };
