const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const js2xmlparser = require("js2xmlparser");
const webserver = express();
const bodyParser = require("body-parser");
webserver.use(express.static(path.join(__dirname, "public")));
webserver.use(bodyParser.json());
webserver.use(express.urlencoded({extended:true}));
webserver.use(anyBodyParser);  // это самописная мидлварь, которая тело запроса в виде строки помещает в req.rawBody

const port = 3595;
const logFN = path.join(__dirname, '_server.log');

function logLineSync(logFilePath,logLine) {
    const logDT=new Date();
    let time=logDT.toLocaleDateString()+" "+logDT.toLocaleTimeString();
    let fullLogLine=time+" "+logLine;
    const logFd = fs.openSync(logFilePath, 'a+');
    fs.writeSync(logFd, fullLogLine + os.EOL);
    fs.closeSync(logFd);
}

webserver.get('/variants', (req, res) => {
    logLineSync(logFN,`[${port}] `+"variants called, get pars: "+JSON.stringify(req.query));
    res.send(fs.readFileSync('vote.json', 'utf8'));
});

webserver.post('/vote', (req, res) => {
    logLineSync(logFN,`[${port}] `+"vote called, get pars: "+JSON.stringify(req.query));
    const json1 = fs.readFileSync('vote.json', 'utf8');
    const object = JSON.parse(json1);
    object.variants.forEach(function(item, i, arr) {
       if(item.id===req.body.id){
          item.count++
       }
    });
    const json2 = JSON.stringify(object);
    fs.writeFileSync('vote.json', json2);
    res.end()
});

webserver.options('/stat', (req, res) => {
    logLineSync(logFN,`[${port}] `+"/stat preflight called");

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");

    res.send("");
});

webserver.get('/stat', (req, res) => {
    logLineSync(logFN,`[${port}] `+"stat called, get pars: "+JSON.stringify(req.query));
    res.setHeader("Cache-Control","public, max-age=60")
    //
    const accept = req.headers["accept"];

    if ( accept==="application/json" ) {
        console.log("получено тело запроса в формате JSON");
        res.send(fs.readFileSync('vote.json', 'utf8'));
    }
    else if ( accept==="application/xml" ) {
        console.log("получено тело запроса в формате XML");
        res.send(js2xmlparser.parse("votes",JSON.parse(fs.readFileSync('vote.json', 'utf8'))));
    }
    else if ( accept==="text/html" ) {
        console.log("получено тело запроса в формате HTML");
        res.send(req.rawBody);
    }
    else {
        console.log("получено тело запроса в формате "+accept);
        res.send(fs.readFileSync('vote.json', 'utf8'));
    }

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    res.send("");
});

webserver.listen(port,()=>{
    logLineSync(logFN,"web server running on port "+port);
});

function anyBodyParser(req, res, next) {
    const accept=req.headers["accept"];
    if ( accept==="text/html" ) {
       let resultStr=""
       let file= JSON.parse(fs.readFileSync('vote.json', 'utf8'))

        file.variants.forEach((item, index) => {
            resultStr=resultStr + `<div><span>${item.id}</span><span>${item.value}</span><span>:</span><span>${item.count}</span></div>`;
        })
        req.setEncoding("utf8");
            req.rawBody = resultStr;
            next();  // rawBody заполнено, вызываем следующую мидлварь в цепочке мидлварей
    }
    else {
        next(); // раз это не запрос в формате XML, сразу вызываем следующую мидлварь
    }
}