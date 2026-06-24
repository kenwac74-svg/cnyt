// Fixed reference value. CNYT is presented as a private-market reference value,
// not a live market quote.
(function () {
  var priceEl = document.getElementById('current-price');
  if (!priceEl) return;

  priceEl.textContent = '$0.021';
})();
