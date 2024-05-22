// Importamos Express
const express = require('express');

// Importamos el módulo de rutas
const api = express.Router();

// Importamos los controladores
const clReadingsController = require('../controllers/clreadings');

// Generamos la rutas
api.post('/cl', clReadingsController.saveClReading);
api.post('/cl/id', clReadingsController.saveClReading);
api.delete('/cl', clReadingsController.deleteClReading);


// Exportamos el módulo de rutas
module.exports = api;

