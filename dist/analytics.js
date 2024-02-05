"use strict";
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics("data");
var button = document.querySelector('button');
// const button = document.querySelector('button')!
function clickHandler(message) {
    console.log("Clicked " + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "you are welcome"));
}
