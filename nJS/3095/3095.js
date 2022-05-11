const express = require('express');
const fs = require('fs');
const path = require('path');
const webserver = express();
const bodyParser = require("body-parser");
webserver.use(express.static(path.join(__dirname, "public")));
webserver.use(bodyParser.json());
webserver.use(express.urlencoded({extended:true}));

const port = 3095;

webserver.get('/variants', (req, res) => {
    res.send(fs.readFileSync('vote.json', 'utf8'));
});

webserver.post('/vote', (req, res) => {
    const json1 = fs.readFileSync('vote.json', 'utf8');
    const object = JSON.parse(json1);
    console.log(req)
    console.log(req.body)
    object.variants.forEach(function(item, i, arr) {
       if(item.id===req.body.id){
          item.count++
       };
    });
    const json2 = JSON.stringify(object);
    fs.writeFileSync('vote.json', json2);
    res.end()
});

webserver.post('/stat', (req, res) => {
    res.send(fs.readFileSync('vote.json', 'utf8'));
});

webserver.listen(port,()=>{
    console.log("web server running on port " + port);
});