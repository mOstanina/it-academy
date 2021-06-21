// создаю фон для ирового поля

var gameContainer = document.getElementById("container")//нахожу контейнер
var gameScreen = document.getElementById("screen");// нахожу весь экран 
var gameWindow = document.getElementById("gameWindow");//нахожу игровое пространство
var infoHeight = document.getElementById("info");//нахожу область отображения счета
var widthGameWindow = window.getComputedStyle(gameContainer).width;// определяю ширину игровой области
widthGameWindow = parseFloat(widthGameWindow.replace(/[px]/g, ''));
var btnRadius;
var heightGameWindow = 0;
var mobileScreenWidth = 0;
var mobileScreenHeight = 0;
var btnDistance;
//задаю числовое значение виду и положению экрана
var screenPosition = 0; // 0- десктоп;  1- мобильное утр-во горизонтально; 2- мобильное утр-во вертикально;
drowGame()
window.addEventListener("resize", drowGame, false);
function drowGame() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Вы используете мобильное устройство (телефон или планшет).")
        mobileScreenHeight = window.screen.height//определяю высоту экрана устройства
        console.log("высота устройства " + mobileScreenHeight)
        mobileScreenWidth = window.screen.width//определяю ширину экрана устройства
        console.log("ширина устройства " + mobileScreenWidth)
        function sizeMobile() {
            gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
            gameWindow.setAttribute("style", "height:" + mobileScreenHeight + "px")
        }
        sizeMobile();
        function rotate() {

            if (mobileScreenHeight > mobileScreenWidth) {
                console.log("vert");
                screenPosition = 2;
                gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
                gameWindow.setAttribute("style", "height:" + mobileScreenWidth * 0.66 + "px")
                //btnRadius = mobileScreenWidth * 0.5;
                btnRadius = mobileScreenWidth * 0.05;//задаю радиус кнопки
                console.log(btnRadius);
                var btnDistance = (mobileScreenWidth - btnRadius * 2 * 5) / 6; //расстояние между кнопками
                console.log(mobileScreenWidth);
                console.log(btnDistance);

            } else {
                console.log("gorizont");
                screenPosition = 1;
                gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
                gameWindow.setAttribute("style", "height:" + mobileScreenHeight + "px");
                btnRadius = mobileScreenHeight * 0.05;//задаю радиус кнопки
                console.log(btnRadius);
                //var btnDistance = (mobileScreenWidth - btnRadius * 2 * 5) / 6; //расстояние между кнопками
                console.log(mobileScreenWidth);
                //console.log(btnDistance);
            }
        }
        rotate()

    } else {
        screenPosition = 0;
        console.log("Вы используете ПК.")
        heightGameWindow = widthGameWindow * 0.66;
        gameWindow.setAttribute("style", "height:" + heightGameWindow + "px");
        btnRadius = heightGameWindow * 0.05;//задаю радиус кнопки
    }
}
// // рисую кнопки
// function leftBtnn() {
var leftBtn = document.getElementById("left");
var leftButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
gameContainer.appendChild(leftButton);// прикрепляю кнопку к gameContainer
leftButton.style.position = "absolute";
function hhh() {
    if (screenPosition === 0) {
        leftButton.style.width = heightGameWindow * 0.1;
        leftButton.style.height = heightGameWindow * 0.1;
        console.log(widthGameWindow)
        var rr = (widthGameWindow - btnRadius * 2 * 5) / 6;//расстояние от левого края до кнопки
        btnDistance = Math.floor(rr) + "px";
        leftButton.style.left = btnDistance;
        leftButton.style.bottom = "5px";
    }
    if (screenPosition === 1) {
        console.log("!!!")
        leftButton.style.width = mobileScreenWidth * 0.1;
        leftButton.style.height = mobileScreenWidth * 0.1;
        var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
        btnDistance = Math.floor(rr) + "px";
        console.log(btnDistance)
        leftButton.style.left = btnDistance;
        leftButton.style.top = mobileScreenHeight / 2 + "px";
    }
    if (screenPosition === 2) {
        console.log("jjjjj")
        leftButton.style.width = mobileScreenWidth * 0.1;
        leftButton.style.height = mobileScreenWidth * 0.1;
        var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
        btnDistance = Math.floor(rr) + "px";
        console.log(btnDistance)
        leftButton.style.left = btnDistance;
        leftButton.style.top = mobileScreenWidth * 0.66 + "px";
        console.log(mobileScreenHeight - mobileScreenWidth * 0.66)
    }
}
//hhh()

window.addEventListener("resize", hhh, false);
window.addEventListener("DOMContentLoaded", hhh, false);
var leftCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
leftCircle.setAttribute("fill", "sandybrown");
var leftCircleRdius = btnRadius
leftCircle.setAttribute("r", leftCircleRdius);
leftCircle.setAttribute("cx", leftCircleRdius);
leftCircle.setAttribute("cy", leftCircleRdius);
leftButton.appendChild(leftCircle);

var firstLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
leftButton.appendChild(firstLine);
firstLine.setAttribute("stroke-width", 5);
firstLine.setAttribute("stroke", "black");
firstLine.setAttribute("x1", leftCircleRdius * 1.5);
firstLine.setAttribute("y1", leftCircleRdius * 1);
firstLine.setAttribute("x2", leftCircleRdius * 0.3);
firstLine.setAttribute("y2", leftCircleRdius * 1);
firstLine.setAttribute("stroke-linecap", "round");
firstLine.setAttribute("transform-origin", leftCircleRdius);
var secongLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
leftButton.appendChild(secongLine);
secongLine.setAttribute("stroke-width", 5);
secongLine.setAttribute("stroke", "black");
secongLine.setAttribute("x1", leftCircleRdius * 1.1);
secongLine.setAttribute("y1", leftCircleRdius * 1.5);
secongLine.setAttribute("x2", leftCircleRdius * 0.3);
secongLine.setAttribute("y2", leftCircleRdius * 1);
secongLine.setAttribute("stroke-linecap", "round");
secongLine.setAttribute("transform-origin", leftCircleRdius);
var thirdLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
leftButton.appendChild(thirdLine);
thirdLine.setAttribute("stroke-width", 5);
thirdLine.setAttribute("stroke", "black");
thirdLine.setAttribute("x1", leftCircleRdius * 1.1);
thirdLine.setAttribute("y1", leftCircleRdius * 0.5);
thirdLine.setAttribute("x2", leftCircleRdius * 0.3);
thirdLine.setAttribute("y2", leftCircleRdius * 1);
thirdLine.setAttribute("stroke-linecap", "round");
thirdLine.setAttribute("transform-origin", leftCircleRdius);


//leftBtnn()
function rightBtn() {//     ВПРАВО
    var rightBtn = document.getElementById("left");
    var rightButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(rightButton);// прикрепляю кнопку к gameContainer
    rightButton.style.width = heightGameWindow * 0.1;
    rightButton.style.height = heightGameWindow * 0.1;
    rightButton.style.position = "absolute";

    rightButton.style.right = "10px";
    rightButton.style.bottom = "5px";

    var rightCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    rightCircle.setAttribute("fill", "sandybrown");
    var rightCircleRdius = btnRadius
    rightCircle.setAttribute("r", rightCircleRdius);
    rightCircle.setAttribute("cx", rightCircleRdius);
    rightCircle.setAttribute("cy", rightCircleRdius);
    rightButton.appendChild(rightCircle);

    var firstLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    rightButton.appendChild(firstLine);
    firstLine.setAttribute("stroke-width", 5);
    firstLine.setAttribute("stroke", "black");
    firstLine.setAttribute("x1", rightCircleRdius * 1.7);
    firstLine.setAttribute("y1", rightCircleRdius * 1);
    firstLine.setAttribute("x2", rightCircleRdius * 0.5);
    firstLine.setAttribute("y2", rightCircleRdius * 1);
    firstLine.setAttribute("stroke-linecap", "round");
    firstLine.setAttribute("transform-origin", rightCircleRdius);
    var secongLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    rightButton.appendChild(secongLine);
    secongLine.setAttribute("stroke-width", 5);
    secongLine.setAttribute("stroke", "black");
    secongLine.setAttribute("x1", rightCircleRdius * 1.1);
    secongLine.setAttribute("y1", rightCircleRdius * 1.5);
    secongLine.setAttribute("x2", rightCircleRdius * 1.7);
    secongLine.setAttribute("y2", rightCircleRdius * 1);
    secongLine.setAttribute("stroke-linecap", "round");
    secongLine.setAttribute("transform-origin", rightCircleRdius);
    var thirdLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    rightButton.appendChild(thirdLine);
    thirdLine.setAttribute("stroke-width", 5);
    thirdLine.setAttribute("stroke", "black");
    thirdLine.setAttribute("x1", rightCircleRdius * 1.1);
    thirdLine.setAttribute("y1", rightCircleRdius * 0.5);
    thirdLine.setAttribute("x2", rightCircleRdius * 1.7);
    thirdLine.setAttribute("y2", rightCircleRdius * 1);
    thirdLine.setAttribute("stroke-linecap", "round");
    thirdLine.setAttribute("transform-origin", rightCircleRdius);

}
//rightBtn()
//          windowHeight
function recordsBtn() { //  РЕКОДЫ
    var recordsBtn = document.getElementById("left");
    var recordsButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(recordsButton);// прикрепляю кнопку к gameContainer
    recordsButton.style.width = heightGameWindow * 0.1;
    recordsButton.style.height = heightGameWindow * 0.1;
    recordsButton.style.position = "absolute";
    recordsButton.style.right = "340px";
    recordsButton.style.bottom = "5px";
    recordsButton.style.zIndex = 10;

    var recordsCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    recordsCircle.setAttribute("fill", "sandybrown");
    var recordsCircleRdius = btnRadius
    recordsCircle.setAttribute("r", recordsCircleRdius);
    recordsCircle.setAttribute("cx", recordsCircleRdius);
    recordsCircle.setAttribute("cy", recordsCircleRdius);
    recordsButton.appendChild(recordsCircle);

    var star = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    recordsButton.appendChild(star);
    star.setAttribute("stroke-width", 2);
    star.setAttribute("fill", "black");
    star.setAttribute("stroke", "black");
    // star.setAttribute("stroke-linecap", "round");
    // star.setAttribute("stroke-linejoin", "round");
    // star.setAttribute("stroke-miterlimit", "10");
    var starPoints = "  " + Math.floor(recordsCircleRdius * 0.4) + "," + Math.floor(recordsCircleRdius * 1.6) + " " + Math.floor(recordsCircleRdius * 0.7) + "," + Math.floor(recordsCircleRdius * 0.9) + " " + Math.floor(recordsCircleRdius * 0.4) + "," + Math.floor(recordsCircleRdius * 0.4) + " " + Math.floor(recordsCircleRdius * 0.8) + "," + Math.floor(recordsCircleRdius * 0.4) + " " + Math.floor(recordsCircleRdius * 1) + "," + Math.floor(recordsCircleRdius * 0.2) + " " + Math.floor(recordsCircleRdius * 0.8) + "," + Math.floor(recordsCircleRdius * 0.4) + " " + Math.floor(recordsCircleRdius * 1.6) + "," + Math.floor(recordsCircleRdius * 0.4) + " " + Math.floor(recordsCircleRdius * 1.2) + "," + Math.floor(recordsCircleRdius * 0.5) + " " + Math.floor(recordsCircleRdius * 1.6) + "," + Math.floor(recordsCircleRdius * 1.6) + " " + Math.floor(recordsCircleRdius * 0.5) + "," + Math.floor(recordsCircleRdius * 1)
    star.setAttribute("points", starPoints)
    // //&#9734;
    // var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // recordsCircle.appendChild(txt);
    // txt.style.fill = "black";
    // var fontSize = 10
    // txt.style.fontSize = fontSize
    // var i="&star;"
    // console.log(i)
    // txt.textContent = `${i}`


}
//recordsBtn()
function pouseBtn() { //  ПАУЗА
    var pouseBtn = document.getElementById("left");
    var pouseButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(pouseButton);// прикрепляю кнопку к gameContainer
    pouseButton.style.width = heightGameWindow * 0.1;
    pouseButton.style.height = heightGameWindow * 0.1;
    pouseButton.style.position = "absolute";
    pouseButton.style.right = "110px";
    pouseButton.style.bottom = "5px";

    var pouseCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pouseCircle.setAttribute("fill", "sandybrown");
    var pouseCircleRdius = btnRadius
    pouseCircle.setAttribute("r", pouseCircleRdius);
    pouseCircle.setAttribute("cx", pouseCircleRdius);
    pouseCircle.setAttribute("cy", pouseCircleRdius);
    pouseButton.appendChild(pouseCircle);

    var pouseLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    pouseButton.appendChild(pouseLine);
    pouseLine.setAttribute("stroke-width", 8);
    pouseLine.setAttribute("stroke", "black");
    pouseLine.setAttribute("x1", pouseCircleRdius * 1.3);
    pouseLine.setAttribute("y1", pouseCircleRdius * 1.5);
    pouseLine.setAttribute("x2", pouseCircleRdius * 1.3);
    pouseLine.setAttribute("y2", pouseCircleRdius * 0.5);
    pouseLine.setAttribute("stroke-linecap", "round");
    pouseLine.setAttribute("transform-origin", pouseCircleRdius);
    var pouseSecondLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    pouseButton.appendChild(pouseSecondLine);
    pouseSecondLine.setAttribute("stroke-width", 8);
    pouseSecondLine.setAttribute("stroke", "black");
    pouseSecondLine.setAttribute("x1", pouseCircleRdius * 0.7);
    pouseSecondLine.setAttribute("y1", pouseCircleRdius * 1.5);
    pouseSecondLine.setAttribute("x2", pouseCircleRdius * 0.7);
    pouseSecondLine.setAttribute("y2", pouseCircleRdius * 0.5);
    pouseSecondLine.setAttribute("stroke-linecap", "round");
    pouseSecondLine.setAttribute("transform-origin", pouseCircleRdius);
}
//pouseBtn()
function playBtn() {//     ИГРАТЬ
    var playBtn = document.getElementById("left");
    var playButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(playButton);// прикрепляю кнопку к gameContainer
    playButton.style.width = heightGameWindow * 0.1;
    playButton.style.height = heightGameWindow * 0.1;
    playButton.style.position = "absolute";
    playButton.style.right = "240px";
    playButton.style.bottom = "5px";

    var playCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    playCircle.setAttribute("fill", "sandybrown");
    var playCircleRdius = btnRadius
    playCircle.setAttribute("r", playCircleRdius);
    playCircle.setAttribute("cx", playCircleRdius);
    playCircle.setAttribute("cy", playCircleRdius);
    playButton.appendChild(playCircle);

    var pous = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    playButton.appendChild(pous);
    pous.setAttribute("stroke-width", 1);
    pous.setAttribute("fill", "black");
    pous.setAttribute("stroke", "black");
    var playPoints = "  " + Math.floor(playCircleRdius * 0.7) + "," + Math.floor(playCircleRdius * 1.5) + " " + Math.floor(playCircleRdius * 0.7) + "," + Math.floor(playCircleRdius * 0.5) + " " + Math.floor(playCircleRdius * 1.5) + "," + Math.floor(playCircleRdius * 1) + " "
    pous.setAttribute("points", playPoints);
    pous.setAttribute("fill", "black");
}
//playBtn()
