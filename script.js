let ballObj = null
ballObj = document.getElementById("football");

function init() {
    ballObj = document.getElementById("football")
    ballObj.style.position = "relative";
    ballObj.style.left = "300" + "px";
}
function moveRight() {
    ballObj.style.left = parseInt(ballObj.style.left) + 10 + "px";
}
function moveLeft() {
    ballObj.style.left = parseInt(ballObj.style.left) - 10 + "px";
}
window.onload = init;
