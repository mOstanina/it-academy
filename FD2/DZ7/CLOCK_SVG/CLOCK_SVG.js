"use strict";
window.onload = interval;
// //создаю желтый круг

var clock = document.getElementById("SS");
var svgRect = document.getElementById("SSS");
var heightDiv = window.getComputedStyle(svgRect).height;
heightDiv = parseFloat(heightDiv.replace(/[px]/g, ''));
console.log(heightDiv)
svgRect.setAttribute("style", `width=${heightDiv} height=${heightDiv} viewBox='0 0 ${heightDiv} ${heightDiv}'`);
var yellowCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
yellowCircle.setAttribute("fill", "sandybrown");
var radiusYellowCircle = heightDiv / 2
yellowCircle.setAttribute("r", radiusYellowCircle);
yellowCircle.setAttribute("cx", radiusYellowCircle);
yellowCircle.setAttribute("cy", radiusYellowCircle);
svgRect.appendChild(yellowCircle);

// // создаю и позиционирую зеленые круги

for (var i = 1; i <= 12; i++) {
    var greenCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svgRect.appendChild(greenCircle);
    greenCircle.setAttribute("fill", "green");
    var radiusGreenCircle = heightDiv / 20;
    var yellowCenterX = radiusYellowCircle;
    var yellowCenterY = radiusYellowCircle;
    greenCircle.setAttribute("r", radiusGreenCircle);
    var angle = ((360 / 12) * i) / 180 * Math.PI;
    var greenCenterX = yellowCenterX + radiusYellowCircle * 0.8 * Math.sin(angle);
    var greenCenterY = yellowCenterY - radiusYellowCircle * 0.8 * Math.cos(angle);
    greenCircle.setAttribute("cx", greenCenterX);
    greenCircle.setAttribute("cy", greenCenterY);

    // добавляю цифры в кружочки 

    var txt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    svgRect.appendChild(txt);
    txt.style.fill = "black";
    var fontSize = 20
    txt.style.fontSize = fontSize
    txt.textContent = `${i}`;
    if (i < 10) {
        txt.setAttribute("x", greenCenterX - fontSize / 3.5);
        txt.setAttribute("y", greenCenterY + fontSize / 3);
    } else {
        txt.setAttribute("x", greenCenterX - fontSize / 2);
        txt.setAttribute("y", greenCenterY + fontSize / 3);
    }
}
// //создаю секудную стрелку
var handSecond = document.createElementNS("http://www.w3.org/2000/svg", "line");
svgRect.appendChild(handSecond);
handSecond.setAttribute("stroke-width", 3);
handSecond.setAttribute("stroke", "black");
handSecond.setAttribute("x1", radiusYellowCircle);
handSecond.setAttribute("y1", radiusYellowCircle * 0.3);
handSecond.setAttribute("x2", radiusYellowCircle);
handSecond.setAttribute("y2", radiusYellowCircle * 1.05);
handSecond.setAttribute("stroke-linecap", "round");
handSecond.setAttribute("transform-origin", radiusYellowCircle);
// //создаю минутную стрелку
var handMinute = document.createElementNS("http://www.w3.org/2000/svg", "line");
svgRect.appendChild(handMinute);
handMinute.setAttribute("stroke-width", 7);
handMinute.setAttribute("stroke", "black");
handMinute.setAttribute("x1", radiusYellowCircle);
handMinute.setAttribute("y1", radiusYellowCircle * 0.4);
handMinute.setAttribute("x2", radiusYellowCircle);
handMinute.setAttribute("y2", radiusYellowCircle * 1.05);
handMinute.setAttribute("stroke-linecap", "round");
handMinute.setAttribute("transform-origin", radiusYellowCircle);
// //создаю часовую стрелку
var handHour = document.createElementNS("http://www.w3.org/2000/svg", "line");
svgRect.appendChild(handHour);
handHour.setAttribute("stroke-width", 12);
handHour.setAttribute("stroke", "black");
handHour.setAttribute("x1", radiusYellowCircle);
handHour.setAttribute("y1", radiusYellowCircle * 0.6);
handHour.setAttribute("x2", radiusYellowCircle);
handHour.setAttribute("y2", radiusYellowCircle * 1.05);
handHour.setAttribute("stroke-linecap", "round");
handHour.setAttribute("transform-origin", radiusYellowCircle);
// //электронные часы
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
electronicClock.style.zIndex = 99999;
function interval() {
    var time = new Date();
    var seconds = time.getSeconds();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    
    var hoursPosition = hours * (360 / 12);
    var minutesPosition = minutes * (360 / 60);
    var secondsPosition = seconds * (360 / 60);
    handHour.style.transform = `rotate(${(hoursPosition) + (minutesPosition / 12)}deg)`;
    handMinute.style.transform = `rotate(${minutesPosition}deg)`;
    handSecond.style.transform = `rotate(${secondsPosition}deg)`;
    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }
    electronicClock.innerHTML = `${hours}:${minutes}:${seconds}`;
    electronicClock.style.zIndex = 9999;
    console.log(`${hours}:${minutes}:${seconds}`)
}
setInterval(interval, 1000)