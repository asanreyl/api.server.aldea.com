const pool = require('../database/connection');
const { logAction }= require('../globals/globals');


// Borrar contadores
exports.deleteWatterMeter = (async (req, res)=>{

  logAction('Borrar contador.')

  const sqlProcedure = 'call deleteWatterMeter (?)'; 
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


// Obtener un contador
exports.getWatterMeter = (async (req, res)=>{

  logAction('Obtener un Contador.')

  const sqlProcedure = 'call getWatterMeter (?)'; 
  const _request = JSON.stringify(req.body); 
    
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);
    
    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: contadores no encontrados');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});


// Obtener el listado de contadores
exports.getWatterMeterList = (async (req, res)=>{

  logAction('Obtener el listado de contadores.')

  const sqlProcedure = 'call getWatterMeterList(?)'; 
  const _request = JSON.stringify(req.body); 
    
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);

    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: contadores no encontrados');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});

// Obtener el listado de lecturas del contador especificado 
exports.getWatterMeterReadingList = (async (req, res)=>{

  logAction('Obtener el listado de lecturas del contador.')

  const sqlProcedure = 'call getWatterMeterReadingList(?)'; 
  const _request = JSON.stringify(req.body); 

  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);
    
    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: lecturas de contador no encontradas');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});



// Crear-actualizar contadores
exports.saveWatterMeter = (async (req, res)=>{

  logAction('Crear/actualizar contador.')

  const sqlProcedure = 'call saveWatterMeter (?)'; 
  const _request = JSON.stringify(req.body); 
  logAction(_request)  
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);
    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: contadores no encontrados');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});

