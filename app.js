const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');
const sequelize = require("./config/connection");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
var passport   = require('passport');
var bodyParser = require('body-parser');

// require routes
const routes = require('./controllers')
const routeHome = require('./controllers/home-routes')
const routeAbout = require('./controllers/about-routes')
const routeCourse = require('./controllers/course-routes')
const routeUsers = require ('./controllers/user-routes')
const auth = require('./auth/auth')
//const { sequelize } = require('./models/Course')

const app = express();
const sess = {
  secret: 'Super secret secret',
  cookie: {
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Set your routes here

app.use(routes);
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))
app.get('/courses', (req, res, next) => routeCourse(req, res, next))
app.get('/auth',  (req, res, next) => auth(req, res, next))


// Start the server
const PORT = process.env.PORT || 3001
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('success'))
});
