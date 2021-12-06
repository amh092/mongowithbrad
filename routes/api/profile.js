const express = require('express')
const router = express.Router();







router.get('/', function(req, res) {
    res.send("profile router")
});



module.exports = router;
