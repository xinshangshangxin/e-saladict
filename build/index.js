const { readFile, readJSON, writeFile, move, pathExists, copy } = require('fs-extra');
const { resolve: pathResolve } = require('path');

const distDir = pathResolve(__dirname, '../ext-saladict/build/chrome/');

const emulatorDir = pathResolve(__dirname, '../webextensions-emulator');

async function addBackgroundScript() {
  const html = await readFile(pathResolve(__dirname, './container.html'), 'utf8');

  const data = await readJSON(pathResolve(distDir, 'manifest.json'));

  const newHtml = html.replace(
    '<!-- background-script -->',
    data.background.scripts
      .map((link) => {
        return `<script src="./${link}"></script>`;
      })
      .join('\n')
  );

  await writeFile(pathResolve(distDir, 'index.html'), newHtml);
}

async function addContentScript() {
  const names = ['quick-search', 'options', 'audio-control'];

  const ps = names.map(async (name) => {
    const origin = pathResolve(distDir, `origin-${name}.html`);
    const isEists = await pathExists(origin);
    if (!isEists) {
      await move(pathResolve(distDir, `${name}.html`), origin);
    }

    const html = await readFile(origin, 'utf8');

    const newHtml = html
      .replace('<script', `\n<script src="./mock/background.js"></script>\n<script`)
      .replace(/script src="\//g, 'script src="./')
      .replace(/link href="\//g, 'link href="./');

    await writeFile(pathResolve(distDir, `${name}.html`), newHtml);
  });

  await Promise.all(ps);
}

async function replaceWebextensionsEmulator() {
  await copy(pathResolve(__dirname, 'webextensions-emulator-replace'), emulatorDir);
}

const type = process.argv[2];

console.info('type: ', type);

if (type === 'WebextensionsEmulator') {
  replaceWebextensionsEmulator().catch(console.warn);
} else {
  Promise.all([addBackgroundScript(), addContentScript()]).catch(console.warn);
}
