const net = require('net');

// 检测端口是否被占用
function portIsOccupied(port, host = '127.0.0.1') {
  return new Promise((resolve, reject) => {
    // 创建服务并监听该端口
    const server = net.createServer().listen(port, host);
    server.on('listening', () => {
      server.close(); // 关闭服务
      resolve(port);
    });

    server.on('error', (error) => {
      // 延迟
      setTimeout(() => {
        reject(error);
      }, 200);
    });
  });
}

async function getUnUsedPort(from = 10000, to = 10020) {
  const arr = [];

  for (let i = from; i < to; i += 1) {
    arr.push(i);
  }

  let step = 1;
  while (arr.length > 0) {
    let cache = arr.splice(0, step);

    const port = await Promise.race(
      cache.map((port) => {
        return portIsOccupied(port).catch((error) => {
          return undefined;
        });
      })
    );

    if (port) {
      return port;
    }

    step += 1;
  }
}

module.exports = { portIsOccupied, getUnUsedPort };
