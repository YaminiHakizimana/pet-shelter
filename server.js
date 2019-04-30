//server

// importing the dependecies

const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const flash = require('express-flash')

// defining the Express app
const app = express();

//importing AngularApp
app.use(express.static( __dirname + '/angularApp/dist/angularApp' ));

app.use(flash())

// adding Helmet to enhance API'S secutity
app.use(helmet());

// using bodyParser to parse JSON bodies into Js objects
app.use(bp.json());

// enabling Cors for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// Importing Routes
require('./routes')(app)

// starting the server
app.listen(8000, () => {
  console.log('listenig on port 8000');
});
