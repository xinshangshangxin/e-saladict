# e-saladict

一个使用 `electron` 打包的 [沙拉词典](https://github.com/crimx/ext-saladict)

## 本地开发

```bash
# clone 本项目
git clone https://github.com/xinshangshangxin/e-saladict.git
# 安装本项目依赖
npm install

# clone 沙拉词典源码
git clone https://github.com/crimx/ext-saladict.git
# 构建沙拉词典
cd ext-saladict
npm install
npm run build
cd ..

# clone WebextensionsEmulator 源码
git clone https://github.com/crimx/webextensions-emulator.git
# 替换 WebextensionsEmulator 以适配 ext-saladict
node pre-build/index.js WebextensionsEmulator
# 构建 WebextensionsEmulator
cd webextensions-emulator
npm install
npm run build
cd ..


# 组合 saladict 和 WebextensionsEmulator
rm -rf ext-saladict/pre-build/chrome/mock
mkdir -p ext-saladict/pre-build/chrome/mock
cp webextensions-emulator/dist/** ext-saladict/pre-build/chrome/mock
node pre-build/index.js

# 启动本地 electron
npm start
```

## Thanks

[沙拉词典](https://github.com/crimx/ext-saladict)
[不安装浏览器也可以使用沙拉查词](https://github.com/crimx/ext-saladict/issues/827)
[webextensions-emulator](https://github.com/crimx/webextensions-emulator)
