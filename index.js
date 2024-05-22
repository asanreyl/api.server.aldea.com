const app = require('./app');

const { logAction } = require('./globals/globals')
const port = 3300; 

app.listen(port, ()=> {
  logAction('App waiting on http://localhost:3300'); 
})


