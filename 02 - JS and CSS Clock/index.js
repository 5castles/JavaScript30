const hourHand = document.querySelector('.hour-hand'),
    minHand = document.querySelector('.min-hand'),
    secondHand = document.querySelector('.second-hand');

function getTime(){
    const time = new Date();
    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds/60) * 3.6) + 90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    const minutes = time.getMinutes();
    const minutesDegrees = ((minutes/60) * 3.6) + 90;
    minHand.style.transform=`rotate(${minutesDegrees}deg)`;

    const hours = time.getHours();
    const hoursDegrees = ((hours/12) * 3.6) + 90;
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`;

    console.log(hours, minutes, seconds)
}
function init(){
    setInterval(getTime, 1000);
   
}
init();