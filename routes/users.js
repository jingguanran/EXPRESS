var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

listen(8000,function(){
 console.log('serve start!');
})

module.exports = router;
