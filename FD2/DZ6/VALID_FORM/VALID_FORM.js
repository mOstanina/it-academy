"use strict";
function createErrorMessage(name) {
    var span = document.getElementsById(name);//тег куда вставляю строчку
    console.log(span)
    var textInOpt = document.createTextNode("!!!!!!!");// текст
    span.appendChild(textInOpt);
    console.log("!!!!")
}

var formTag = document.forms.INFO; // а можно было найти через getElementById
formTag.addEventListener('submit', validateInfoForm, false); // назначаем обработчик события submit


function validateInfoForm(EO) {
    EO = EO || window.event;
    try {
        var formTag = document.forms.INFO;

        var fioField = formTag.elements.FIO; // а можно было найти через getElementById
        var fioValue = fioField.value; // текстовое значение

        var ageField = formTag.elements.AGE;
        var ageValue = parseInt(ageField.value.trim()); // текст -> число

        var agreeField = formTag.elements.AGREE;
        var agreeValue = agreeField.checked; // логическое значение

        var designField = formTag.elements.DESIGN;
        var designValue = designField.value; // строковое значение

        // каждая радиокнопка является отдельным элементом формы
        // форма.elements[имя] для радиогруппы вернёт КОЛЛЕКЦИЮ
        // т.е. несколько элементов формы с одинаковым именем
        // и коллекция.value вернёт value ВЫБРАННОЙ радиокнопки
        // (могут быть проблемы совместимости с IE, проверяйте!)
        var langField = formTag.elements.LANG;
        var langValue = langField.value; // строковое значение

        if (fioValue.length > 30) {
            alert('Введите пожалуйста ФИО не длиннее 30 символов!');
            fioField.focus(); // фокусируем элемент и прокручиваем к нему
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }
        var opt = document.createElement("option");//создаю новый тег
        var sele = document.getElementById("sel");//тег куда вставляю строчку
        
       

        if (isNaN(ageValue)) {
            alert('Введите пожалуйста в поле возраста корректную цифру!');
            var textInOpt = document.createTextNode("!!!");
            var span = document.getElementById("AGE");
            span.appendChild(textInOpt);
            ageField.focus();
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }

        if (ageValue < 16) {
            alert('Возраст должен быть не менее 16 лет!');
            ageField.focus();
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }

        if (ageValue == 222) {
            alert('Возраст не может быть таким!');
            ageField.focuspokus(); // случайная ошибка!
            EO.preventDefault();
            return;
        }

        if (!agreeValue) {
            alert('Вы не согласились с правилами сайта!');
            agreeField.focus();
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }

        if (designValue == 2) {
            alert('Вы выбрали вычурный дизайн, подумайте ещё!');
            designField.focus();
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }

        if (langValue == "") { // если ничего не выбрано - radio показывает пустую строку
            alert('Вы не выбрали язык!');
            // langField.focus(); сфокусировать ВСЮ радиокнопку не получится
            // но можно промотать страницу к первой из радиокнопок:
            document.getElementById('LANG11').scrollIntoView();
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }
        if (langValue == 33) {
            alert('Вы выбрали немецкий язык, подумайте ещё!');
            //langField.focus(); сфокусировать ВСЮ радиокнопку не получится
            document.getElementById('LANG11').scrollIntoView();
            EO.preventDefault(); // форма не будет отправлена на сервер
            return;
        }

        // валидация успешная - форма будет отправлена на сервер
    }
    catch (ex) {
        alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
        EO.preventDefault(); // что-то пошло не так - считаем что валидация не прошла
    }
}