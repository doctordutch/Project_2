const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helpers = require('./helpers')
const sequelize = require('./config/connection')

// require routes
const routeHome = require('./routes/home')
const routeAbout = require('./routes/about')
const routeCourse = require('./controllers/course-routes')
//const { sequelize } = require('./models/Course')

const app = express();

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
  partialsDir: __dirname + '/views/partials',
  helpers: helpers()
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// serve static files form /public
app.use(express.static(path.join(__dirname, 'public'))); // serve static files
app.use(express.urlencoded({ extended: false}));
app.use(require('./controllers'));
//app.use(routes);

// Set your routes here
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))
app.get('/courses', (req, res, next) => routeCourse(req, res, next))

// Start the server
//sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3000, () => console.log(`Express server listening on port ${process.env.PORT || 3000}!`))