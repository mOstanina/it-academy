"use strict";
//создаю желтый круг
var clock = document.getElementById("clock");
var yellow = document.createElement("div");
var heightDiv = window.getComputedStyle(clock).height;
heightDiv = parseFloat(heightDiv.replace(/[px]/g, ''));
clock.appendChild(yellow);
//позиционирую желтый круг
yellow.setAttribute("style", "background: sandybrown;  border-radius: 50%");
//диаметр желтого круга
var diam = heightDiv * 0.9
yellow.style.height = diam + "px";
yellow.style.width = diam + "px";
var clockPosition = window.getComputedStyle(yellow).height;
yellow.style.position = "absolute";
clockPosition = parseFloat(clockPosition.replace(/[px]/g, ''));
var distance = (heightDiv / 2 - clockPosition / 2)   //отступы от края контейнера до желтого круга
yellow.style.left = distance + "px";
yellow.style.top = distance + "px";
//нахожу центр желтого круга
var yellowCenterX = yellow.offsetLeft - distance + yellow.offsetWidth / 2;
var yellowCenterY = yellow.offsetTop - distance + yellow.offsetHeight / 2;
var yellowRadius = diam / 2;
// создаю и позиционирую зеленые круги
for (var i = 1; i <= 12; i++) {
    var green = document.createElement("div");
    yellow.appendChild(green);
    green.setAttribute("style", "background: lightgreen; border-radius: 50%;  text-align: center;");
    var greenHeight = heightDiv * 0.09;
    green.style.height = greenHeight + "px";
    green.style.width = greenHeight + "px";
    green.style.position = "absolute";
    var angle = ((360 / 12) * i) / 180 * Math.PI;
    var greenCenterX = yellowCenterX + yellowRadius * 0.8 * Math.sin(angle);
    var greenCenterY = yellowCenterY - yellowRadius * 0.8 * Math.cos(angle);
    green.style.left = Math.round(greenCenterX - green.offsetWidth / 2) + "px";
    green.style.top = Math.round(greenCenterY - green.offsetHeight / 2) + "px";
    // добавляю цифры в кружочки 
    var numberTime = document.createElement("div");
    green.appendChild(numberTime);
    numberTime.innerHTML = i;
    numberTime.setAttribute("style", "color: black;");
    var fontSize = heightDiv * 0.04;
    numberTime.style.fontSize = fontSize + "px";
    numberTime.style.marginTop = (greenHeight - fontSize) / 2 + "px";
}
//создаю секудную стрелку
var handSecondDiv = document.createElement("div");
clock.appendChild(handSecondDiv);
handSecondDiv.style.position = "absolute";
var handSecond = document.createElement("div");
handSecondDiv.appendChild(handSecond);
handSecondDiv.style.height = heightDiv + "px";
handSecondDiv.style.width = heightDiv + "px";
handSecond.setAttribute("style", "background: black;  border-radius: 30%");
var heightHandSecond = yellowRadius * 0.8;
handSecond.style.height = heightHandSecond + "px";
var widthtHandSecond = yellowRadius * 0.02;
handSecond.style.width = widthtHandSecond + "px";
handSecondDiv.style.zIndex = 11;
handSecond.style.position = "absolute";//позиционирую стрелку
handSecond.style.left = (heightDiv - widthtHandSecond) / 2 + "px";
handSecond.style.top = (yellowRadius - heightHandSecond) + yellowRadius * 0.2 + "px";
//
var timeAnalog = new Date();
//
var secondsScore = timeAnalog.getSeconds();
var seconds = secondsScore * (360 / 60);
handSecondDiv.style.transform = `rotateZ(${seconds}deg)`;
//
//создаю минутную стрелку
var handMinuteDiv = document.createElement("div");
clock.appendChild(handMinuteDiv);
handMinuteDiv.style.position = "absolute";
var handMinute = document.createElement("div");
handMinuteDiv.appendChild(handMinute);
handMinuteDiv.style.height = heightDiv + "px";
handMinuteDiv.style.width = heightDiv + "px";
handMinute.setAttribute("style", "background: black; border-radius: 30%");
var heightHandMinute = yellowRadius * 0.7;
handMinute.style.height = heightHandMinute + "px";
var widthtHandMinute = yellowRadius * 0.03;
handMinute.style.width = widthtHandMinute + "px";
handMinuteDiv.style.zIndex = 10;
handMinute.style.position = "absolute";//позиционирую стрелку
handMinute.style.left = (heightDiv - widthtHandMinute) / 2 + "px";
handMinute.style.top = (yellowRadius - heightHandMinute) + yellowRadius * 0.2 + "px";
//
var minutesScore = timeAnalog.getMinutes();
var minutes = minutesScore * (360 / 60);
handMinuteDiv.style.transform = `rotateZ(${minutes}deg)`;
//
//создаю часовую стрелку
var handHourDiv = document.createElement("div");
clock.appendChild(handHourDiv);
handHourDiv.style.position = "absolute";
var handHour = document.createElement("div");
handHourDiv.appendChild(handHour);
handHourDiv.style.height = heightDiv + "px";
handHourDiv.style.width = heightDiv + "px";
handHour.setAttribute("style", "background: black; border-radius: 30%");
var heightHandHour = yellowRadius * 0.5;
handHour.style.height = heightHandHour + "px";
var widthtHandHour = yellowRadius * 0.06;
handHour.style.width = widthtHandHour + "px";
handHour.style.position = "absolute";//позиционирую стрелку
handHour.style.left = (heightDiv - widthtHandHour) / 2 + "px";
handHour.style.top = (yellowRadius - heightHandHour) + yellowRadius * 0.2 + "px";
//
var hoursScore = timeAnalog.getHours();
var hours = hoursScore * (360 / 12);
handHourDiv.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`;
//
//электронные часы
var electronicClock = document.createElement("div");
clock.appendChild(electronicClock);
var electronicClockHeight = heightDiv * 0.1;
var electronicClockWidth = heightDiv * 0.3;
electronicClock.setAttribute("style", `text-align: center; font-size: ${heightDiv * 0.1}px`);
electronicClock.style.position = "absolute";
//electronicClock.setAttribute("style", "text-align: center;");
electronicClock.style.height = electronicClockHeight + "px";
electronicClock.style.width = electronicClockWidth + "px";
electronicClock.style.top = (heightDiv - electronicClockHeight) / 3 + "px";
electronicClock.style.left = (heightDiv / 2 - electronicClockWidth / 2) + "px";
//
electronicClock.innerHTML = `${hoursScore}:${minutesScore}:${secondsScore}`;
if (hoursScore < 10) { hoursScore = "0" + hoursScore }
if (minutesScore < 10) { minutesScore = "0" + minutesScore }
if (secondsScore < 10) { secondsScore = "0" + secondsScore }
//
setInterval(() => {
    var time = new Date();
    var hoursScore = time.getHours();
    var minutesScore = time.getMinutes();
    var secondsScore = time.getSeconds();
    var hours = hoursScore * (360 / 12);
    var minutes = minutesScore * (360 / 60);
    var seconds = secondsScore * (360 / 60);
    handHourDiv.style.transform = `rotateZ(${(hours) + (minutes / 12)}deg)`;
    handMinuteDiv.style.transform = `rotateZ(${minutes}deg)`;
    handSecondDiv.style.transform = `rotateZ(${seconds}deg)`;
    if (hoursScore < 10) { hoursScore = "0" + hoursScore }
    if (minutesScore < 10) { minutesScore = "0" + minutesScore }
    if (secondsScore < 10) { secondsScore = "0" + secondsScore }
    electronicClock.innerHTML = `${hoursScore}:${minutesScore}:${secondsScore}`;
    console.log(electronicClock.innerHTML)
    electronicClock.style.zIndex = 10;
}, 1000)