const express = require('express'); //npm install --save express, only have support for common js modules, mport express from 'express'; //use es2015, can setup but complicated
const passport = require('passport'); //npm install --save passport passport-google-oauth20
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app =  express(); 

passport.use(new GoogleStrategy({
     clientID: keys.googleClientID,
     clientSecret: keys.googleClientSecret,
     callbackURL: '/auth/google/callback' //Add this to authorized redirect URIs if not it will not work due to security reasons
    }, 
    (accessToken, refreshToken, profile, done)=>{
       console.log('access token' ,accessToken);
       console.log('refresh token', refreshToken);
       console.log('profile', profile);
    })
); //new instance of the google passport strategy

app.get(
    '/auth/Google', 
    passport.authenticate('google', {
        scope:['profile', 'email']
    })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google') 
);

const PORT = process.env.PORT || 5000 //Dynamic Port Binding, heroku give us the port number to use
app.listen(PORT);