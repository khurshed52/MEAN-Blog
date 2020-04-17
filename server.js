const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors'); 
const port = process.env.PORT || 3000;
require('dotenv').config()
app.use(cors());

const routes = require('./routes/routes');

// promise 
mongoose.Promise = global.Promise;

// db 
const db = 'mongodb+srv://khuri:Khan@123@mean-users-9nwkz.mongodb.net/test?retryWrites=true&w=majority';

// connect to mongodb
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, dbName:'Blog' }, (error) => {
    if(!error) {
        console.log('connected to data base')
    } else {
        console.log('error to connect data base')
    }
})


app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', routes);

app.get('*', (req, res) =>res.sendFile(path.join(__dirname, 'dist/index.html')));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))