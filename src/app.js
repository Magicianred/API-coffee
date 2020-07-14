'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

let route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Api coffee",
        version:"0.0.2"

    });
});

let create = router.post('/',(req,res,next) =>{
    res.status(201).send(req.body);
});

let put = router.put('/:id',(req,res,next) =>{
    const id = req.params.id;
    res.status(201).send({
        id:id,
        item: req.body
    });
});

let del = router.delete('/',(req,res,next) =>{
    res.status(201).send(req.body);
});

app.use('/',route);
app.use('/products',create);
app.use('/products',put);
app.use('/products',del);

module.exports = app;