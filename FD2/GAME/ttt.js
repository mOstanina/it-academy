"use strict";
/////
var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
function AJAXStorage(stringName) {
    var self = this;
    self.storage;
    // addInfo(self.storage)
    self.restoreInfo = function () {
        $.ajax({
            url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
            data: { f: 'READ', n: stringName },
            success: readReady, error: errorHandler
        });
    }
    function readReady(callresult) {
        if (callresult.error != undefined)
            alert(callresult.error);
        else if (callresult.result != "") {
            self.storage = JSON.parse(callresult.result);
            //return info
            //storage = self.storage
        }
    }
    self.storeInfo = function () {
        updatePassword = Math.random();
        $.ajax({
            url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
            data: { f: 'LOCKGET', n: stringName, p: updatePassword },
            success: lockGetReady, error: errorHandler
        });
    }
    function lockGetReady(callresult) {
        if (callresult.error != undefined)
            alert(callresult.error);
        else {
            $.ajax({
                url: ajaxHandlerScript, type: "POST", cache: false, dataType: "json",
                data: { f: 'UPDATE', n: stringName, v: JSON.stringify(self.storage), p: updatePassword },
                success: updateReady, error: errorHandler
            });
        }
    }
    function updateReady(callresult) {
        if (callresult.error != undefined) {
            alert(callresult.error);
        }
    }
    function errorHandler(jqXHR, statusStr, errorStr) {
        alert(statusStr + " " + errorStr);
    }
    self.addValue = function (key, value) {
        self.storage[key] = value;
        self.storeInfo()
    };
    self.getValue = function (key) {
        return (self.storage[key]);
    };
    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            self.storeInfo()
            return true;
        } else {
            return false;
        }
    };
    self.getKeys = function () {
        var claearArrayOfKeys = Object.keys(self.storage);
        return claearArrayOfKeys;
    };
    self.restoreInfo()
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
var gameStorage = new AJAXStorage("OSTANINA_DRINKS_AJAX_STORA");
//gameStorage.addInfo(self.storage)
// var alco;
// var recipe;
console.log(gameStorage)

// var IPage = document.getElementById("IPage")
// IPage.removeChild(startDiv);

drowMainMenu()
function drowMainMenu() {
    var containerMain = document.getElementById("containerMain")//нахожу контейнер главного меню
    var screenMain = document.getElementById("screenMain");// нахожу весь экран 
    console.log(screenMain)
    var widthscreenMain = window.getComputedStyle(screenMain).width;// определяю ширину игровой области
    console.log(widthscreenMain)
    widthscreenMain = parseFloat(widthscreenMain.replace(/[px]/g, ''));
    var btnRadius;
    var heightGameWindow = 0;
    var mobileScreenWidth = 0;
    var mobileScreenHeight = 0;
    var screenPosition;

    //startDiv


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Вы используете мобильное устройство (телефон или планшет).")
        mobileScreenHeight = window.screen.height//определяю высоту экрана устройства
        console.log("высота устройства " + mobileScreenHeight)
        mobileScreenWidth = window.screen.width//определяю ширину экрана устройства
        console.log("ширина устройства " + mobileScreenWidth)
        function sizeMobile() {
            screenMain.setAttribute("style", "width:" + mobileScreenWidth + "px")
            screenMain.setAttribute("style", "height:" + mobileScreenHeight + "px")
        }
        sizeMobile();
        function rotateMain() {
            if (mobileScreenHeight > mobileScreenWidth) {
                //alert("2- мобильное утр-во вертикально;")
                console.log("vert");
                screenPosition = 2;
                screenMain.setAttribute("style", "width:" + mobileScreenWidth + "px")
                screenMain.setAttribute("style", "height:" + mobileScreenHeight + "px")
                var rules = document.getElementById("rules")
                var startToPlayGame = document.getElementById("startToPlayGame")
                rules.setAttribute("style", "width:" + mobileScreenWidth * 0.8 + "px")

            } else {
                console.log("gorizont");
                // alert("1- мобильное утр-во горизонтально;")
                screenPosition = 1;
                screenMain.setAttribute("style", "width:" + mobileScreenWidth + "px")
                screenMain.setAttribute("style", "height:" + mobileScreenHeight + "px");
                //btnRadius = mobileScreenHeight * 0.05;//задаю радиус кнопки
                //var btnDistance = (mobileScreenWidth - btnRadius * 2 * 5) / 6; //расстояние между кнопками
                // console.log(mobileScreenWidth);
                //console.log(btnDistance);
            }
        }
        rotateMain()

    } else {
        screenPosition = 0;
        console.log("Вы используете ПК.")
        heightGameWindow = widthscreenMain * 0.66;
        screenMain.setAttribute("style", "height:" + heightGameWindow + "px");

        // btnRadius = heightGameWindow * 0.05;//задаю радиус кнопки
    }
}


window.addEventListener("resize", drowMainMenu, false);
window.addEventListener("load", drowMainMenu, false);
var nameOfGamer;
var count = 0
function addName() {
    nameOfGamer = document.getElementById("nameDiv").value
    console.log(nameOfGamer)
    // nameDrink = prompt("введите название напитка");
    // var a = null;
    // var c = null;
    // var b = null;
    // var hash = { nameOfGamer: c, count: b }
    // gameStorage.addValue(nameOfGamer, count);
    if (nameOfGamer === "") {
        alert("введите ваше имя!")
    } else {
        //gameStorage.addValue(nameOfGamer, count);
        game()
        setTimeout(function () {

            var IPage = document.getElementById("IPage")
            var container = document.getElementById("container")
            IPage.removeChild(container);
            alert("!!!")
            gameStorage.addValue(nameOfGamer, count);




        }, 6000)

    }


};
// function deleteName() {
//     var presenceInList = gameStorage.deleteValue((prompt("введите имя, которое хотите удалить")));
//     (presenceInList) ? alert("имя удалено") : alert("такого имени нет в перечне");
// }


function game() {// создаю фон для ирового поля
    var IPage = document.getElementById("IPage")
    IPage.removeChild(startDiv);
    var gameContainer = document.getElementById("container")//нахожу контейнер
    var gameScreen = document.getElementById("screen");// нахожу весь экран 
    var gameWindow = document.getElementById("gameWindow");//нахожу игровое пространство
    gameWindow.style.display = "flex"////////!!!!!!!!
    var infoHeight = document.getElementById("info");//нахожу область отображения счета
    var widthGameWindow = window.getComputedStyle(gameContainer).width;// определяю ширину игровой области
    widthGameWindow = parseFloat(widthGameWindow.replace(/[px]/g, ''));
    var btnRadius;
    var heightGameWindow = 0;
    var mobileScreenWidth = 0;
    var mobileScreenHeight = 0;
    var screenHeight = 0;
    var btnDistance = 0;
    var transform;
    //var count = 0;
    var fox = {
        posX: 0,
        //posY: 0,
        speedX: 0,
        animationName: "stopFox",
        animationDuration: "0.5s",
        transform: "scale(1.2)",
        vector: "r",
        update: function () {
            var foxElem = creature;
            // console.log(fox.posX)
            fox.posX += fox.speedX
            foxElem.style.transform = "translate(" + fox.posX + "px) translateZ(0)";// выношу в GPU-слой 
            //  console.log(fox.posX)
            creature.style.transform = fox.transform;
            //  console.log(transform)
        }
    }
    //////////////// ЭКРАН
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
                    //alert("2- мобильное утр-во вертикально;")
                    console.log("vert");
                    screenPosition = 2;
                    gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
                    gameWindow.setAttribute("style", "height:" + mobileScreenWidth * 0.66 + "px")
                    //btnRadius = mobileScreenWidth * 0.5;
                    btnRadius = mobileScreenWidth * 0.05;//задаю радиус кнопки
                    console.log(btnRadius);
                    //var btnDistance = (mobileScreenWidth - btnRadius * 2 * 5) / 6; //расстояние между кнопками
                    //console.log(mobileScreenWidth);
                    //console.log(btnDistance);

                } else {
                    console.log("gorizont");
                    // alert("1- мобильное утр-во горизонтально;")
                    screenPosition = 1;
                    gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
                    gameWindow.setAttribute("style", "height:" + mobileScreenHeight + "px");
                    btnRadius = mobileScreenHeight * 0.05;//задаю радиус кнопки
                    //var btnDistance = (mobileScreenWidth - btnRadius * 2 * 5) / 6; //расстояние между кнопками
                    // console.log(mobileScreenWidth);
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

    // кнопка движения влево
    var leftBtn = document.getElementById("left");
    var leftButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    leftButton.id = "leftButton"
    gameContainer.appendChild(leftButton);// прикрепляю кнопку к gameContainer
    // leftButton.style.position = "absolute";
    // function hhh() {
    //     if (screenPosition === 0) {
    //         leftButton.style.width = heightGameWindow * 0.1;
    //         leftButton.style.height = heightGameWindow * 0.1;
    //         console.log(widthGameWindow)
    //         var rr = (widthGameWindow - btnRadius * 2 * 5) / 6;//расстояние от левого края до кнопки
    //         btnDistance = Math.floor(rr) + "px";
    //         leftButton.style.left = btnDistance;
    //         leftButton.style.bottom = "5px";
    //     }
    //     if (screenPosition === 1) {
    //         //alert("1- мобильное утр-во горизонтально;")
    //         console.log("!!!")
    //         leftButton.style.width = mobileScreenWidth * 0.1;
    //         leftButton.style.height = mobileScreenWidth * 0.1;
    //         var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
    //         btnDistance = Math.floor(rr) + "px";
    //         // console.log(btnDistance)
    //         leftButton.style.left = btnDistance;
    //         leftButton.style.top = "50vh";
    //     }
    //     if (screenPosition === 2) {
    //         // alert("2- мобильное утр-во вертикально;")
    //         // console.log("jjjjj")
    //         leftButton.style.width = mobileScreenWidth * 0.1;
    //         leftButton.style.height = mobileScreenWidth * 0.1;
    //         var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
    //         btnDistance = Math.floor(rr) + "px";
    //         console.log(btnDistance)
    //         leftButton.style.left = btnDistance;
    //         leftButton.style.top = mobileScreenWidth * 0.66 + "px";
    //         console.log(mobileScreenHeight - mobileScreenWidth * 0.66)
    //     }
    // }
    // //hhh()
    // ////////////////////
    // function gggg() {
    //     widthGameWindow = window.getComputedStyle(gameContainer).width;
    //     widthGameWindow = parseFloat(widthGameWindow.replace(/[px]/g, ''))
    //     //console.log(widthGameWindow)
    // }
    // setInterval(gggg, 1000);
    // ////////////////////

    // window.addEventListener("resize", hhh, false);
    // window.addEventListener("load", loadTimer, false);

    // function loadTimer() {
    //     setTimeout(hhh, 1000);
    // }
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

    // кнопка движения вправо
    // function rightBtn() {//     ВПРАВО
    var rightBtn = document.getElementById("left");
    var rightButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(rightButton);// прикрепляю кнопку к gameContainer
    // rightButton.style.width = heightGameWindow * 0.1;
    // rightButton.style.height = heightGameWindow * 0.1;
    // rightButton.style.position = "absolute";
    // rightButton.style.right = "10px";
    // rightButton.style.bottom = "5px";
    //function mmm() { // позиционирование кнопки
    // if (screenPosition === 0) {
    //     rightButton.style.width = heightGameWindow * 0.1;
    //     rightButton.style.height = heightGameWindow * 0.1;
    //     console.log(widthGameWindow)
    //     var rr = (widthGameWindow - btnRadius * 2 * 5) / 6;//расстояние от левого края до кнопки
    //     btnDistance = Math.floor(rr) + "px";
    //     rightButton.style.right = btnDistance;
    //     rightButton.style.bottom = "5px";
    // }
    // if (screenPosition === 1) {
    //     //alert("1- мобильное утр-во горизонтально;")
    //     console.log("!!!")
    //     rightButton.style.width = mobileScreenWidth * 0.1;
    //     rightButton.style.height = mobileScreenWidth * 0.1;
    //     var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
    //     btnDistance = Math.floor(rr) + "px";
    //     // console.log(btnDistance)
    //     rightButton.style.right = btnDistance;
    //     rightButton.style.top = "50vh";
    // }
    //     if (screenPosition === 2) {
    //         // alert("2- мобильное утр-во вертикально;")
    //         // console.log("jjjjj")
    //         rightButton.style.width = mobileScreenWidth * 0.1;
    //         rightButton.style.height = mobileScreenWidth * 0.1;
    //         var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
    //         btnDistance = Math.floor(rr) + "px";
    //         console.log(btnDistance)
    //         rightButton.style.right = btnDistance;
    //         rightButton.style.top = mobileScreenWidth * 0.66 + "px";
    //         console.log(mobileScreenHeight - mobileScreenWidth * 0.66)
    //     }
    // }
    // window.addEventListener("resize", mmm, false);
    // window.addEventListener("load", mmm, false);
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
    // }
    //rightBtn()
    //          windowHeight

    // кнопка рекордов
    var recordsBtn = document.getElementById("left");
    var recordsButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(recordsButton);// прикрепляю кнопку к gameContainer
    recordsButton.style.zIndex = 10;
    var recordsCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    recordsCircle.setAttribute("fill", "sandybrown");
    var recordsCircleRdius = btnRadius
    recordsCircle.setAttribute("r", recordsCircleRdius);
    recordsCircle.setAttribute("cx", recordsCircleRdius);
    recordsCircle.setAttribute("cy", recordsCircleRdius);
    recordsButton.appendChild(recordsCircle);
    var recordsFirstLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    recordsButton.appendChild(recordsFirstLine);
    recordsFirstLine.setAttribute("stroke-width", 4);
    recordsFirstLine.setAttribute("stroke", "black");
    recordsFirstLine.setAttribute("x1", recordsCircleRdius * 0.5);
    recordsFirstLine.setAttribute("y1", recordsCircleRdius * 0.6);
    recordsFirstLine.setAttribute("x2", recordsCircleRdius * 1.5);
    recordsFirstLine.setAttribute("y2", recordsCircleRdius * 0.6);
    recordsFirstLine.setAttribute("stroke-linecap", "round");
    recordsFirstLine.setAttribute("transform-origin", recordsCircleRdius);
    var recordsSecondLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    recordsButton.appendChild(recordsSecondLine);
    recordsSecondLine.setAttribute("stroke-width", 4);
    recordsSecondLine.setAttribute("stroke", "black");
    recordsSecondLine.setAttribute("x1", recordsCircleRdius * 0.5);
    recordsSecondLine.setAttribute("y1", recordsCircleRdius * 1.4);
    recordsSecondLine.setAttribute("x2", recordsCircleRdius * 1.5);
    recordsSecondLine.setAttribute("y2", recordsCircleRdius * 1.4);
    recordsSecondLine.setAttribute("stroke-linecap", "round");
    recordsSecondLine.setAttribute("transform-origin", recordsCircleRdius);
    var recordsThirdLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    recordsButton.appendChild(recordsThirdLine);
    recordsThirdLine.setAttribute("stroke-width", 4);
    recordsThirdLine.setAttribute("stroke", "black");
    recordsThirdLine.setAttribute("x1", recordsCircleRdius * 0.5);
    recordsThirdLine.setAttribute("y1", recordsCircleRdius * 1);
    recordsThirdLine.setAttribute("x2", recordsCircleRdius * 1.5);
    recordsThirdLine.setAttribute("y2", recordsCircleRdius * 1);
    recordsThirdLine.setAttribute("stroke-linecap", "round");
    recordsThirdLine.setAttribute("transform-origin", recordsCircleRdius);
    //}
    //recordsBtn()
    // function pouseBtn() { //  ПАУЗА
    var pouseBtn = document.getElementById("left");
    var pouseButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(pouseButton);// прикрепляю кнопку к gameContainer
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
    // }
    //pouseBtn()
    // function playBtn() {//     ИГРАТЬ
    var playBtn = document.getElementById("left");
    var playButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gameContainer.appendChild(playButton);// прикрепляю кнопку к gameContainer

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
    /////////////////////////////////////////////// поле для времени
    var timeZone = document.createElement("div")
    //gameContainer.appendChild(timeZone);
    /////////////////////////////////////////////// поле для счёта
    var scoreZone = document.createElement("div")
    scoreZone.innerHTML = count
    //gameContainer.appendChild(scoreZone);
    // }
    //playBtn()
    function hhh() {
        if (screenPosition === 0) {
            var btnRadiusNoPx = Math.floor(btnRadius)
            //console.log(btnRadiusNoPx)
            gameContainer.appendChild(timeZone);
            gameContainer.appendChild(scoreZone);
            //поле для времени
            timeZone.style.position = "absolute";
            timeZone.style.top = "10px"
            timeZone.style.left = "10px"
            timeZone.style.width = widthGameWindow * 0.2 + "px"
            timeZone.style.height = heightGameWindow * 0.06 + "px"
            timeZone.style.backgroundColor = "white";
            timeZone.style.border = " black silid 1px 10%"
            timeZone.style.borderWidth = "1px"
            timeZone.style.borderColor = "black"
            timeZone.style.borderStyle = "solid"
            timeZone.style.borderRadius = "10%"
            // поле для счёта
            scoreZone.style.position = "absolute";
            scoreZone.style.top = "10px"
            scoreZone.style.right = "10px"
            scoreZone.style.width = widthGameWindow * 0.2 + "px"
            scoreZone.style.height = heightGameWindow * 0.06 + "px"
            scoreZone.style.backgroundColor = "white";
            scoreZone.style.border = " black silid 1px 10%"
            scoreZone.style.borderWidth = "1px"
            scoreZone.style.borderColor = "black"
            scoreZone.style.borderStyle = "solid"
            scoreZone.style.borderRadius = "10%"
            //left
            leftButton.style.position = "absolute"
            leftButton.style.width = heightGameWindow * 0.1;
            leftButton.style.height = heightGameWindow * 0.1;
            //console.log(widthGameWindow)
            var rr = (widthGameWindow - btnRadius * 2 * 5) / 6;
            btnDistance = Math.floor(rr);
            leftButton.style.left = btnDistance + "px";
            leftButton.style.bottom = "5px";
            //right
            rightButton.style.position = "absolute"
            rightButton.style.width = heightGameWindow * 0.1;
            rightButton.style.height = heightGameWindow * 0.1;
            rightButton.style.right = btnDistance + "px";
            rightButton.style.bottom = "5px";
            //records
            recordsButton.style.position = "absolute"
            recordsButton.style.width = heightGameWindow * 0.1;
            recordsButton.style.height = heightGameWindow * 0.1;
            recordsButton.style.left = btnDistance * 2 + btnRadiusNoPx * 2 + "px";
            recordsButton.style.bottom = "5px";
            //pouse
            pouseButton.style.position = "absolute"
            pouseButton.style.width = heightGameWindow * 0.1;
            pouseButton.style.height = heightGameWindow * 0.1;
            pouseButton.style.right = widthGameWindow / 2 - btnRadiusNoPx + "px";
            pouseButton.style.bottom = "5px";
            //play
            playButton.style.position = "absolute"
            playButton.style.width = heightGameWindow * 0.1;
            playButton.style.height = heightGameWindow * 0.1;
            playButton.style.right = btnDistance * 2 + btnRadiusNoPx * 2 + "px";
            playButton.style.bottom = "5px";

        }
        if (screenPosition === 1) {
            gameContainer.appendChild(timeZone);
            gameContainer.appendChild(scoreZone);
            mobileScreenWidth = window.screen.width;
            mobileScreenHeight = window.screen.height;
            screenHeight = window.getComputedStyle(gameWindow).height;
            screenHeight = parseFloat(screenHeight.replace(/[px]/g, ''))
            //alert("1- мобильное утр-во горизонтально;")
            var btnRadiusNoPx = Math.floor(btnRadius)
            //console.log(btnRadiusNoPx)
            //поле для времени
            timeZone.style.position = "absolute";
            timeZone.style.top = "10px"
            timeZone.style.left = "10px"
            timeZone.style.width = mobileScreenWidth * 0.2 + "px"
            timeZone.style.height = mobileScreenHeight * 0.06 + "px"
            timeZone.style.backgroundColor = "white";
            timeZone.style.border = " black silid 1px 10%"
            timeZone.style.borderWidth = "1px"
            timeZone.style.borderColor = "black"
            timeZone.style.borderStyle = "solid"
            timeZone.style.borderRadius = "10%"
            // поле для счёта
            scoreZone.style.position = "absolute";
            scoreZone.style.top = "10px"
            scoreZone.style.right = "10px"
            scoreZone.style.width = mobileScreenWidth * 0.2 + "px"
            scoreZone.style.height = mobileScreenHeight * 0.06 + "px"
            scoreZone.style.backgroundColor = "white";
            scoreZone.style.border = " black silid 1px 10%"
            scoreZone.style.borderWidth = "1px"
            scoreZone.style.borderColor = "black"
            scoreZone.style.borderStyle = "solid"
            scoreZone.style.borderRadius = "10%"
            //left
            leftButton.style.position = "absolute"
            leftButton.style.width = btnRadius * 2;
            leftButton.style.height = btnRadius * 2;
            var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
            btnDistance = Math.floor(rr);
            leftButton.style.left = btnDistance + "px";
            leftButton.style.top = mobileScreenHeight / 2 + "px";
            //right
            rightButton.style.position = "absolute";
            rightButton.style.width = btnRadius * 2;
            rightButton.style.height = btnRadius * 2;
            rightButton.style.right = btnDistance + "px";
            rightButton.style.top = mobileScreenHeight / 2 + "px";
            //records
            recordsButton.style.position = "absolute";
            recordsButton.style.width = btnRadius * 2;
            recordsButton.style.height = btnRadius * 2;
            recordsButton.style.left = mobileScreenWidth / 3 - btnRadius + "px";
            recordsButton.style.top = mobileScreenHeight - btnRadius * 2.5 + "px";
            //pouse
            pouseButton.style.position = "absolute";
            pouseButton.style.width = btnRadius * 2;
            pouseButton.style.height = btnRadius * 2;
            pouseButton.style.right = mobileScreenWidth / 2 - btnRadius + "px";
            pouseButton.style.top = mobileScreenHeight - btnRadius * 2.5 + "px";
            //play
            playButton.style.position = "absolute";
            playButton.style.width = btnRadius * 2;
            playButton.style.height = btnRadius * 2;
            playButton.style.right = mobileScreenWidth / 3 - btnRadius + "px";
            playButton.style.top = mobileScreenHeight - btnRadius * 2.5 + "px";
        }
        if (screenPosition === 2) {
            gameContainer.appendChild(timeZone);
            gameContainer.appendChild(scoreZone);
            // gameWindow.setAttribute("style", "width:" + mobileScreenWidth + "px")
            // gameWindow.setAttribute("style", "height:" + mobileScreenWidth * 0.66 + "px")
            // alert("2- мобильное утр-во вертикально;")
            mobileScreenWidth = window.screen.width;
            mobileScreenHeight = window.screen.height;
            screenHeight = window.getComputedStyle(gameWindow).height;
            screenHeight = parseFloat(screenHeight.replace(/[px]/g, ''))
            // console.log(screenHeight)
            //поле для времени
            timeZone.style.position = "absolute";
            timeZone.style.top = screenHeight * 1.5 + "px";
            timeZone.style.left = "10px"
            timeZone.style.width = mobileScreenWidth * 0.45 + "px"
            timeZone.style.height = mobileScreenHeight * 0.06 + "px"
            timeZone.style.display = "flex"

            timeZone.style.backgroundColor = "white";
            timeZone.style.border = " black silid 1px 10%"
            timeZone.style.borderWidth = "1px"
            timeZone.style.borderColor = "black"
            timeZone.style.borderStyle = "solid"
            timeZone.style.borderRadius = "10%"
            // поле для счёта
            scoreZone.style.position = "absolute";
            scoreZone.style.top = screenHeight * 1.5 + "px";
            scoreZone.style.right = "10px"
            scoreZone.style.width = mobileScreenWidth * 0.45 + "px"
            scoreZone.style.height = mobileScreenHeight * 0.06 + "px"
            timeZone.style.display = "flex"
            scoreZone.style.backgroundColor = "white";
            scoreZone.style.border = " black silid 1px 10%"
            scoreZone.style.borderWidth = "1px"
            scoreZone.style.borderColor = "black"
            scoreZone.style.borderStyle = "solid"
            scoreZone.style.borderRadius = "10%"

            //left
            leftButton.style.position = "absolute";
            leftButton.style.width = btnRadius * 2;
            leftButton.style.height = btnRadius * 2;
            var rr = (mobileScreenWidth * 0.03);//расстояние от левого края до кнопки
            btnDistance = Math.floor(rr);
            leftButton.style.left = mobileScreenWidth * 0.01 + "px";
            leftButton.style.top = screenHeight * 1.1 + "px";
            //right
            rightButton.style.position = "absolute";
            rightButton.style.width = btnRadius * 2;
            rightButton.style.height = btnRadius * 2;
            rightButton.style.right = mobileScreenWidth * 0.01 + "px"
            rightButton.style.top = screenHeight * 1.1 + "px";
            //records
            recordsButton.style.position = "absolute";
            recordsButton.style.width = btnRadius * 2;
            recordsButton.style.height = btnRadius * 2;
            recordsButton.style.left = mobileScreenWidth / 3 - btnRadius + "px";
            recordsButton.style.top = screenHeight * 1.1 + "px";
            //pouse
            pouseButton.style.position = "absolute";
            pouseButton.style.width = btnRadius * 2;
            pouseButton.style.height = btnRadius * 2;
            pouseButton.style.left = mobileScreenWidth / 2 - btnRadius + "px";
            pouseButton.style.top = screenHeight * 1.1 + "px";
            //play
            playButton.style.position = "absolute";
            playButton.style.width = btnRadius * 2;
            playButton.style.height = btnRadius * 2;
            playButton.style.right = mobileScreenWidth / 3 - btnRadius + "px";
            playButton.style.top = screenHeight * 1.1 + "px";
        }
    }

    // if (screenPosition === 0) {
    //     //  создаю canvas-анимацию для фона всего эерана в виде желтых кружочков, которые потом исчезают
    //     //  (это будет видно только на десктопе)
    //     function createCanvasFon() {
    //         var canvasDiv = document.getElementById("canvas");
    //         var canvas = document.createElement("canvas")
    //         var canvasContext = canvas.getContext("2d");
    //         canvasDiv.appendChild(canvas)
    //         canvasContext.width = canvasContext.offsetWidth;
    //         canvasContext.height = canvasContext.offsetHeight;
    //         canvas.style.position = "absolute"
    //         canvas.left = 0;
    //         canvas.top = 0;
    //         canvas.width = window.innerWidth;
    //         canvas.height = window.innerHeight;
    //         var height = window.getComputedStyle(canvas).height
    //         var width = window.getComputedStyle(canvas).width;
    //         height = parseFloat(height.replace(/[px]/g, ''));
    //         width = parseFloat(width.replace(/[px]/g, ''));
    //         var options = {
    //             color: "rgba(247, 247, 119, opas)",
    //             opas: 0.5,
    //             lifeTime: 0.1,
    //             size: 5,
    //             maxSize: 100
    //         }
    //         function step() {
    //             canvasContext.beginPath();
    //             var randomSircle = Math.random() * options.maxSize;
    //             var fillColor = "rgba(247, 247, 119," + options.opas + ")"
    //             canvasContext.fillStyle = fillColor;
    //             var x = Math.random() * width + 0.5;
    //             var y = Math.random() * height + 0.5;
    //             var radius = options.size + randomSircle
    //             canvasContext.arc(x, y, radius, 180, 0, Math.PI * 2, false);
    //             canvasContext.fill();
    //             canvasContext.fillStyle = "rgba(255,255,255," + options.lifeTime + ")";
    //             canvasContext.fillRect(0, 0, width, height);
    //         }
    //         setInterval(step, 700);
    //     }
    //     createCanvasFon()
    // }
    //hhh()
    ////////////////////
    function gggg() {
        gameContainer.removeChild(timeZone);
        gameContainer.removeChild(scoreZone);

        widthGameWindow = window.getComputedStyle(gameContainer).width;
        widthGameWindow = parseFloat(widthGameWindow.replace(/[px]/g, ''));

        gameContainer.appendChild(timeZone);
        gameContainer.appendChild(scoreZone);
    }
    //requestAnimationFrame(gggg)
    setInterval(gggg, 500);
    ////////////////////
    window.addEventListener("resize", hhh, false);
    window.addEventListener("load", hhh, false);
    // //window.addEventListener("load", loadTimer, false);
    // window.addEventListener("orientationchange", gggg, false);
    window.addEventListener("orientationchange", hhh, false);
    setTimeout(hhh, 40);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////// ПЕРСОНАЖ
    var widthCreature;
    var heightCreature;
    var creatureDiv = document.createElement("div");
    gameWindow.appendChild(creatureDiv);
    creatureDiv.setAttribute("id", "sprite-container")
    var creature = document.createElement("div");
    creatureDiv.appendChild(creature);
    creature.setAttribute("id", "sprite-img");
    function createFox() {
        creatureDiv.appendChild(creature);
        heightGameWindow = parseFloat(window.getComputedStyle(gameWindow).height.replace(/[px]/g, ''));//высота игровой области
        widthGameWindow = parseFloat(window.getComputedStyle(gameWindow).width.replace(/[px]/g, ''));//ширина игровой области
        //console.log(widthGameWindow)
        if (screenPosition === 0) {// 0- десктоп;
            ////// высота и ширина персонажа
            widthCreature = widthGameWindow * 0.08;
            heightCreature = heightGameWindow * 0.15;
            creature.style.borderColor = "black";
            creature.style.borderWidth = "1px"
            creature.style.borderStyle = "solid"
            creature.style.height = heightCreature + "px";
            creature.style.width = widthCreature + "px";
            creature.style.zIndex = 100;
            creature.style.position = "absolute"
            fox.posY = heightGameWindow - heightCreature - btnRadius * 3.5///////////////
            creature.style.top = fox.posY + "px"
            fox.posX = widthGameWindow / 2 - widthCreature / 2
            creature.style.left = fox.posX + "px"
            fox.transform = transform = "scale(1.2, 1.2)"
            creature.style.transform = transform
            creature.style.animationName = fox.animationName;
            //console.log(heightGameWindow)
            //console.log(btnRadius)
            //console.log(heightCreature)
        }
        if (screenPosition === 1) {// 1- мобильное утр-во горизонтально; 
            ////// высота и ширина персонажа
            creatureDiv.appendChild(creature);
            widthCreature = mobileScreenWidth * 0.09;
            heightCreature = mobileScreenHeight * 0.22;
            creature.style.borderColor = "black";
            creature.style.borderWidth = "1px"
            creature.style.borderStyle = "solid"
            creature.style.height = heightCreature + "px";
            creature.style.width = widthCreature + "px";
            creature.style.zIndex = 100;
            creature.style.position = "absolute"
            fox.posY = mobileScreenHeight - heightCreature - btnRadius * 2.8
            creature.style.top = fox.posY + "px"
            console.log(fox.posX)
            fox.posX = mobileScreenWidth / 2 - widthCreature / 2
            creature.style.left = fox.posX + "px"
            fox.transform = transform = "scale(0.9, 0.9)"
            creature.style.transform = transform
            creature.style.animationName = fox.animationName;
        }
        if (screenPosition === 2) {// 2- мобильное утр-во вертикально;
            creatureDiv.appendChild(creature);
            ////// высота и ширина персонажа
            widthCreature = mobileScreenWidth * 0.17;
            heightCreature = parseFloat(window.getComputedStyle(gameWindow).height.replace(/[px]/g, '')) * 0.33;
            creature.style.borderColor = "black";
            creature.style.borderWidth = "1px"
            creature.style.borderStyle = "solid"
            creature.style.height = heightCreature + "px";
            creature.style.width = widthCreature + "px";
            creature.style.zIndex = 100;
            creature.style.position = "absolute"
            fox.posY = parseFloat(window.getComputedStyle(gameWindow).height.replace(/[px]/g, '')) - heightCreature - btnRadius
            creature.style.top = fox.posY + "px"
            fox.posX = mobileScreenWidth / 2 - widthCreature / 2
            creature.style.left = fox.posX + "px"
            fox.transform = transform = "scale(0.6, 0.6)"
            creature.style.transform = transform
            var r = parseFloat(window.getComputedStyle(gameWindow).height.replace(/[px]/g, ''));
            creature.style.animationName = fox.animationName;
            // console.log(r)
            // console.log(btnRadius)
            // console.log(heightCreature)
        }
    }
    function creatureFoxApdate() {
        creatureDiv.removeChild(creature);
        heightGameWindow = parseFloat(window.getComputedStyle(gameWindow).height.replace(/[px]/g, ''));//высота игровой области
        widthGameWindow = parseFloat(window.getComputedStyle(gameWindow).width.replace(/[px]/g, ''));//ширина игровой области

        createFox()
    }
    createFox()
    window.addEventListener("resize", creatureFoxApdate, false);
    window.addEventListener("load", creatureFoxApdate, false);
    window.addEventListener("orientationchange", creatureFoxApdate, false);
    //события клавиатуры
    document.addEventListener("keydown", foxMove, false);
    document.addEventListener("keyup", foxStop, false);
    // //события мыши
    rightButton.addEventListener("mousedown", keyMoveRight, false);
    rightButton.addEventListener("mouseup", foxStop, false);
    leftButton.addEventListener("mousedown", keyMoveLeft, false);
    leftButton.addEventListener("mouseup", foxStop, false);
    // function moveRight() {
    //     creature.style.animationDuration = fox.animationDuration = "0.5s";
    //     creature.style.animationName = fox.animationName = "walkToRight";
    //     //requestAnimationFrame(moveRightT);
    // }
    // function moveRightT() {
    //    // fox.speedX += fox.accelX;
    //     fox.posX += fox.speedX;
    //     if (parseFloat(fox.posX.replace(/[px]/g, '')) + widthCreature >= widthGameWindow) {
    //         fox.speedY = 0;
    //     }
    //     creatureDiv.style.transform = "translateX(" + fox.posX + 10 + "px)";
    //     fox.update();
    //     requestAnimationFrame(moveRightT);
    //      console.log(fox.posX)
    // }
    // function moveLeft() {
    //     creature.style.animationName = fox.animationName = "walkToRight"
    //     creature.style.animationDuration = fox.animationDuration = "0.5s";
    //     requestAnimationFrame(moveLeftT);
    // }
    // function moveLeftT() {
    //     fox.posX += fox.speedX;
    //     if (parseFloat(fox.posX.replace(/[px]/g, '')) <= 0) {
    //         fox.speedX = 0;
    //     }
    //     fox.update();
    //     requestAnimationFrame(moveRightT);
    // }
    // document.addEventListener("mousemove", mouseMoveHandler, false)
    // function mouseMoveHandler(e) {
    //     var relativeX = e.clientX - gameContainer.offsetLeft;
    //     if (relativeX > 0 && relativeX < widthGameWindow) {
    //         creature.style.left = fox.posX = relativeX - widthCreature + "px";
    //         console.log(relativeX)
    //     }
    //     if (relativeX <= 0) {
    //         creature.style.left = fox.posX = "0px";
    //         console.log(relativeX)
    //     }
    // }
    // document.addEventListener("mousemove", mouseVector, false)
    // var lastPoint = { x: 0, }
    // function mouseVector(event) {
    //     if (event.clientX > lastPoint.x && widthGameWindow + widthCreature) {
    //         //console.log("right")
    //         moveRight()
    //     } else if (event.clientX < lastPoint.x) {
    //         //console.log("left")
    //         moveLeft()
    //     } else {
    //         foxStop()
    //     }
    //     lastPoint.x = event.clientX
    // }
    ///////////////
    console.log(fox.posX)
    function keyMoveRight() {
        creature.style.animationDuration = fox.animationDuration = "0.3s";
        creature.style.animationName = fox.animationName = "walkToRight";
        //requestAnimationFrame(moveRightT);
        keyMoveRightT()
    }
    function keyMoveRightT() {
        fox.vector = "r";
        if (fox.posX + widthCreature >= widthGameWindow) {
            fox.speedX = 0
        } else {
            fox.posX = fox.posX + 10;
            creature.style.transitionDuration = '0.8s';
            creature.style.left = fox.posX + "px"
        }
        fox.update();
        fox.speedX = 0
    }
    function keyMoveLeft() {
        creature.style.animationDuration = fox.animationDuration = "0.3s";
        creature.style.animationName = fox.animationName = "walkToLeft";
        keyMoveLeftT()
    }
    function keyMoveLeftT() {
        fox.vector = "l";
        // console.log(fox.posX)
        if (fox.posX < 0) {
            fox.speedX = 0
        } else {
            fox.posX = fox.posX - 10;
            creature.style.transitionDuration = '0.8s';
            creature.style.left = fox.posX + "px"
        }
        // console.log(fox.speedX)
        fox.update();
        fox.speedX = 0
    }
    function foxMove(event) {
        var keycode = event.keyCode;
        //console.log(keycode)
        if (keycode === 39) {
            fox.speedX = 10
            keyMoveRight()
        }
        if (keycode === 37) {
            fox.speedX = -10
            keyMoveLeft()
        }
        // console.log(fox.posX)
    }
    function foxStop(event) {
        creature.style.animationDuration = fox.animationDuration = "0.8s";
        if (fox.vector === "l") {
            creature.style.animationName = fox.animationName = "stopFoxLeft";
        }
        else {
            creature.style.animationName = fox.animationName = "stopFox";
        }
        fox.speedX = 0
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////// ЖЕЛУДИ
    var scorearr = []
    var acc = [];
    function Acorn(posX) {
        var self = this;
        if (screenPosition === 0) {
            self.height = widthGameWindow * 0.06;
            self.width = widthGameWindow * 0.06;
            //self.posX = Math.floor(Math.random() * (Math.floor(widthGameWindow - widthGameWindow * 0.06) - Math.ceil(widthGameWindow * 0.06))) + Math.ceil(widthGameWindow * 0.06)
            // self.posX = Math.floor(Math.random() * widthGameWindow);
        }
        if (screenPosition === 1) {// 1- мобильное утр-во горизонтально
            //var heightCreature = mobileScreenHeight * 0.22;
            self.height = mobileScreenWidth * 0.06;
            self.width = mobileScreenWidth * 0.06;
            //   self.posX = Math.floor(Math.random() * (Math.floor(mobileScreenWidth - mobileScreenWidth * 0.06) - Math.ceil(mobileScreenWidth * 0.06))) + Math.ceil(mobileScreenWidth * 0.06)
        }
        if (screenPosition === 2) {// 2- мобильное утр-во вертикально;
            self.height = mobileScreenWidth * 0.06;
            self.width = mobileScreenWidth * 0.06;
            //  self.posX = Math.floor(Math.random() * (Math.floor(mobileScreenWidth - mobileScreenWidth * 0.06) - Math.ceil(mobileScreenWidth * 0.06))) + Math.ceil(mobileScreenWidth * 0.06)
        }
        self.id = acc.length;
        self.rotate = 0;
        self.posX = posX;
        self.posY = 0;
        self.speedY = 0.9;
        self.createSt = function () {
            var acorn = document.createElement("div");
            // acorn.setAttribute("class", "acorn")
            gameWindow.appendChild(acorn);
            acorn.setAttribute("id", `${self.id}`)
            acorn.setAttribute("class", "star")//////////
            acorn.style.position = "absolute";
            acorn.style.height = self.height + "px";
            acorn.style.width = self.width + "px";
            acorn.style.top = self.posY + "px";
            acorn.style.left = posX + "px";
            acorn.style.zIndex = 200;
            // var acornDiv = document.createElement("div");//////////
            // acornDiv.setAttribute("class", "star")//////////
            // acorn.appendChild(acornDiv);//////////
            // // acornDiv.style.position = "relative";//////////
            // acornDiv.style.height = self.height + "px";//////////
            // acornDiv.style.width = self.width + "px";//////////
            var nut = {
                update: function () {
                    mobileScreenWidth = window.screen.width;
                    mobileScreenHeight = window.screen.height
                    acorn.style.transform = "translateY(" + self.posY + "px) translateZ(0)";
                },
                deleteAcorn: function () {
                    mobileScreenHeight = window.screen.height
                    //удаляет DOM-элемент при падении на пол
                    if (Math.floor(self.posY) === Math.floor(heightGameWindow * 0.8) || Math.floor(self.posY) === Math.floor(mobileScreenHeight * 0.9)) {
                        // console.log("!")
                        gameWindow.removeChild(acorn)
                    }
                    //ЖДУ ЧТОБЫ ОДНА ИЗ КРАЙНИХ ТОЧЕК ПОПАЛА В ПЕРСОНАЖ
                    if (Math.floor(self.posX) <= Math.floor(fox.posX + widthCreature) && Math.floor(self.posX + self.width) >= Math.floor(fox.posX) && Math.floor(self.posY) <= Math.floor((fox.posY + heightCreature)) && Math.floor(self.posY + self.height) >= Math.floor(fox.posY)) {
                        //if ( ax1<=bx2 && ax2>=bx1 && ay1<=by2 && ay2>=by1 ) 
                        // console.log(gameWindow)
                        //  console.log(self.id)
                        // // acornDiv.removeChild(acorn)
                        // // gameWindow.removeChild(acornDiv)
                        //console.log(acorn)
                        //gameWindow.removeChild(acorn)
                        acorn.setAttribute("class", "invisible")
                        var acornId = self.id
                        if (scorearr.indexOf(acornId) === (-1)) {
                            scorearr.push(acornId)
                            clickSound();
                            vibro(true);
                        }
                        // console.log(acornId)
                        // console.log(scorearr[acornId])
                        count = scorearr.length
                        scoreZone.innerHTML = count
                    }
                    //.invisible
                },
            }
            function rotateNut() {
                acorn.style.transformOrigin = "rotate(1deg);"
            }
            requestAnimationFrame(rotateNut);
            function start() {
                requestAnimationFrame(tick);
            }
            function tick() {
                self.rotate += self.speedY
                self.posY += self.speedY;
                // вылетел ли желудь ниже пола?
                if (self.posY + self.height > heightGameWindow) {
                    self.posY = heightGameWindow - nut.height;
                }
                nut.update();
                nut.deleteAcorn();
                requestAnimationFrame(tick);
            }

            nut.update();
            start()
        }
    }
    //var acorn1 = new Acorn(widthGameWindow/2);
    ///////////////////////star1.createSt();
    var iter = 0
    function createVar() {
        var posX = Math.floor(Math.random() * widthGameWindow * 0.9);
        //var posX = Math.floor(Math.random() * (Math.floor(widthGameWindow - widthGameWindow * 0.06) - Math.ceil(widthGameWindow * 0.06))) + Math.ceil(widthGameWindow * 0.06)
        var m = new Acorn(posX)
        acc.push(m)
        // console.log(acc[iter])
        acc[iter].createSt()
        // console.log((acc[iter]).posY)
        var id = acc.length - 1
        acc[iter].id = id
        //console.log(posX)
        iter += 1
    }
    createVar()
    function coordinatsOfAcorn() {
        var el = document.getElementById(`${acc.length - 1}`)
        var ee = el.getBoundingClientRect().top;
        if (Math.floor(ee) === Math.floor(heightGameWindow / 2)) {
            createVar()
        }
        var eeLeft = el.getBoundingClientRect().left;
        requestAnimationFrame(coordinatsOfAcorn)
    }
    coordinatsOfAcorn()
    //  ФОНОВЫЙ ЗВУК
    var fonAudio = new Audio("forest.mp3");
    var RAFf = window.requestAnimationFrame;

    function clickSoundf() {
        fonAudio.currentTime = 0; // в секундах
        fonAudio.play();
    }
    function startTf() {
        clickSoundf()
        RAFf(tickKf);
    }
    function tickKf() {
        requestAnimationFrame(tickKf);
    }
    playButton.addEventListener("mousedown", startTf, false);

    // ЗВУК СТОЛКНОВЕНИЯ
    var clickAudio = new Audio;
    // результат canPlayType: "probably" - скорее всего, "maybe" - неизвестно, "" - нет
    // console.log(clickAudio.canPlayType("audio/ogg; codecs=vorbis"));
    // console.log(clickAudio.canPlayType("audio/mpeg"));
    if (clickAudio.canPlayType("audio/mpeg") == "probably")
        clickAudio.src = "http://fe.it-academy.by/Examples/Sounds/button-16.mp3";
    else
        clickAudio.src = "http://fe.it-academy.by/Examples/Sounds/button-16.ogg";
    // если поддержка формата точно известна, можно сразу так:
    //var clickAudio=new Audio("http://fe.it-academy.by/Examples/Sounds/button-16.mp3");
    var RAF = window.requestAnimationFrame;

    function clickSoundInit() {
        clickAudio.play(); // запускаем звук
        clickAudio.pause(); // и сразу останавливаем
    }

    function clickSound() {
        clickAudio.currentTime = 0; // в секундах
        clickAudio.play();
    }

    function startT() {
        clickSound()
        RAF(tickK);
    }
    function tickK() {
        requestAnimationFrame(tickK);
    }


    playButton.addEventListener("mousedown", startT, false);
    //BИБРАЦИЯ
    function vibro(longFlag) {
        if (navigator.vibrate) { // есть поддержка Vibration API?
            if (!longFlag)
                window.navigator.vibrate(100); // вибрация 100мс
            else
                window.navigator.vibrate([100, 50, 100, 50, 100]); // вибрация 3 раза по 100мс с паузами 50мс
        }
    }
}

//game()