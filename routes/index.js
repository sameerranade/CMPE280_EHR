var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingpage');
});
router.get('/login', function(req, res, next) {
  res.render('index');
});

router.get('/plist', function(req, res, next) {
  res.render('patientlist');
});

module.exports = router;
