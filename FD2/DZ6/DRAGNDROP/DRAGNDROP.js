"use strict";
window.addEventListener('load', changeImgPosition, false);
//document.addEventListener('mousemove', moveAt, false);
function changeImgPosition() {
    var img = null;
    var globalZIndex = 10;
    var elems = document.body.getElementsByTagName("img");
    var coordsHash = {}
    for (var j = 0; j < elems.length; j++) {//выясняю координаты каждой картинки пока не присвоила им position: absolute 
        var coor = getCoords(elems[j])
        console.log(coor)
        var left = coor.left;
        var top = coor.top;
        coordsHash[j] = coor;
    }
    console.log(coordsHash)
    for (var i = 0; i < elems.length; i++) {
        console.log(left)
        console.log(top)
        var tOffset = coordsHash[i].top;
        var lOffset = coordsHash[i].left;
        elems[i].style = "position: absolute; left:" + lOffset + "px; top:" + tOffset + "px;";
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