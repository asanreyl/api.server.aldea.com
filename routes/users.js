// Importamos Express
const express = require('express');

// Importamos el módulo de rutas
const api = express.Router();

// Importamos los controladores
const usersController = require('../controllers/users');

// Generamos la rutas
api.get('/users',usersController.getUserList); 
api.get('/users/id',usersController.getUser);
api.post('/users',usersController.saveUser);
api.delete('/users',usersController.deleteUser);

api.post('/users/login',usersController.login);

// Exportamos el módulo de rutas
module.exports = api;
