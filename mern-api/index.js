const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const dataRoutes = require('./src/routes/data');
const authRoutes = require('./src/routes/auth');

app.use(bodyParser.json())  //type json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/auth', authRoutes);
app.use('/v1/data', dataRoutes);


app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({ message: message, data: data });
});

mongoose.connect('mongodb+srv://firman:CvmqddskuG0zmbjR@cluster0.pb1mz.mongodb.net/DataCovid?retryWrites=true&w=majority')
    .then(() => {
        app.listen(4000, ()=> console.log('Connection Success'));
    })
    .catch(err=> console.log(err))


