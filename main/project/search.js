const humps = require('humps');

const { instance } = require('./instance');
const { showWindow } = require('./show-window');

function splitWord(word) {
  // 全是大写, 什么也不做
  if (/^[A-Z\-]+$/.test(word)) {
    return word;
  }

  // 有分隔符, 分割
  if (/-|_/.test(text)) {
    return text.split(/-|_/).join(' ');
  }

  // 转换为小写空格分割
  return humps.decamelize(text, { separator: ' ' });
}

function search(text) {
  text = text.trim();

  // 只是一个单词, 尝试转换
  if (!/\s/.test(text)) {
    text = splitWord(text);
  }

  console.log('search text: ', text);

  instance.redirectSubject.next(text);

  showWindow();
}

module.exports = { search };
