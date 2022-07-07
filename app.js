require('dotenv/config');

require('./db');

const express = require('express');

const hbs = require('hbs');
const app = express();
const path      = require("path");

require("./config/session.config")(app) 



require('./config')(app);

const projectName = 'lab-express-basic-auth';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;

const index = require('./routes/index');
app.use('/', index);


// movieRouter needs to be added so paste the following lines:
const movieRouter = require('./routes/movie.routes'); // <== has to be added
app.use('/', movieRouter); // <== has to be added
// ...



require('./error-handling')(app);

module.exports = app;

