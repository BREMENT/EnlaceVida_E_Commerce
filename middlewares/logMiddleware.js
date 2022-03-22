// const fs = require('fs');

// // Este sobre-escribe la ultima pagina visitada
// //function logMiddleware(req, res, next){ fs.writeFileSync('log.txt','Se ingreso en la pagina'+ req.url); next(); }   

// // Este me guarda todo el historial pero formato no amigable
// function logMiddleware(req, res, next){ fs.appendFileSync('userLogs.txt','Se ingreso en la pagina'+ req.url + '/'); next(); }

// module.exports = logMiddleware;


const fs = require('fs');

// Este sobre-escribe la ultima pagina visitada
//function logMiddleware(req, res, next){ fs.writeFileSync('log.txt','Se ingreso en la pagina'+ req.url); next(); }   

// Este me guarda todo el historial pero formato no amigable
const logsFilePath= './logs/userLogs.txt'
const log = (path) => `El usuario ingreso a la ruta: ${path}\n`
function logMiddleware(req, res, next){fs.appendFileSync(logsFilePath, log(req.path) + '/'); next(); }

module.exports = logMiddleware;








