const { app } = require('electron');
const { ReplaySubject } = require('rxjs');
const { defer } = require('../util/defer');
const { getUnUsedPort } = require('../util/port-detect');
const { staticServer } = require('../env');
const { createStaticServer } = require('../util/static-server');
const { resolve: pathResolve } = require('path');

const QuitAppStatus = {
  // 阻止本次退出
  block: 'block',
  // 延迟退出
  delay: 'delay',
  // 允许
  allow: 'allow',
};

class Instance {
  quitAppStatus = QuitAppStatus.delay;

  redirectSubject = new ReplaySubject(1);

  win = null;

  portDeferred = defer();

  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    app.redirectSubject = this.redirectSubject;

    // 端口获取
    getUnUsedPort()
      .then((port) => {
        staticServer.port = port;
        staticServer.url = 'http://127.0.0.1:' + port;

        createStaticServer(staticServer.staticFile, port);

        console.info('staticServer: ', staticServer);
        return this.portDeferred.resolve(port);
      })
      .catch(this.portDeferred.reject);
  }
}

const instance = new Instance();

module.exports = { instance, QuitAppStatus };
