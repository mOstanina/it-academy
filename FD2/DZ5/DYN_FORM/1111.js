var formDef1 = [{ label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
{ label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
{ label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
{ label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
{ label: 'Рубрика каталога:', kind: 'combo', name: 'division', variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }] },
{ label: 'Размещение:', kind: 'radio', name: 'payment', variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }] },
{ label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
{ label: 'Описание сайта:', kind: 'memo', name: 'description' },
{ label: 'Опубликовать:', kind: 'submit' },];
var formDef2 = [{ label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
{ label: 'Имя:', kind: 'longtext', name: 'firstname' },
{ label: 'Возраст:', kind: 'number', name: 'age' },
{ label: 'Зарегистрироваться:', kind: 'submit' },];
///////////////////////////////////////////////////////////////////////////////
function dunForm(tag, content) {
    var str = "";
    var contElem = document.getElementById("foForm");
    var newForm = document.createElement(tag);
    contElem.appendChild(newForm);
    newForm.setAttribute("action", "https://fe.it-academy.by/TestForm.php");

    function createTag(tagName, con) {
        var newTaginForm = document.createElement(tagName);//создаю новый тег внутри формы
        var newTextInForm = document.createTextNode(con);// текст
        var innerElem = newForm;//тег куда вставляю строчку
        newTaginForm.appendChild(newTextInForm);//привязываю текст к элементу
        innerElem.appendChild(newTaginForm);//привязываю элемент к дереву
        newTaginForm.innerHTML = con;
    }
    ////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < content.length; i++) {
        str += createTag("label", content[i].label);
        if (content[i].kind === "submit") {
            var submitBtn = document.createElement("input");
            var forma = newForm;
            forma.appendChild(submitBtn);
            submitBtn.setAttribute("type", "submit");
        } else if (content[i].kind === "memo") {
            function createTextarea() {
                var textareaInput = document.createElement("textarea");
                var forma = newForm;
                forma.appendChild(textareaInput);
                textareaInput.style.width = "800px";
            }
            str += createTag("br", "") + createTextarea() + createTag("br", "")

        } else if (content[i].kind === "check") {
            var checkInput = document.createElement("input");
            var forma = newForm;
            forma.appendChild(checkInput);
            checkInput.setAttribute("type", "checkbox");
            checkInput.checked = true;
        } else if (content[i].kind === "radio") {
            function createRadio() {
                var rdio = document.createElement("input");
                var forma = newForm;
                var textInOpt = document.createTextNode(content[i].variants[j].text);
                rdio.appendChild(textInOpt);
                forma.appendChild(rdio);
                rdio.setAttribute("value", content[i].variants[j].value);
                rdio.setAttribute("type", "radio");
                rdio.setAttribute("name", content[i].name);
                rdio.setAttribute("value", content[i].variants[j].value);
            }
            function createSpan() {
                var spanTag = document.createElement("span");
                var forma = newForm;
                var spanContent = document.createTextNode(content[i].variants[j].text);
                spanTag.appendChild(spanContent);
                spanTag.appendChild(spanContent);
                forma.appendChild(spanTag);
                spanTag.innerHTML = content[i].variants[j].text;
            }
            var j;
            for (j = 0; j < content[i].variants.length; j++) {
                str += createRadio() + createSpan()
            }
        } else if (content[i].kind === "combo") {
            function createSelect() {
                var selec = document.createElement("select");
                var forma = newForm;
                forma.appendChild(selec);
                selec.setAttribute("id", "sel");
                selec.setAttribute("name", content[i].name);
            }
            str += createSelect();
            function createOption() {
                var opt = document.createElement("option");
                var sele = document.getElementById("sel");
                var textInOpt = document.createTextNode(content[i].variants[l].text);
                opt.appendChild(textInOpt);
                sele.appendChild(opt);
                opt.setAttribute("value", content[i].variants[l].value);
                sele.setAttribute("id", "sel");
                opt.setAttribute("name", content[i].name);
            }
            var l;
            for (l = 0; l < content[i].variants.length; l++) {
                str += createOption()
            }
        }
        else if (content[i].kind === "longtext" || content[i].kind === "shorttext" || content[i].kind === "number") {
            function createTextInput() {
                var textInput = document.createElement("input");
                var forma = newForm;
                forma.appendChild(textInput);
                textInput.setAttribute("type", "text");
                textInput.setAttribute("name", content[i].name);
                if (content[i].kind === "longtext" || content[i].kind === "memo") {
                    textInput.style.width = "800px";
                }
                if (content[i].kind === "shorttext") {
                    textInput.style.width = "200px";
                }
                if (content[i].kind === "number") {
                    textInput.style.width = "50px";
                }
            }
            str += createTextInput()
        }
        str += createTag("br", "")
    }
    str += createTag("hr", "")
}
dunForm("form", formDef1);
dunForm("form", formDef2);