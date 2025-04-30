let timerInterval;

function updateTimer() {
  const targetDate = new Date('2025-08-22T10:00:00');
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    clearInterval(timerInterval); 
    document.querySelector('.timer').innerHTML = '<div class="expired">EXPIRED</div>';
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
  document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
}

updateTimer();
timerInterval = setInterval(updateTimer, 1000);