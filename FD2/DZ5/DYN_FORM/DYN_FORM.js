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
    var newDiv = document.createElement("div");
    var contElem = document.getElementById("foForm");
    var newForm = document.createElement(tag);
    newDiv.appendChild(newForm);
    contElem.appendChild(newDiv);
    newForm.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
   
    function createTag(tagName, con) {
        var newTaginForm = document.createElement(tagName);//создаю новый тег внутри формы
        //   console.log(newTaginForm);
        var newTextInForm = document.createTextNode(con);// текст
        var innerElem = newForm;//тег куда вставляю строчку
        newTaginForm.appendChild(newTextInForm);//привязываю текст к элементу
        innerElem.appendChild(newTaginForm);//привязываю элемент к дереву
        newTaginForm.innerHTML = con;
        if (tagName !== "label" && tagName !== "br" && tagName !== "span" && tagName !== "hr") {
            if (content[i].kind === "submit") {
                newTaginForm.setAttribute("type", "submit");
            }
            else if (content[i].kind === "check") {
                newTaginForm.setAttribute("type", "checkbox");
                newTaginForm.checked = true;
            }
            else if (tagName === "select" && content[i].kind === "combo") {
                newTaginForm.setAttribute("id", "sel");
                newTaginForm.setAttribute("name", content[i].name);
            }
            else if (content[i].kind === "radio") {
                newTaginForm.setAttribute("type", "radio");
                newTaginForm.setAttribute("name", content[i].name);
                newTaginForm.setAttribute("value", content[i].variants[j].value);
            } else {
                newTaginForm.setAttribute("type", "text");
                newTaginForm.setAttribute("name", content[i].name);
                if (content[i].kind === "longtext" || content[i].kind === "memo") {
                    newTaginForm.style.width = "800px";
                }
                if (content[i].kind === "shorttext") {
                    newTaginForm.style.width = "200px";
                }
                if (content[i].kind === "number") {
                    newTaginForm.style.width = "50px";
                }
            }
        }
    }
    function createOption() {
        var opt = document.createElement("option");//создаю новый тег
        var sele = document.getElementById("sel");//тег куда вставляю строчку
        var textInOpt = document.createTextNode(content[i].variants[l].text);// текст
        opt.appendChild(textInOpt);
        sele.appendChild(opt);
        opt.setAttribute("value", content[i].variants[l].value);
    }
    ////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < content.length; i++) {
        str += createTag("label", content[i].label);
        if (content[i].kind === "memo") {
            str += createTag("br", "") + createTag("textarea", "")
        } else if (content[i].kind === "radio") {
            var j;
            for (j = 0; j < content[i].variants.length; j++) {
                str += createTag("input") + createTag("span", content[i].variants[j].text)
            }
        } else if (content[i].kind === "combo") {
            str += createTag("select", "")
            var l;
            for (l = 0; l < content[i].variants.length; l++) {
                str += createOption("option", content[i].variants[l].text)
            }
        }
        else {
            str += createTag("input", content[i].kind)
        }
        str += createTag("br", "")
    }
    str += createTag("hr", "")
}
dunForm("form", formDef1);
dunForm("form", formDef2);