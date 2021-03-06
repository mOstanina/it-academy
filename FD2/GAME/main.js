// создаю фон для ирового поля
//window.onload = step
var gameWindow = document.getElementById("gameWindow");
var infoHeight = document.getElementById("info");
// var canvas = document.getElementById("canvas");
// var canvasContext = canvas.getContext("2d");
// canvasContext.width = canvasContext.offsetWidth;
// canvasContext.height = canvasContext.offsetHeight;
// var w = canvas.width = window.innerWidth;
// var h = canvas.height = window.innerHeight;
// var height = window.getComputedStyle(canvas).height
// var width = window.getComputedStyle(canvas).width;
// height = parseFloat(height.replace(/[px]/g, ''));
// width = parseFloat(width.replace(/[px]/g, ''));
// var options = {
//     color: "rgba(247, 247, 119, opas)",
//     opas: 0.5,
//     lifeTime: 0.1,
//     size: 5,
//     maxSize: 100
// }
// function step() {
//     canvasContext.beginPath();
//     var randomSircle = Math.random() * options.maxSize;
//     var fillColor = "rgba(247, 247, 119," + options.opas + ")"
//     canvasContext.fillStyle = fillColor;
//     var x = Math.random() * width + 0.5;
//     var y = Math.random() * height + 0.5;
//     var radius = options.size + randomSircle
//     canvasContext.arc(x, y, radius, 180, 0, Math.PI * 2, false);
//     canvasContext.fill();
//     canvasContext.fillStyle = "rgba(255,255,255," + options.lifeTime + ")";
//     canvasContext.fillRect(0, 0, width, height);
// }
// setInterval(step, 700);
/////////////////////////////////////////////////////////////////
//персонаж
var creatureDiv = document.createElement("div");
gameWindow.appendChild(creatureDiv);
creatureDiv.setAttribute("id", "sprite-container")
var creature = document.createElement("div");
creatureDiv.appendChild(creature);
creature.setAttribute("id", "sprite-img");
var heightGameWindow = parseFloat(window.getComputedStyle(gameWindow).height.replace(/[px]/g, ''));//высота игровой области
var widthGameWindow = parseFloat(window.getComputedStyle(gameWindow).width.replace(/[px]/g, ''));//ширина игровой области
console.log(widthGameWindow)
//высота и ширина персонажа
var widthCreature = parseFloat(window.getComputedStyle(creature).width.replace(/[px]/g, ''));
var heightCreature = parseFloat(window.getComputedStyle(creature).height.replace(/[px]/g, ''));
//вертикальная коррдината персонажа
var creatureTopPosition = parseFloat(window.getComputedStyle(infoHeight).height.replace(/[px]/g, '')) + (heightGameWindow * 0.95)
var tOffset = creatureTopPosition - heightCreature;
var lOffset = widthGameWindow / 2 - widthCreature;
creatureDiv.style = "position: absolute; left:" + lOffset + "px; top:" + tOffset + "px;";// позиционирование персонажа



function resizeGame() {
    var screen = document.getElementById('screen');
    var widthToHeight = 4 / 3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        screen.style.height = newHeight + 'px';
        screen.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        screen.style.width = newWidth + 'px';
        screen.style.height = newHeight + 'px';
    }

    screen.style.marginTop = (-newHeight / 2) + 'px';
    screen.style.marginLeft = (-newWidth / 2) + 'px';

    gameWindow.width = newWidth;
    gameWindow.height = newHeight;
}
window.addEventListener('resize', resizeGame, false);
window.addEventListener('orientationchange', resizeGame, false);