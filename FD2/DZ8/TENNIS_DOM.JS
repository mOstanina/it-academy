"use strict";
// var btn = document.createElement("div");// создаю кнопку
// document.body.appendChild(btn)
// btn.style.height = "30px";
// btn.style.width = "60px";
// btn.style.backgroundColor = "#8080806b";
// btn.style.marginBottom = "15px";
// btn.style.onclick = 'start()'
// var playArea = document.createElement("div");//создаю игровое поле
// document.body.appendChild(playArea)
// var playAreaHeight = 300; // размеры поля (без единиц измерения)
// playArea.style.height = playAreaHeight + "px";
// var playAreaWidth = 600;  // размеры поля (без единиц измерения)
// playArea.style.width = playAreaWidth + "px";
// playArea.style.backgroundColor = "#ffff0061"
// playArea.style.borderColor = "black";
// playArea.style.borderWidth = "1px"
// playArea.style.borderStyle = "solid"
// var playAreaCenterX = playAreaWidth / 2 // координата центра по X (без единиц измерения)
// var playAreaCenterY = playAreaHeight / 2 // координата центра по Y (без единиц измерения)

// var gameBall = document.createElement("div");//создаю мяч
// playArea.appendChild(gameBall)
// var gameBallRadius = playAreaWidth * 0.05
// gameBall.style.width = gameBallRadius + "px";
// gameBall.style.height = gameBallRadius + "px";
// gameBall.style.backgroundColor = "red"
// gameBall.style.borderColor = "black";
// gameBall.style.borderWidth = "1px"
// gameBall.style.borderStyle = "solid"
// gameBall.style.borderRadius = "50%"
// gameBall.style.borderRadius = "50%"
// gameBall.style.position = "absolute";
// gameBall.style.left = playAreaCenterX - gameBallRadius / 2 + "px";
// gameBall.style.top = playAreaCenterY + gameBallRadius + "px";



var ballH={
    posX : 20,
    posY : 10,
    speedX : 4,
    speedY : 0,
    accelX : 0,
    accelY : 0.5,
    width : 50,
    height: 50,

    update : function() {
        var ballElem=document.getElementById('IBall');
        ballElem.style.left=Math.round(this.posX)+"px";
        ballElem.style.top=Math.round(this.posY)+"px";
    }
}

var areaH={
    width : 400,
    height : 300
}

function start() {
    // плавное движение - от 25 кадр/сек
    setInterval(tick,40);
}

function tick() {

    ballH.speedX+=ballH.accelX;
    ballH.posX+=ballH.speedX;

    // вылетел ли мяч правее стены?
    if ( ballH.posX+ballH.width>areaH.width ) {
        ballH.speedX=-ballH.speedX;
        ballH.posX=areaH.width-ballH.width;
    }
    // вылетел ли мяч левее стены?
    if ( ballH.posX<0 ) {
        ballH.speedX=-ballH.speedX;
        ballH.posX=0;
    }

    ballH.speedY+=ballH.accelY;
    ballH.posY+=ballH.speedY;

    // вылетел ли мяч ниже пола?
    if ( ballH.posY+ballH.height>areaH.height ) {
        ballH.speedY=-ballH.speedY;
        ballH.posY=areaH.height-ballH.height;
    }

    ballH.update();
}

ballH.update();