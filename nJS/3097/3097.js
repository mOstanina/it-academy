const express = require('express');

const webserver = express(); // создаём веб-сервер

const port = 3097;
function returnForm( userLogin, errorMessage) {
    return `
        <form action="/form">
        <input name="login" value="${userLogin}">
        <input type="submit">
        </form>
        <span>${errorMessage}</span>
    
    `

}

function helloForm(loginName) {
    return `<span>Hello, ${loginName}</span>`;
}


webserver.get('/form', (req, res) => {
    let login = req.query.login;
    let validationResult = (login!=="");

    if (!validationResult) {
        res.send(returnForm(login, ""));
    }else {
        res.send(helloForm(login));
    }
});

// просим веб-сервер слушать входящие HTTP-запросы на этом порту
webserver.listen(port,()=>{
    console.log("web server running on port " + port);
    returnForm("","")
});
