"use strict";
function interval() {
    var time = new Date();
    var seconds = time.getSeconds();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var hoursPosition = hours * (360 / 12) / 180 * Math.PI;
    var minutesPosition = minutes * (360 / 60) / 180 * Math.PI;
    var secondsPosition = seconds * (360 / 60) / 180 * Math.PI;
    console.log(`${hours}:${minutes}:${seconds}`)

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
    handSecond.strokeStyle = "black";
    handSecond.fillStyle = "black";
    handSecond.lineCap = "round";
    handSecond.beginPath();

    // x = x0 + r * cos(a)
    // y = y0 + r * sin(a)
    // x0, y0 - центр, a - угол, r - радиус.

    handSecond.moveTo(radiusYellowCircle, radiusYellowCircle);
    handSecond.lineTo(radiusYellowCircle + radiusYellowCircle * 0.8 * Math.sin(secondsPosition), radiusYellowCircle - radiusYellowCircle * 0.8 * Math.cos(secondsPosition));
    context.lineWidth = 3;
    handSecond.stroke();
    // //создаю хвостик секндной стрелки
    var handSecondTail = canvasRect.getContext("2d");
    handSecondTail.strokeStyle = "black";
    handSecondTail.fillStyle = "black";
    handSecondTail.lineCap = "black";
    handSecondTail.beginPath();
    handSecondTail.moveTo(radiusYellowCircle, radiusYellowCircle);
    handSecondTail.lineTo(radiusYellowCircle - radiusYellowCircle * 0.1 * Math.sin(secondsPosition), radiusYellowCircle + radiusYellowCircle * 0.1 * Math.cos(secondsPosition));
    context.lineWidth = 3;
    handSecond.stroke();

    // //создаю минутную стрелку
    var handMinute = canvasRect.getContext("2d");
    handMinute.strokeStyle = "black";
    handMinute.fillStyle = "black";
    handMinute.beginPath();
    handMinute.moveTo(radiusYellowCircle, radiusYellowCircle);
    handMinute.lineTo(radiusYellowCircle + radiusYellowCircle * 0.6 * Math.sin(minutesPosition), radiusYellowCircle - radiusYellowCircle * 0.6 * Math.cos(minutesPosition));
    context.lineWidth = 6;
    handMinute.stroke();
    // //создаю хвостик секндной стрелки
    var handMinuteTail = canvasRect.getContext("2d");
    handMinuteTail.strokeStyle = "black";
    handMinuteTail.fillStyle = "black";
    handMinuteTail.lineCap = "black";
    handMinuteTail.beginPath();
    handMinuteTail.moveTo(radiusYellowCircle, radiusYellowCircle);
    handMinuteTail.lineTo(radiusYellowCircle - radiusYellowCircle * 0.1 * Math.sin(minutesPosition), radiusYellowCircle + radiusYellowCircle * 0.1 * Math.cos(minutesPosition));
    context.lineWidth = 6;
    handMinuteTail.stroke();

    // //создаю часовую стрелку
    var handHour = canvasRect.getContext("2d");
    handHour.strokeStyle = "black";
    handHour.fillStyle = "black";
    handHour.beginPath();
    handHour.moveTo(radiusYellowCircle, radiusYellowCircle);
    handHour.lineTo(radiusYellowCircle + radiusYellowCircle * 0.5 * Math.sin(hoursPosition+minutesPosition/12), radiusYellowCircle - radiusYellowCircle * 0.5 * Math.cos(hoursPosition+minutesPosition/12));
    context.lineWidth = 12;
    handHour.stroke();
    // //создаю хвостик секндной стрелки
    var handHourTail = canvasRect.getContext("2d");
    handHourTail.strokeStyle = "black";
    handHourTail.fillStyle = "black";
    handHourTail.lineCap = "black";
    handHourTail.beginPath();
    handHourTail.moveTo(radiusYellowCircle, radiusYellowCircle);
    handHourTail.lineTo(radiusYellowCircle - radiusYellowCircle * 0.1 * Math.sin(hoursPosition+minutesPosition/12), radiusYellowCircle + radiusYellowCircle * 0.1 * Math.cos(hoursPosition+minutesPosition/12));
    context.lineWidth = 12;
    handHourTail.stroke();

    // //электронные часы
    var electronicClock = canvasRect.getContext("2d");
    electronicClock.fillStyle = "black";
    electronicClock.font = 'bold 30px Arial';
    electronicClock.fillText(`${hours}:${minutes}:${seconds}`, radiusYellowCircle * 0.7, radiusYellowCircle * 0.8);


    setTimeout(interval, 1020 - (new Date()).getMilliseconds())

}
setTimeout(interval, 1020 - (new Date()).getMilliseconds())