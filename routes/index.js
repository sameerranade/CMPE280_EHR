var express = require('express');
var mysql = require('./mysql.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingpage');
});
router.get('/login', function(req, res, next) {
  res.render('index');
});

router.get('/plist', function(req, res, next) {

  var query = "select * from sanjeevani.profile ;";
  console.log("Query is:" + query);

  mysql.fetchData(function(err, results) {
    if (err) {
      throw err;
    } else {
      if (results.length > 0) {
        for ( var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
        patient_data = results;
        console.log(patient_data);
        res.render('patientlist', {
          analysis_data : patient_data
        });
      }
    }
  }, query);


  //res.render('patientlist');
});

module.exports = router;
