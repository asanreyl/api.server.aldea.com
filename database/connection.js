const mysql = require('mysql2/promise'); 
const { logAction }  = require('../globals/globals');

// Configuración de la base de datos como pool de conexiones
const config = {
  host: '127.0.0.1',
  user: 'root',
  password: '1q2w3e4R',
  database: 'aldeadb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}; 

// Creamos el pool de conexiones
const pool = mysql.createPool(config);

// Testeamos el pool de conexiones
async function testPoolConnection() {
  try {
    const pool = mysql.createPool(config);
    const connection = await pool.getConnection();
    
    // Intenta ejecutar una consulta simple
    await connection.query('SELECT 1 + 1 AS solution');
    
    // Si todo va bien, la conexión es exitosa
    logAction('Pool de conexiones creado y conexión verificada.');
    
    // Libera la conexión de nuevo al pool
    connection.release();
  } catch (error) {
      // Si hay algún error, lo capturamos aquí
      logAction(`Error al crear el pool de conexiones o al verificar la conexión: ${error.message}`);
  }
}

testPoolConnection();

module.exports=pool;





// Configuración de db como conecction, pero da problemas
// const db = mysql.createConnection ({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '1q2w3e4R',
//   database: 'aldeadb',
// }); 

// db.connect((err)=> {
//   if (err){
//     throw(err); 
//   }
//   console.log("Aldea database connect"); 
// });
// module.exports = db;