const passport = require('passport'); //npm install --save passport passport-google-oauth20
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
