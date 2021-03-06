const path = require('path');
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// console.log(__dirname)
// console.log(__filename)

//Define path for Express configuraation
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')

//Setup handlebars engineer and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//Express Middleware
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;

  // console.log(log);
  // fs.appendFile('server.log', log + '\n');
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('unable to append to server.log')
    }
  });
  next();
});

//helper
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

//index
app.get('', (req, res) => {
  res.render('index', {
    logo: 'Damian Cwykiel',
    offer: 'Dev Classes for Kids',
    title: 'D&D By Damian Cwykiel ©',
    subtitle: "You're look' for WebDeveloper?"
  })
})

//blog
app.get('/blog', (req, res) => {
  res.render('blog', {
    logo: 'Damian Cwykiel',
    offer: 'Dev Classes for Kids',
    title: 'D&D By Damian Cwykiel ©',
    subtitle: "You're look' for WebDeveloper?"
  })
})

//error page
app.get('/blog/*', (req, res) => {
  res.render('404-page', {
    logo: 'Damian Cwykiel',
    offer: 'Dev Classes for Kids',
    title: 'D&D By Damian Cwykiel ©',
    subtitle: "You're look' for WebDeveloper?",
    errorMessage: 'Page not found. Sorry O_O',
    errorMessageSubtitle: `There's no page here.`
  })
})

//error page
app.get('*', (req, res) => {
  res.render('404-page', {
    logo: 'Damian Cwykiel',
    offer: 'Dev Classes for Kids',
    title: 'D&D By Damian Cwykiel ©',
    subtitle: "You're look' for WebDeveloper?",
    errorMessage: 'Page Not Found. Sorry O_O',
    errorMessageSubtitle: `There's no page here.`
  })
})

//server
app.listen(`${port}`, () => {
  console.log(`Server is alive on port ${port}!`);
});
