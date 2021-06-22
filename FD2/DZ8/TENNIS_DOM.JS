"use strict";
var btn = document.createElement("div");// создаю кнопку
document.body.appendChild(btn)
btn.style.height = "30px";
btn.style.width = "60px";
btn.style.backgroundColor = "#8080806b";
btn.style.marginBottom = "15px";
btn.style.onclick = 'start()'
var playArea = document.createElement("div");//создаю игровое поле
document.body.appendChild(playArea)
var playAreaHeight = 300; // размеры поля (без единиц измерения)
playArea.style.height = playAreaHeight + "px";
var playAreaWidth = 600;  // размеры поля (без единиц измерения)
playArea.style.width = playAreaWidth + "px";
playArea.style.backgroundColor = "#ffff0061"
playArea.style.borderColor = "black";
playArea.style.borderWidth = "1px"
playArea.style.borderStyle = "solid"
var playAreaCenterX = playAreaWidth / 2 // координата центра по X (без единиц измерения)
var playAreaCenterY = playAreaHeight / 2 // координата центра по Y (без единиц измерения)

var gameBall = document.createElement("div");//создаю мяч
playArea.appendChild(gameBall)
var gameBallRadius = playAreaWidth * 0.05
gameBall.style.width = gameBallRadius + "px";
gameBall.style.height = gameBallRadius + "px";
gameBall.style.backgroundColor = "red"
gameBall.style.borderColor = "black";
gameBall.style.borderWidth = "1px"
gameBall.style.borderStyle = "solid"
gameBall.style.borderRadius = "50%"
gameBall.style.borderRadius = "50%"
gameBall.style.position = "absolute";
gameBall.style.left = playAreaCenterX - gameBallRadius / 2 + "px";
gameBall.style.top = playAreaCenterY + gameBallRadius + "px";

var ball = {
    posX: 20,
    posY: 10,
    speedX: 4,
    speedY: 0,
    accelX: 0,
    accelY: 0.5,
    width: 50,
    height: 50,
    update: function () {
        var ballElem = document.getElementById('IBall');
        ballElem.style.left = Math.round(this.posX) + "px";
        ballElem.style.top = Math.round(this.posY) + "px";
    }
}

var playArea = {
    width: 300,
    height: 600
}

function start() {
    // плавное движение - от 25 кадр/сек
    setInterval(tick, 40);
}

function tick() {

    ball.speedX += ball.accelX;
    ball.posX += ball.speedX;

    // вылетел ли мяч правее стены?
    if (ball.posX + ball.width > playArea.width) {
        ball.speedX = -ball.speedX;
        ball.posX = playArea.width - ball.width;
    }
    // вылетел ли мяч левее стены?
    if (ball.posX < 0) {
        ball.speedX = -ball.speedX;
        ball.posX = 0;
    }

    ball.speedY += ball.accelY;
    ball.posY += ball.speedY;

    // вылетел ли мяч ниже пола?
    if (ball.posY + ball.height > playArea.height) {
        ball.speedY = -ball.speedY;
        ball.posY = playArea.height - ball.height;
    }

    ball.update();
}
ball.update();
btn.addEventListener("click", tick, false)
