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
    var str2 = "";
    var newForm = document.createElement(tag);
    console.log(newForm);
    newForm.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
    newForm.setAttribute("id", "myForm");
    var contElem = document.getElementById("foForm");
    contElem.appendChild(newForm);



    function createTag(tagName, con) {
        var newTaginForm = document.createElement(tagName);//создаю новый тег внутри формы
        //   console.log(newTaginForm);


        if (tagName === "input") {
            newTaginForm.setAttribute("type", content[i].kind);
            newTaginForm.setAttribute("name", content[i].name);
        }
        if (content[i].kind ==="check") {
            newTaginForm.setAttribute("type", "checkbox");
            newTaginForm.checked = true;
        }
        // {label:'Размещение:',kind:'radio',name:'payment',
        // variants:[{text:'бесплатное',value:1},
        //           {text:'платное',value:2},
        //           {text:'VIP',value:3}]},
        // if (content[i].kind ==="radio") {
        //     for(i=0;i<variants.length;i++){
        //         newTaginForm.setAttribute("type", content[i].kind);
        //     }
            
        // }
       


        var newTextInForm = document.createTextNode(con);
        var innerElem = document.getElementById("myForm");//тег куда вставляю строчку
        //  console.log(innerElem);

        newTaginForm.appendChild(newTextInForm);
        innerElem.appendChild(newTaginForm);
        newTaginForm.innerHTML = con;
        // console.log(newTextInForm);

        // if (tagName !== "label") {
        //     newTaginForm.setAttribute("type", content[i].kind);
        //     newTaginForm.setAttribute("name", content[i].name);
        // }
        // var newTextInForm = document.createTextNode(con);
        // //  console.log(con);
        // var innerElem = document.getElementById("myForm");//тег куда вставляю строчку
        // //  console.log(innerElem);
        // newTaginForm.appendChild(newTextInForm);
        // innerElem.appendChild(newTaginForm);
        // newTaginForm.innerHTML = con;
        // // console.log(newTextInForm);
    }

    ////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < content.length; i++) {
        //   console.log(content[i].label);
        console.log(content[i].kind);

        str += createTag("label", content[i].label) + createTag("input", content[i].kind) + createTag("br");

    }


}
// dunForm("form", formDef2);
dunForm("form", formDef1);