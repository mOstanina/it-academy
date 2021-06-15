// создаю фон для ирового поля
var gameWindow = document.getElementById("gameWindow");
// var gameWindowWidth = window.getComputedStyle(gameWindow).width;
// gameWindowWidth = parseFloat(gameWindowWidth.replace(/[px]/g, ''));
// var gameWindowHeight = window.getComputedStyle(gameWindow).height;
// gameWindowHeight = parseFloat(gameWindowHeight.replace(/[px]/g, ''));
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
//canvas.setAttribute("style", `width=${gameWindowWidth} height=${gameWindowHeight} viewBox='0 0 ${gameWindowWidth} ${gameWindowHeight}'`);
var options = {
    color: "rgba(226, 203,250,1",
    opasity:""
}
functionstep(){
    var fillColor = options.color.replace()
}

function animationCanvas() {
    window.requestAnimationFrame(animationCanvas)

    step()
}