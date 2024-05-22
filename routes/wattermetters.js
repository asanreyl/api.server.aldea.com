// Importamos Express
const express = require('express');

// Importamos el módulo de rutas
const api = express.Router();

// Importamos los controladores
const watterMeterController = require('../controllers/wattermeters');

// Generamos la rutas
api.get('/getWattermetersList', watterMeterController.getWatterMeterList); 
api.get('/wattermeters/id', watterMeterController.getWatterMeter);
api.post('/getWattermetersReadings', watterMeterController.getWatterMeterReadingList);
api.post('/wattermeters', watterMeterController.saveWatterMeter);
api.delete('/wattermeters', watterMeterController.deleteWatterMeter);


// Exportamos el módulo de rutas
module.exports = api;

