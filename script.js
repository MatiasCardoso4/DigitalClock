const hourDisplay = document.getElementById("hour");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  setInterval(() => {
    seconds++;

    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
    if (minutes > 59) {
      minutes = 0;
      hour++;
    }

    if (hour > 23) {
      hour = 0;
    }

    seconds = (seconds < 10 ? "0" : "") + seconds;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    hour = (hour < 10 ? "0" : "") + hour;

    const currentTime = hour + ":" + minutes + ":" + seconds;
    hourDisplay.textContent = currentTime;
  }, 1000);
}

function updateSecondHand() {
  const now = new Date();
  const seconds = now.getSeconds();
  const angle = seconds * 6; // Cada segundo representa 6 grados (360 grados / 60 segundos)

  // Convertir grados a radianes para calcular la posición en el borde
  const radians = (angle * Math.PI) / 180;

  // Definir el radio del reloj
  const radius = 200; // Mitad del tamaño del .clock (400px / 2)

  // Calcular las coordenadas del círculo (segundero) usando seno y coseno
  const x = Math.cos(radians - Math.PI / 2) * radius;
  const y = Math.sin(radians - Math.PI / 2) * radius;

  // Mover la manecilla a la nueva posición
  secondHand.style.transform = `translate(${x}px, ${y}px)`;
}

// Actualizar la posición de la manecilla cada segundo
setInterval(updateSecondHand, 1000);

// Inicializar la posición al cargar la página
updateSecondHand();

window.addEventListener("DOMContentLoaded", setClock());
