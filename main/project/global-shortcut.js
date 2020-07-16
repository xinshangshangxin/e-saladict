const { globalShortcut } = require('electron');
const { getSelectionText } = require('../get-selection-text');
const { instance } = require('./instance');
const { showWindow } = require('./show-window');
const { configModel } = require('./storage');

async function copyAndSearch() {
  const text = await getSelectionText();
  console.debug('text: ', text);

  instance.redirectSubject.next(text);

  showWindow();
}

async function getShortcut() {
  const config = await configModel.findOne({ key: 'config' });

  return config && config.shortcut;
}

function checkIsRegistered(accelerator) {
  if (!accelerator) {
    return false;
  }
  return globalShortcut.isRegistered(accelerator);
}

async function register(accelerator) {
  if (!accelerator) {
    console.warn('no shortcut');
    return;
  }

  if (checkIsRegistered(accelerator)) {
    console.warn(accelerator + ' 已经被注册');
    return false;
  }

  await unregister();
  await configModel.updateOne(
    { key: 'config' },
    { key: 'config', shortcut: accelerator },
    { upsert: true }
  );

  console.info('register shortcut', accelerator);
  return globalShortcut.register(accelerator, copyAndSearch);
}

async function unregister() {
  let shortcut = await getShortcut();

  if (shortcut) {
    globalShortcut.unregister(shortcut);
  }
}

async function initShortcut() {
  let shortcut = await getShortcut();

  if (!shortcut) {
    shortcut = 'Alt+Control+L';
  }

  return register(shortcut);
}

module.exports = { register, unregister, checkIsRegistered, getShortcut, initShortcut };
