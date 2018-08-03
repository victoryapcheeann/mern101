const express = require('express'); //only have support for common js modules
const app =  express();
// import express from 'express'; //use es2015, can setup but complicated

app.get('/', (req, res)=> {
    res.send({hi: 'man'});
});

//Dynamic Port Binding
const PORT = process.env.PORT || 5000 //heroku give us the port number to use
app.listen(PORT);