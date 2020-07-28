const { shell } = require('electron');

async function openSystemPreferences(pane, section = '') {
  await shell.openExternal(`x-apple.systempreferences:com.apple.preference.${pane}?${section}`);
}

module.exports = { openSystemPreferences };
