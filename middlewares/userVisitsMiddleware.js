const fs = require('fs');

let visits = req.url
visits=[]
const userVisitsMiddleware = (req, res, next) => {fs.appendFileSync('visits.txt', count(visits));
next();
}

module.exports = userVisitsMiddleware;
