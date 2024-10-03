const hourDisplay = document.getElementById("hour");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

function setClock() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  setInterval(() => {
    seconds += 1;
    if (seconds > 59) {
      seconds = 0;
    } else if (seconds < 10) {
      secondsDisplay.textContent = `0${seconds}`;
    }
  }, 1000);

  hourDisplay.textContent += hour + ":";
  minutesDisplay.textContent += minutes + ":";
  secondsDisplay.textContent = seconds;
}

setClock();
