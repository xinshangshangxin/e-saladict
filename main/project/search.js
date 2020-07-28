const humps = require('humps');

const { instance } = require('./instance');
const { showWindow } = require('./show-window');

function search(text) {
  text = text.trim();

  // 只是一个单词, 尝试转换
  if (!/\s+/.test(text)) {
    if (/^[A-Z\-]+$/.test(text)) {
      // 全是大写, 什么也不做
    } else if (/-|_/.test(text)) {
      // 有分隔符, 分割
      text = text.split(/-|_/).join(' ');
    } else {
      // 转换为小写空格分割
      text = humps.decamelize(text, { separator: ' ' });
    }
  }

  console.log('search text: ', text);

  instance.redirectSubject.next(text);

  showWindow();
}

module.exports = { search };
