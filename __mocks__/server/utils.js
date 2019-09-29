const delay = (fn, ms = 1000) =>
  new Promise(resolve => {
    setTimeout(() => {
      fn();
      resolve();
    }, ms);
  });

module.exports = {
  delay
};
