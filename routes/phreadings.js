// Importamos Express
const express = require('express');

// Importamos el módulo de rutas
const api = express.Router();

// Importamos los controladores
const phReadingsController = require('../controllers/phreadings');

// Generamos la rutas
api.post('/ph', phReadingsController.savePhReading);
api.post('/ph/id', phReadingsController.savePhReading);
api.delete('/ph', phReadingsController.deletePhReading);


// Exportamos el módulo de rutas
module.exports = api;

