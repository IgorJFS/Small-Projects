function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const horario = `${hours}:${minutes}:${seconds}`
    document.getElementById("clock").textContent = horario

    changeBackgroundBasedOnTime(hours)
}
updateClock();
setInterval(updateClock,1000);

function changeBackgroundBasedOnTime(hours) {
    const backgroundElement = document.getElementById('background-image');
    
    if (hours >= 6 && hours < 12) {
        // Manhã (6h às 12h)
        backgroundElement.style.backgroundImage = "url('images/LondonDay.jpg')"; // Substitua pelo caminho correto
    } else if (hours >= 12 && hours < 18) {
        // Tarde (12h às 18h)
        backgroundElement.style.backgroundImage = "url('images/LondonNoon.jpg')"; // Substitua pelo caminho correto
    } else {
        // Noite (18h às 6h)
        backgroundElement.style.backgroundImage = "url('images/LondonNight.jpg')"; // Substitua pelo caminho correto
    }
}