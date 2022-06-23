const express = require("express");
const fs = require("fs");
const os = require("os");
const path = require("path");

const fetch = require("isomorphic-fetch");

const port = 4095;
const logFN = path.join(__dirname, '_server.log');
const webserver = express();
const bodyParser = require("body-parser");
webserver.use(express.static(path.join(__dirname, "public")));
webserver.use(bodyParser.json());
webserver.use(express.urlencoded({extended:true}));

function logLineSync(logFilePath,logLine) {
    const logDT=new Date();
    let time=logDT.toLocaleDateString()+" "+logDT.toLocaleTimeString();
    let fullLogLine=time+" "+logLine;
    const logFd = fs.openSync(logFilePath, 'a+');
    fs.writeSync(logFd, fullLogLine + os.EOL);
    fs.closeSync(logFd);
}

webserver.get('/savedArray', (req, res) => {
    logLineSync(logFN,`[${port}] `+"savedArray called, get pars: "+JSON.stringify(req.query));
    res.send(fs.readFileSync('requests.json', 'utf8'));
});

webserver.post('/run', async (req, res) => {
    logLineSync(logFN,`[${port}] `+"run called, get pars: "+JSON.stringify(req.body));
    const requestFront = req.body

    let response = await fetch(requestFront.url, {
        method: requestFront.method,
        headers: { "Content-Type": requestFront.headers["ContentType"], "Accept":requestFront.headers["Accept"]},
        body: requestFront.body,
    });

    const headersRow = response.headers;
    const status = response.status
    response = await response.text()

    const result={
        status:status,
        headers:headersRow,
        data:response
    }
    res.send(JSON.stringify(result))

});

webserver.post('/save', async (req, res) => {
    logLineSync(logFN,`[${port}] `+"save called, get pars: "+JSON.stringify(req.body));

    const requestFront = req.body
    const newId=requestFront.url
    const json1 = fs.readFileSync('requests.json', 'utf8');
    const object = JSON.parse(json1);
    object[newId] = requestFront;
    const json2 = JSON.stringify(object);
    fs.writeFileSync('requests.json', json2);
    res.end()

});

webserver.listen(port,()=>{
    logLineSync(logFN,"web server running on port "+port);
});