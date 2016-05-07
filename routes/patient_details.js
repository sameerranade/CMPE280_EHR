var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('patientDetails');
});

router.get('/all_patients', function(req, res, next) {
  res.render('all_patients');
});

module.exports = router;
