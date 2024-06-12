const express = require('express');
const cors = require('cors'); 
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();
app.use(cors()); 

// Cargar rutas
const usersRouter = require('./routes/users');
const watterMeterRouter = require('./routes/wattermetters');
const clReadingRouter = require('./routes/clreadings');
const phReadingRouter = require('./routes/phreadings');
const volumeReadingRouter = require('./routes/volumereadings');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Rutas base
app.use('/api', usersRouter);
app.use('/api', watterMeterRouter);
app.use('/api', clReadingRouter);
app.use('/api', phReadingRouter);
app.use('/api', volumeReadingRouter);

module.exports = app;
