const express = require('express')
const router = express.Router();







router.get('/', function(req, res) {
    res.send("posts router")
});

router.post('/',function(res,req){
    res.send("hello")
});

module.exports = router;
