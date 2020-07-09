const static = require('node-static');

function createStaticServer(fileDir, port, host = '127.0.0.1') {
  const file = new static.Server(fileDir);

  require('http')
    .createServer(function(request, response) {
      request
        .addListener('end', function() {
          file.serve(request, response);
        })
        .resume();
    })
    .listen(port, host);
}

module.exports = { createStaticServer };
