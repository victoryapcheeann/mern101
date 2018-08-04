const express = require('express'); //npm install --save express, only have support for common js modules, mport express from 'express'; //use es2015, can setup but complicated
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User')
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app =  express(); 

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000 //Dynamic Port Binding, heroku give us the port number to use
app.listen(PORT);