function defer() {
  let resolve;
  let reject;
  const promise = new Promise((re, rj) => {
    resolve = re;
    reject = rj;
  });

  return {
    resolve,
    reject,
    promise,
  };
}

module.exports = { defer };
