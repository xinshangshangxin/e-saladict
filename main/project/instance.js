const { app } = require('electron');
const { ReplaySubject } = require('rxjs');
const { defer } = require('../util/defer');
const { getUnUsedPort } = require('../util/port-detect');
const { staticServer } = require('../env');
const { createStaticServer } = require('../util/static-server');

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

  server = null;

  tray = null;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    app.redirectSubject = this.redirectSubject;

    // 端口获取
    getUnUsedPort()
      .then(async (port) => {
        staticServer.port = port;
        staticServer.url = 'http://127.0.0.1:' + port;

        console.info('staticServer: ', staticServer);
        
        this.server = await createStaticServer(staticServer.staticFile, port);

        return this.portDeferred.resolve(port);
      })
      .catch(this.portDeferred.reject);
  }
}

const instance = new Instance();

module.exports = { instance, QuitAppStatus };
