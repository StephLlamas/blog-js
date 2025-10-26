let clockTime = document.querySelector(".clock__time");

setInterval(() => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let mins = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    //Cuando solo es una línea de código, se puede utilizar el "if" sin las "{}"
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (seconds < 10) seconds = "0" + seconds;

    clockTime.innerHTML = `${hours}:${mins}:${seconds}`;
}, 1000);