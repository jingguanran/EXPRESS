var express = require('express');
var router = express.Router();




//练习测试是事实就是计算机看了修改 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
