// создаю фон для ирового поля
var gameContainer = document.getElementById("container")//нахожу контейнер
var gameScreen = document.getElementById("screen");// нахожу весь экран 
var gameWindow = document.getElementById("gameWindow");//нахожу игровое пространство
var infoHeight = document.getElementById("info");//нахожу область отображения счета
var widthGameWindow = window.getComputedStyle(gameWindow).width;// определяю ширину игровой области
widthGameWindow = parseFloat(widthGameWindow.replace(/[px]/g, ''));
console.log(widthGameWindow);
heightGameWindow = widthGameWindow * 0.5;
gameWindow.setAttribute("style", "height:" + heightGameWindow + "px");

var message = document.createElement("div");// сообщение повернуть экран
message.setAttribute("class", "mes");
message.setAttribute("style", "height:" + `${heightGameWindow}`);
message.setAttribute("style", "width:" + `${widthGameWindow}`);
message.innerHTML = "поверните экран";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    function sizeMobile() {
        var mobileScreenHeight = window.screen.height//определяю высоту экрана устройства
        console.log(mobileScreenHeight)
        var mobileScreenWidth = window.screen.width//определяю ширину экрана устройства
        console.log(mobileScreenWidth)
        gameWindow.setAttribute("style", "height:" + mobileScreenHeight)
        gameWindow.setAttribute("style", "width:" + mobileScreenWidth)
   
    }
    sizeMobile();
    console.log(window.screen.width)
    
    function resize() {
        console.log("resize")
        var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        gameWindow.setAttribute("style", "height:" + scrollHeight + "px")
       console.log(scrollHeight)
    }
    resize()
    console.log("Вы используете мобильное устройство (телефон или планшет).")

    window.addEventListener("resize", resize, false);

    //alert('Высота с учётом прокрутки: ' + scrollHeight);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // alert( "Текущая прокрутка: " + scrollTop );
    // alert( window.innerHeight ); // вся высота окна
    // alert( document.documentElement.clientHeight ); // высота минус прокрутка
    
    window.addEventListener("orientationchange", function (event) {
        resize()
        var orientationAngle = event.target.screen.orientation.angle
        console.log("the orientation of the device is now " + orientationAngle);
        console.log("height" + heightGameWindow);
        console.log("width" + widthGameWindow);
        console.log(message)
        if (orientationAngle === 0) {
            console.log("3333")
            gameContainer.removeChild(gameScreen)
            gameContainer.appendChild(message)
        } else {
            if (message) {
                gameContainer.removeChild(message);
                gameContainer.appendChild(gameScreen)
            }
        }
    });
} else {
    console.log("Вы используете ПК.")
}