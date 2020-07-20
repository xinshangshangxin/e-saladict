const BB = require('bluebird');
const spawn = require('cross-spawn');

async function spawnAsync(shell, timeout = 3000) {
  const child = spawn(shell, { shell: true });

  let stdout = '';
  let stderr = '';

  child.stdout.on('data', (data) => {
    stdout += `${data}`;
  });

  child.stderr.on('data', (data) => {
    stderr += `${data}`;
  });

  return new BB((resolve, reject) => {
    child.once('error', (e) => {
      e.extra = { stdout, stderr };
      reject(e);
    });

    child.once('close', () => {
      resolve({ stdout, stderr });
    });

    child.once('exit', (code) => {
      if (code !== 0) {
        const e = new Error(`exit with code: ${code}\n${stderr}`);
        e.extra = { stdout, stderr };
        reject(e);
        return;
      }

      resolve({ stdout, stderr });
    });
  }).timeout(timeout);
}

module.exports = { spawnAsync };
