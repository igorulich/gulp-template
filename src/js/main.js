var bl = document.getElementById('block'),
  hv = document.querySelector('.hover');

bl.onmouseover = function () {
  hv.style.display = 'block';
}

hv.onmouseout = function () {
  hv.style.display = 'none';
}
