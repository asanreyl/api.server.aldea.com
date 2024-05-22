

function logAction (actionMessage) {
  const now = new Date();
  const date = now.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' });
  const time = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' , second: '2-digit'});

  console.log(`[${date} ${time}] ${actionMessage}`);
};

module.exports = { logAction }
