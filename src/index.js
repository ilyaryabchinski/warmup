module.exports = function warmup(temperature) {
  if(Number.isFinite(temperature)){
    return 9 * temperature / 5 + 32;
  }
};