const pool = require('../database/connection');
const { logAction }= require('../globals/globals');


// Borrar lecturas de cloro
exports.deletePhReading = (async (req, res)=>{

  logAction('Borrar lectura de ph.')

  const sqlProcedure = 'call deletePh (?)'; 
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


// Crear-actualizar lecturas de cloro
exports.savePhReading = (async (req, res)=>{

  logAction('Crear/actualizar lecturas de cloro.')

  const sqlProcedure = 'call savePh (?)'; 
  const _request = JSON.stringify(req.body); 
  logAction(_request)  
  try {
    [result, fields] =  await pool.query(sqlProcedure, [_request]);
    if (result[0]&&result[0][0]&&result[0][0]['data_json']){
      let data = result[0][0]['data_json'];
      res.status(200).json({ data });
    } else {
      res.status(404).json({}); 
      logAction('Error 404: lecturas de PH no encontradas');
    }

  } catch (err) {
    res.status(500).send(err.message);
    logAction(`Web Service Error: ${err.message}`);
  }

});

