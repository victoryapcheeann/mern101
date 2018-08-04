const express = require('express'); //npm install --save express, only have support for common js modules, mport express from 'express'; //use es2015, can setup but complicated
require('./services/passport');

const app =  express(); 

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000 //Dynamic Port Binding, heroku give us the port number to use
app.listen(PORT);