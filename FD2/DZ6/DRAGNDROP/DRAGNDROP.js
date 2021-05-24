"use strict";
window.addEventListener('load', changeImgPosition, false);
//document.addEventListener('mousemove', moveAt, false);
function changeImgPosition() {
    var img = null;
    var globalZIndex = 10;
    var elems = document.body.getElementsByTagName("img");
    var otsup = 0;
    for (var i = 0; i < elems.length; i++) {
        elems[i].setAttribute("id", "img" + i);
        elems[i].setAttribute("z-index", 1);
        var left = getCoords(elems[i]).left + otsup;
        var top = getCoords(elems[i]).top;
        otsup += elems[i].offsetWidth
        elems[i].style = "position:absolute; left:" + left + "px; top:" + top + "px;";
        var img = elems[i];
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
    }
}
function getCoords(elem) {   // кроме IE8
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}