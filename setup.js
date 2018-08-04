/* Step 1) Setup
mkdir server
cd server
npm init
ls
npm install --save express
cat package.json -> see whether express is installed (Only available on mac)
*/

/* Step 2) Heroku
2.1) Dynamic Port binding
const PORT = process.env.PORT || 5000 //heroku give us the port number to use
app.listen(PORT);    

2.2) Specific Node Environment - Package.json
   "node": "8.1.1",
   "npm": "5.0.3"

2.3) Specific Start Script - Package.json
  "scripts": {
   "start": "node index.js"
  },

2.4) Create gitignore file //We do not commit the dependencies

2.5) Git - Terminal
git --version (Check git version, if not installed, install git)
heroku -v 
git init
git add .
git commit -m "First commit"
heroku login
heroku create
git remote add heroku https://git.heroku.com/hidden-sierra-52233.git
git push heroku master
heroku open

3) PassportJS
3.1) npm install --save passport passport-google-oauth20
3.2) Make a new project in Google API manager
3.3) Sign up for Google+ API
*/