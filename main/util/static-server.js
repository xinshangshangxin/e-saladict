const static = require('node-static');
const { createServer } = require('http');

async function createStaticServer(fileDir, port, host = '127.0.0.1') {
  const file = new static.Server(fileDir);

  const server = createServer((req, res) => {
    req
      .addListener('end', function() {
        file.serve(req, res);
      })
      .resume();
  }).listen(port, host);

  return new Promise((resolve, reject) => {
    server.once('listening', () => {
      console.info('static server startup: ', `http://${host}:${port}`);
      resolve(server);
    });

    server.once('close', reject);

    setTimeout(reject, 3000);
  });
}

module.exports = { createStaticServer };
