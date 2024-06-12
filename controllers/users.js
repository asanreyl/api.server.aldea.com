const pool = require('../database/connection');
const jwt = require('../services/jwt');
const { logAction }= require('../globals/globals');



// Login de usuarios 
exports.login = (async (req, res) => {
  const { userName, password } = req.body;

  try {

  }catch (error){
    res.status(500).send(error);
  }

});

// Borrar usuarios 
exports.deleteUser = (async (req, res)=>{

  logAction('Borrar usuario.')

  const sqlProcedure = 'call deleteUser (?)'; 
  const _request = JSON.stringify(req.body); 
    
  try {
    [result] =  await pool.query(sqlProcedure, [_request]);
    let data = result['affectedRows'];
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});


// Obtener un usuario
exports.getUser = (async (req, res)=>{

  logAction('Obtener un usuario.')

  const sqlProcedure = 'call getUser (?)'; 
  const _request = JSON.stringify(req.body); 
    
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);
    
    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: usuarios no encontrados');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});


// Obtener el listado de usuarios
exports.getUserList = (async (req, res)=>{

  logAction('Obtener el listado de usuarios.')

  const sqlProcedure = 'call getUserList(?)'; 
  const _request = JSON.stringify(req.body); 
    
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);

    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: usuarios no encontrados');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});



// Crear-actualizar usuarios
exports.saveUser = (async (req, res)=>{

  logAction('Crear/actualizar usuario.')

  const sqlProcedure = 'call cd .. (?)'; 
  const _request = JSON.stringify(req.body); 
  logAction(_request)  
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);
    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: usuarios no encontrados');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});



