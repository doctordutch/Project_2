const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helpers = require('./utils/helpers')
const sequelize = require("./config/connection");

// require routes
const routes = require('./controllers')
const routeHome = require('./routes/home')
const routeAbout = require('./routes/about')
const routeCourse = require('./controllers/course-routes')
//const { sequelize } = require('./models/Course')

const app = express();

// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// serve static files form /public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // serve static files
app.use(express.urlencoded({ extended: false}));
app.use(require('./controllers'));
//app.use(routes);

// Set your routes here
app.use(routes);
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))
app.get('/courses', (req, res, next) => routeCourse(req, res, next))

// Start the server
const PORT = process.env.PORT || 3001
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('success'))
});
