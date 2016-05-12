var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'cmpe280.chowxkprohlg.us-west-1.rds.amazonaws.com',
    user: 'ciphers',
    password: 'ciphers280',
    database: 'EHR',
    port : '3306'
});

connection.connect( function(err){
    if (err){
        throw err;
    }
    else {
        console.log('Connected to DB.');
    }
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('landingpage');
});
router.get('/login', function (req, res, next) {
    res.render('index');
});
router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.get('/livedata', function (req, res, next) {
    res.render('livedata');
});

router.post('/signup',function(req,res){

    console.log("Inside post app.js");

    var name = req.body.name;
    var  user_Name  = req.body.user_Name ;
    var user_type  = req.body.user_type ;
    var user_description  = req.body.user_description ;
    var user_pass  = req.body.user_pass ;

    console.log(req.body);
    //console.log(user_Name);
    //console.log(user_pass,name,user_description,user_type);
    connection.query('INSERT INTO Users ' +
        '(user_type ,user_description,user_lastname ,user_pass,user_firstname) VALUES ' +
        '("'+user_type+'","'+user_description+'","'+user_Name+'","'+user_pass+'","'+name+'")',
        function(err, fields) {
            if(err)
            {
                throw err;
            }
            else
            {
                res.render('index');
            }
        });

    //connection.end();
});

router.get('/plist', function (req, res, next) {


    res.render('patientlist');
});

router.get('/patients', function (req, res, next) {


    connection.query('SELECT * from Users', function (err, rows, fields) {
        if (err) {
            throw err;
        }
        else {
            res.json(rows);
        }
        console.log('The solution is: ', rows);
    });

});
router.get('/appointments', function (req, res, next) {


    connection.query('SELECT * from Appointments', function (err, rows, fields) {
        if (err) {
            throw err;
        }
        else {
            res.json(rows);
        }
        console.log('The solution is: ', rows);
    });

});
router.get('/patients/:pName', function (req, res, data) {
    var patientName = req.params.pName;

    connection.query('SELECT uer_id from Users where user_firstName = ?', patientName, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        else {
            connection.query('SELECT * from Profile where uer_id = ?', rows[0].uer_id, function (err, rows2, fields) {
                if (err) {
                    throw err;
                }
                else {
                    res.json(rows2);
                }
                console.log('The solution is: ', rows2);
            });

        }

    });
});

router.get('/patientSummary', function (req, res, next) {
    res.render('patientSummary');
});

router.get('/doctorSummary', function (req, res, next) {
    res.render('doctorSummary');
});

router.get('/hospital_dashboard', function (req, res, next) {
    res.render('hospitalDashboard');
});

module.exports = router;
