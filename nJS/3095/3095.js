const express = require('express');
const fs = require('fs');
const path = require('path');
const os = require('os');
const webserver = express();
const bodyParser = require("body-parser");
webserver.use(express.static(path.join(__dirname, "public")));
webserver.use(bodyParser.json());
webserver.use(express.urlencoded({extended:true}));

const port = 3095;
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

webserver.post('/stat', (req, res) => {
    logLineSync(logFN,`[${port}] `+"stat called, get pars: "+JSON.stringify(req.query));
    res.send(fs.readFileSync('vote.json', 'utf8'));
});

webserver.listen(port,()=>{
    logLineSync(logFN,"web server running on port "+port);
});