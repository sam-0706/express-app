let count = 0;

function updateCounter(change) {
  count += change;
  document.getElementById('counter').textContent = count;
}