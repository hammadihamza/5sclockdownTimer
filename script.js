timeLeft = 5;

function countdown() {
  timeLeft--;
  document.getElementById("seconds").innerHTML = String(timeLeft);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
  }
  if (timeLeft == 0) {
    window.location.replace("https://google.com");
  }
}

setTimeout(countdown, 1000);
