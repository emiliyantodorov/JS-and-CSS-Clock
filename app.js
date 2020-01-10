const handSecondEl = document.querySelector(".hand--second");
const handMinuteEl = document.querySelector(".hand--minute");
const handHourEl = document.querySelector(".hand--hour");

function moveClockHand(timeNow, time) {
    return ((timeNow / time) * 360) + 90;
}

const clock = setInterval(function () {
    const now = new Date();

    handSecondEl.style.transform = `rotate(${moveClockHand(now.getSeconds(), 60)}deg)`;
    handMinuteEl.style.transform = `rotate(${moveClockHand(now.getMinutes(), 60)}deg)`;
    handHourEl.style.transform = `rotate(${moveClockHand(now.getHours(), 12)}deg)`;

}, 1000);