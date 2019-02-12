'use strict';

let timeUTCBox = document.querySelector('#time-UTC'),
    timeLocalBox = document.querySelector('#time-local'),
    timeZoneBox = document.querySelector('#time-zone');

function addZero(digit) {
    return (digit < 10) ? '0' + digit : '' + digit;
}

setTimeout(function postTimes() {
    
    let myTime = new Date(),
        localTimeZone = myTime.getTimezoneOffset() / 60,
        timeUTC = addZero(myTime.getUTCHours()) + ':' + addZero(myTime.getUTCMinutes()) + ':' + addZero(myTime.getUTCSeconds()),
        timeLocal = addZero(myTime.getHours()) + ':' + addZero(myTime.getMinutes()) + ':' + addZero(myTime.getSeconds());

    timeUTCBox.textContent = timeUTC;
    timeLocalBox.textContent = timeLocal;
    timeZoneBox.textContent = localTimeZone;

    setTimeout(postTimes, 1000);
    
});