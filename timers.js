const timeoutOnly = (state) => {
  setTimeout(() => {
    state.ok = true;
  }, 0);
};

const tickOnly = (state) => {
  process.nextTick(() => {
    state.ok = true;
  });
};

const timeoutThenTick = (state) => {
  setTimeout(() => {
    process.nextTick(() => {
      state.ok = true;
    });
  }, 0);
};

module.exports = { timeoutOnly, tickOnly, timeoutThenTick };
