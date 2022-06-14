const express = require('express');
const fs = require("fs");
const os = require("os");
const path = require("path");

const webserver = express(); // создаём веб-сервер

const port = 4097;
const logFN = path.join(__dirname, '_server.log');

function returnForm( userLogin, errorMessage) {

    return `
        <form action="/form" method="POST">
        <input name="login" value="${userLogin}">
        <input type="submit" >
        </form>
        <span>${errorMessage}</span>
    `
}

function helloForm(loginName) {
    return `<span>Hello, ${loginName}</span>`;
}

function logLineSync(logFilePath,logLine) {
    const logDT=new Date();
    let time=logDT.toLocaleDateString()+" "+logDT.toLocaleTimeString();
    let fullLogLine=time+" "+logLine;
    const logFd = fs.openSync(logFilePath, 'a+');
    fs.writeSync(logFd, fullLogLine + os.EOL);
    fs.closeSync(logFd);
}

webserver.get('/', (req, res) => {
    logLineSync(logFN,`[${port}] `+"form render");
    res.send(returnForm("", ""));
});

webserver.use(express.urlencoded({extended: true}));

webserver.post('/form', (req, res) => {
    logLineSync(logFN,`[${port}] `+"form called, post pars: "+JSON.stringify(req.body));

    let login = req.body.login;
    if (login===""){
        logLineSync(logFN,`[${port}] `+"get error");
        res.send(returnForm(login, "error"));
    } else {
        logLineSync(logFN,`[${port}] `+"redirect to: " +`/form?login=${login}` );
        res.redirect(302,`/form?login=${login}`)
    }
});

webserver.get('/form', (req, res) => {
    logLineSync(logFN,`[${port}] `+"form called, get pars: "+JSON.stringify(req.query));
    let login = req.query.login;
    res.send(helloForm(login))
});

// просим веб-сервер слушать входящие HTTP-запросы на этом порту
webserver.listen(port,()=>{
    console.log("web server running on port " + port);
});