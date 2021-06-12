"use strict";
function interval() {
    var time = new Date();
    var seconds = time.getSeconds();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var hoursPosition = hours * (360 / 12);
    var minutesPosition = minutes * (360 / 60);
    var secondsPosition = seconds * (360 / 60);

    // handHourAngle = `rotate(${(hoursPosition) + (minutesPosition / 12)}deg)`;
    // handMinuteAngle = `rotate(${minutesPosition}deg)`;

    // // создаю желтый круг

    var clock = document.getElementById("SS");
    var canvasRect = document.getElementById("SSS");
    var heightDiv = window.getComputedStyle(canvasRect).height;
    heightDiv = parseFloat(heightDiv.replace(/[px]/g, ''));
    var context = canvasRect.getContext("2d");
    context.fillStyle = "sandybrown";
    context.beginPath();
    var radiusYellowCircle = heightDiv / 2
    context.arc(radiusYellowCircle, radiusYellowCircle, heightDiv / 2, 0, Math.PI * 2, false);
    context.fill();

    // // создаю и позиционирую зеленые круги

    for (var i = 1; i <= 12; i++) {
        var greenCircleContext = canvasRect.getContext("2d");
        greenCircleContext.fillStyle = "green";
        greenCircleContext.beginPath();
        var radiusGreenCircle = heightDiv / 20;
        var yellowCenterX = radiusYellowCircle;
        var yellowCenterY = radiusYellowCircle;
        var angle = ((360 / 12) * i) / 180 * Math.PI;
        var greenCenterX = yellowCenterX + radiusYellowCircle * 0.8 * Math.sin(angle);
        var greenCenterY = yellowCenterY - radiusYellowCircle * 0.8 * Math.cos(angle);
        greenCircleContext.arc(greenCenterX, greenCenterY, radiusGreenCircle, 0, Math.PI * 2, false);
        greenCircleContext.fill();
        // // добавляю цифры в кружочки 
        var contextTxt = canvasRect.getContext('2d');
        context.fillStyle = 'black';
        context.font = 'bold 20px Arial';
        if (i < 10) {
            context.fillText(i, greenCenterX - 6, greenCenterY + 6);
        } else {
            context.fillText(i, greenCenterX - 12, greenCenterY + 7);
        }
    }

    // //создаю секудную стрелку
    var handSecond = canvasRect.getContext("2d");
    handSecond.strokeStyle = "red";
    handSecond.fillStyle = "red";
    handSecond.lineCap = "round";
    handSecond.beginPath();

    // x = x0 + r * cos(a)
    // y = y0 + r * sin(a)
    // x0, y0 - центр, a - угол, r - радиус.

    handSecond.moveTo(radiusYellowCircle, radiusYellowCircle);
    handSecond.lineTo(radiusYellowCircle + radiusYellowCircle * 0.8 * Math.cos(secondsPosition), radiusYellowCircle - radiusYellowCircle * 0.8 * Math.sin(secondsPosition));
    context.lineWidth = 3;
    handSecond.stroke();

    // //создаю минутную стрелку
    var handMinute = canvasRect.getContext("2d");
    handMinute.strokeStyle = "green";
    handMinute.fillStyle = "green";
    handMinute.beginPath();
    handMinute.moveTo(radiusYellowCircle, radiusYellowCircle);
    handMinute.lineTo(radiusYellowCircle, radiusYellowCircle * 0.44);
    context.lineWidth = 6;
    handMinute.stroke();
    // //создаю часовую стрелку
    var handHour = canvasRect.getContext("2d");
    handHour.strokeStyle = "blue";
    handHour.fillStyle = "blue";
    handHour.beginPath();
    handMinute.moveTo(radiusYellowCircle, radiusYellowCircle);
    handMinute.lineTo(radiusYellowCircle, radiusYellowCircle * 0.6);
    context.lineWidth = 12;
    handMinute.stroke();




}
setInterval(interval, 1000)