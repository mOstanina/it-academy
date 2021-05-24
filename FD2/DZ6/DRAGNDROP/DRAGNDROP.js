"use strict";
window.addEventListener('load', changeImgPosition, false);
function changeImgPosition() {
    var elems = document.body.getElementsByTagName("img");
    for (var i = 0; i < elems.length; i++) {
        var elemsWidth = elems[i].offsetWidth;
        var yOffset = (elemsWidth + 10) * i; //добавляю отступы 10px чтобы не слипались картинки
        elems[i].style = "position:absolute; left: " + yOffset + "px";
        elems[i].setAttribute("id", "img" + i);
        elems[i].setAttribute("z-index", 1);
        elems[i].setAttribute("ondragstart", "imgDragStart(event)"); 
    }
}
var img = null;
var globalZIndex = 10;
function imgDragStart(EO) {    // началось перетаскивание
    EO = EO || window.event;
    EO.preventDefault();
   // console.log('starting drag id=' + EO.target.id);
    img = EO.target;
    moveEl(img);
    function moveEl(img) {
        img.onmousedown = function (e) {
            var coords = getCoords(img);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;
            moveAt(e);

            globalZIndex++; // над другими элементами
            img.style.zIndex = globalZIndex;

            function moveAt(e) {
                img.style.left = e.pageX - shiftX + 'px';
                img.style.top = e.pageY - shiftY + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            };
            
            img.onmouseup = function () {
                document.onmousemove = null;
                img.onmouseup = null;
            };
        }
        img.ondragstart = function () {
            return false;
        };
    }
    function getCoords(elem) {   // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}