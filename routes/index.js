var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingpage');
});

router.get('/home', function(req, res, next) {
  res.render('landingpage');
});

router.get('/plist', function(req, res, next) {
  res.render('patientlist');
});

module.exports = router;
