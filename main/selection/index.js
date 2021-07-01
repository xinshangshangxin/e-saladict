const { clipboard } = require("electron");
const robot = require("robotjs");

const getCopyText = () => {
  if (process.platform !== "darwin") {
    robot.keyTap("c", ["control"]);
  } else {
    robot.keyTap("c", ["command"]);
  }

  return clipboard.readText();
};

const getSelectionText = (() => {
  let lastVal = clipboard.readText();

  return async () => {
    let status = "init";
    const arr = [50, 100, 500, 900, 1000];

    return new Promise((resolve, reject) => {
      arr.forEach((delay, i) => {
        setTimeout(() => {
          if (status === "loading" || status === "success") {
            return;
          }

          status = "loading";

          if (i === arr.length - 1) {
            resolve(lastVal);
            return;
          }

          const txt = getCopyText();
          if (lastVal !== txt) {
            resolve(txt);
            status = "success";
            lastVal = txt;
          } else {
            status = "failed";
          }
        }, delay);
      });
    });
  };
})();

module.exports = { getSelectionText };
