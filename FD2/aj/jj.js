

"use strict";

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName='OSTANINA_DRINKS_AJAX_STORA';

function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {       //LOCKGET — чтение строки и планирование её изменения
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        }
    );
}
function deleteName() {
    var presenceInList = gameStorage.deleteValue((prompt("введите имя, которое хотите удалить")));
    (presenceInList) ? alert("имя удалено") : alert("такого имени нет в перечне");
}
self.deleteValue = function (key) {
    if (key in self.storage) {
        delete self.storage[key];
        self.storeInfo()
        return true;
    } else {
        return false;
    }
};

function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        // нам всё равно, что было прочитано -
        // всё равно перезаписываем
        var info={
            allSongs : document.getElementById('IName').value,
            // age : document.getElementById('IAge').value
        };
        $.ajax( {   //UPDATE — изменение заблокированной строки
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'UPDATE', n : stringName, v : JSON.stringify(info), p : updatePassword },
                success : updateReady, error : errorHandler
            }
        );
    }
}

function updateReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
}

function restoreInfo() {  //READ — чтение строки
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}

function readReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
        var info=JSON.parse(callresult.result);
        document.getElementById('IName').value=info.name;
        document.getElementById('IAge').value=info.age;
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

restoreInfo();

