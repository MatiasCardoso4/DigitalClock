const hourDisplay = document.getElementById("hour");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hourDisplay.textContent += hour + ":";
  setInterval(() => {
    seconds++;

    if (seconds > 59) {
      seconds = 0;
    }
    if (minutes > 59) {
      minutes = 0;
    }
    if (hour > 23) {
      hour = 0;
    }

    seconds = (seconds < 10 ? "0" : "") + seconds;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    hour = (hour < 10 ? "0" : "") + hour;

    const rotationDegrees = seconds * 6;
    secondHand.style.transform = `rotate(${rotationDegrees}deg)`;
    const currentTime = hour + ":" + minutes + ":" + seconds;
    hourDisplay.textContent = currentTime;
  }, 1000);
}

setClock();
