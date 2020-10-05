const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookiePArser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();


//routes


// app - express

const app = express();

//DB definition

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))

//midelwares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookiePArser());
app.use(expressValidator());
app.use(cors());