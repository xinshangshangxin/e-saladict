const { spawn } = require('child_process');
const { resolve: pathResolve } = require('path');
const BB = require('bluebird');

const scriptPath = pathResolve(__dirname, './copy.scpt');

async function getSelectionText(timeout = 3000) {
  const child = spawn(`osascript ${scriptPath}`, {
    shell: true,
  });

  let stdout = '';
  let stderr = '';

  child.stdout?.on('data', (data) => {
    stdout += `${data}`;
  });

  child.stderr?.on('data', (data) => {
    stderr += `${data}`;
  });

  return new BB((resolve, reject) => {
    child.once('error', reject);
    child.once('close', () => {
      resolve(stdout);
    });
  })
    .timeout(timeout)
    .catch(async (e) => {
      throw e;
    });
}

module.exports = { getSelectionText };
