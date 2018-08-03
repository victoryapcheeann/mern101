const express = require('express'); //only have support for common js modules
const app =  express();
// import express from 'express'; //use es2015, can setup but complicated

app.get('/', (req, res)=> {
    res.send({hi: 'thaaare'});
});

app.listen(4000);