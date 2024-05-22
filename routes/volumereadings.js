// Importamos Express
const express = require('express');

// Importamos el módulo de rutas
const api = express.Router();

// Importamos los controladores
const volumeController = require('../controllers/volumereadings');

// Generamos la rutas
api.post('/volume', volumeController.saveVolume);
api.post('/volume/id', volumeController.saveVolume);
api.delete('/volume', volumeController.deleteVolume);


// Exportamos el módulo de rutas
module.exports = api;

