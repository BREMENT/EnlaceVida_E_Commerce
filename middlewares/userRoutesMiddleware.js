const fs = require('fs');
let userStatus=false;

function userRoutesMiddleware(req, res, next){
    if(userStatus == true) {
        res.render('userDetail')
        }
    else{res.render('login')
        }
    next();
}
module.exports = userRoutesMiddleware;

