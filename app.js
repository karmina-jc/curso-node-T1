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

const db = async () => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false        
        });
        console.log('DB connected')
    } catch (error) {
        console.log('DB connection Error', error)
    }
};

//execure DB connection
db();

/*connection old way
mongoose 
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))
*/
//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookiePArser());
app.use(expressValidator());
app.use(cors());

//routes middleware


// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})