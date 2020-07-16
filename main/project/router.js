const { ipcMain } = require('electron');

const { getShortcut, register } = require('./global-shortcut');
const instance = require('./instance');

function router(key, cb) {
  ipcMain.on(`${key}-message`, async ({ sender }, data) => {
    try {
      const result = await cb(data);
      sender.send(`${key}-reply`, result);
    } catch (e) {
      console.warn(e);
      sender.send(`${key}-reply`, { type: 'error', message: e.message });
    }
  });
}

router('shortcut', async () => {
  const data = await getShortcut();
  console.info('shortcut', data);
  return data;
});

router('register-shortcut', async (data) => {
  console.info('register shortcut', data);
  return register(data);
});
