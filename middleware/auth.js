const jwt = require('jsonwebtoken');
// calling the config cause it has the web token 
// i fixed token issue by rewrite require('../config') to  require('config')
const config = require('config')
// exporting middleware function 
module.exports = function(req,res, next) {
// get the token from the header and save to toke const 

const token = req.header('x-auth-token')

// check if there is token at all 

if(!token){
   return res.status(401).json({msg:'no token, authorization denied'});
}
// check if the token is valid or timed out.
try {
  // if token is valid to be save to decoded
    const decoded = jwt.verify(token,config.get('jwtSecret'))

    req.user = decoded.user;

    next();
}

catch (err){
// if token is not valid 401 msg will be fired
    res.status(401).json({msg:'token is invalid'})

}

}



