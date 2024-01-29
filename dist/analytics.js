"use strict";
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics("data");
const button = document.querySelector('button');
button.addEventListener("click", () => {
    console.log('clicked');
});
