// Optional small price animation. Page still displays normally even if this script fails.
(function () {
  var priceEl = document.getElementById('current-price');
  if (!priceEl) return;

  var currentPrice = 0.023;

  setInterval(function () {
    var variance = (Math.random() - 0.5) * 0.002;
    currentPrice = Math.max(0.022, Math.min(0.025, currentPrice + variance));
    priceEl.textContent = '$' + currentPrice.toFixed(3);
  }, 3000);
})();
