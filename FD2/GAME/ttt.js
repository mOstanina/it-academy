// создаю фон для ирового поля

var gameContainer = document.getElementById("container")//нахожу контейнер
var gameScreen = document.getElementById("screen");// нахожу весь экран 
var gameWindow = document.getElementById("gameWindow");//нахожу игровое пространство
var infoHeight = document.getElementById("info");//нахожу область отображения счета
var widthGameWindow = window.getComputedStyle(gameContainer).width;// определяю ширину игровой области
widthGameWindow = parseFloat(widthGameWindow.replace(/[px]/g, ''));
var btnRadius = 0;
var heightGameWindow = 0;
drowGame()
window.addEventListener("resize", drowGame, false);

function drowGame() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Вы используете мобильное устройство (телефон или планшет).")
        var mobileScreenHeight = window.screen.height//определяю высоту экрана устройства
        console.log("высота устройства " + mobileScreenHeight)
        var mobileScreenWidth = window.screen.width//определяю ширину экрана устройства
        console.log("ширина устройства " + mobileScreenWidth)

        function sizeMobile() {

            gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
            gameWindow.setAttribute("style", "height:" + mobileScreenHeight + "px")
        }
        sizeMobile();

        function rotate() {

            if (mobileScreenHeight > mobileScreenWidth) {
                console.log("vert");
                gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
                gameWindow.setAttribute("style", "height:" + mobileScreenWidth * 0.66 + "px")
                btnRadius = mobileScreenWidth * 0.5;

            } else {
                console.log("gorizont");
                gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
                gameWindow.setAttribute("style", "height:" + mobileScreenHeight + "px")
            }
        }
        rotate()
    } else {
        console.log("Вы используете ПК.")
        heightGameWindow = widthGameWindow * 0.66;
        gameWindow.setAttribute("style", "height:" + heightGameWindow + "px");
        btnRadius = heightGameWindow * 0.05;
    }

}


// рисую кнопки
var leftBtn = document.getElementById("left");
var leftButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
gameContainer.appendChild(leftButton);// прикрепляю кнопку к gameContainer
// console.log(widthGameWindow)
// console.log(heightGameWindow)
leftButton.style.width = heightGameWindow * 0.1;
leftButton.style.height = heightGameWindow * 0.1;
leftButton.style.position = "absolute";
leftButton.style.left = "10px";
leftButton.style.bottom = "5px";

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
firstLine.setAttribute("x2", leftCircleRdius * 0.2);
firstLine.setAttribute("y2", leftCircleRdius * 1);
firstLine.setAttribute("stroke-linecap", "round");
firstLine.setAttribute("transform-origin", leftCircleRdius);
var secongLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
leftButton.appendChild(secongLine);
secongLine.setAttribute("stroke-width", 5);
secongLine.setAttribute("stroke", "black");
secongLine.setAttribute("x1", leftCircleRdius * 1.1);
secongLine.setAttribute("y1", leftCircleRdius * 1.5);
secongLine.setAttribute("x2", leftCircleRdius * 0.2);
secongLine.setAttribute("y2", leftCircleRdius * 1);
secongLine.setAttribute("stroke-linecap", "round");
secongLine.setAttribute("transform-origin", leftCircleRdius);
var thirdLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
leftButton.appendChild(thirdLine);
thirdLine.setAttribute("stroke-width", 5);
thirdLine.setAttribute("stroke", "black");
thirdLine.setAttribute("x1", leftCircleRdius * 1.1);
thirdLine.setAttribute("y1", leftCircleRdius * 0.5);
thirdLine.setAttribute("x2", leftCircleRdius * 0.2);
thirdLine.setAttribute("y2", leftCircleRdius * 1);
thirdLine.setAttribute("stroke-linecap", "round");
thirdLine.setAttribute("transform-origin", leftCircleRdius);


//для паузы
// var firstLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
// leftButton.appendChild(firstLine);
// firstLine.setAttribute("stroke-width", 3);
// firstLine.setAttribute("stroke", "black");
// firstLine.setAttribute("x1", leftCircleRdius);
// firstLine.setAttribute("y1", leftCircleRdius * 0.3);
// firstLine.setAttribute("x2", leftCircleRdius);
// firstLine.setAttribute("y2", leftCircleRdius * 1.05);
// firstLine.setAttribute("stroke-linecap", "round");
// firstLine.setAttribute("transform-origin", leftCircleRdius);
