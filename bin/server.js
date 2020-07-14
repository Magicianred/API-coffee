// 'use strict'
const app = require('../src/app');
const debug = require('debug')('API-coffee:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '3001');
app.set('port',port);

const serve = http.createServer(app);

serve.listen(port);
serve.on('error',onError);
serve.on('listening',onListening)
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

function onError(error){
    if(error.syscall !=='listen'){
        throw error;
    }
    let bind = typeof port === 'string' ? 
        'Pipe' + port:
        'Port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
            
    }

}

function onListening(){
    let addr = serve.address();
    let bind = typeof addr === 'string'
        ?'pipe'+ addr
        :'port'+ addr.port;
    debug('Listening on' + bind);
}