'use strict';

const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).send({
        title: "API coffee",
        version: "0.02"
    });
});

module.exports = router;