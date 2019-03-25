const path = require('path');
const express = require('express');
const hbs = require('hbs');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, 'public');

//create Http server
const server = http.createServer(app);

app.use(express.static('public'));

//configuration for partial
// hbs.registerPartials(__dirname + './views/partials');

//hbs config in express
// app.set('view engine', 'hbs');

//Express Middleware
// app.use((req, res, next) => {
//   const now = new Date().toString();
//   const log = `${now}: ${req.method} ${req.url}`;

  // console.log(log);
  // fs.appendFile('server.log', log + '\n');
//   fs.appendFile('server.log', log + '\n', (err) => {
//     if(err) {
//       console.log('unable to append to server.log')
//     }
//   });
//   next();
// });
//challenge
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

//set upo server
// app.use(express.static(__dirname + '/public'));

//helper
// hbs.registerHelper('getCurrentYear', () => {
//   return new Date().getFullYear()
// });

//change text to Upper Letters
// hbs.registerHelper('screamIt', (text) => {
//   return text.toUpperCase();
// });
//1st hendler
// app.get('/', (req, res) => {
//   // res.send('<h1>hello world!</h1>');
//   res.send({
//     name: 'Damian Cwykiel',
//     likes: [
//       'travelling',
//       'computers'
//     ]
//   });
// });

//home-Page
// app.get('/', (req, res) => {
//   res.render('index');
// });


//2nd hendler - hbs page deployed
//about-Page, skills, cv
// app.get('/about', (req, res) => {
//   //res.send('AboutMe Page');
//   res.render('./views/about.hbs', {
//     pageTitle: 'About Page!',
//     pageSubtitle: 'This is my about page section of WebPage',
//   });
// });

//projects-Page
// app.get('/projects', (req, res) => {
//   res.render('projects.hbs', {
//     pageTitle: 'My Projects',
//     pageSubtitle: 'Check how they work!'
//   })
// });

//contact
// app.get('/contact', (req, res) => {
//   res.render('contact.hbs', {
//     pageTitle: 'Contact',
//     pageSubtitle: 'Leave a message'
//   })
// });

//blog
// app.get('./views/blog.hbs', (req, res) => {
//   res.render('blog.hbs', {
//     pageTitle: 'Blog',
//     pageSubtitle: 'Share your thoughts with others'
//   })
// });

//3rd hendler
//error-Page
// app.get('/error', (req, res) => {
//   res.send({
//     errorMessage: '404 - error message!'
//   });
// });

//server
app.listen(`${port}`, () => {
  console.log(`Server is alive on port ${port}!`);
});
