'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT ||'3001');
app.set('port',port);

const serve = http.createServer(app);
const router = express.Router();

let route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Api coffee",
        version:"0.0.1"

    })
})

app.use('/',route);
serve.listen(port);
console.log('Api rodando ' + port);


// normalizando a porta do server

function normalizePort(val){
    let port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port >=0){
        return port;
    }

    return false;
}