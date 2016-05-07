var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SRmay@123',
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

router.post('/signup',function(req,res){

    console.log("Inside post app.js");

    var name = req.body.name;
    var  user_Name  = req.body.user_Name ;
    var user_type  = req.body.user_type ;
    var user_description  = req.body.user_description ;
    var user_pass  = req.body.user_pass ;

    console.log(user_Name);
    console.log(user_pass,name,user_description,user_type);
    connection.query('INSERT INTO users ' +
        '(user_type ,user_description,user_Name ,user_pass,name) VALUES ' +
        '("'+user_type+'","'+user_description+'","'+user_Name+'","'+user_pass+'","'+name+'")',
        function(err, fields) {
            if(err)
            {
                throw err;
            }
            else
            {
                res.end("Server received the data");
            }
        });

    connection.end();
});

router.get('/plist', function (req, res, next) {


    res.render('patientlist');
});

router.get('/patients', function (req, res, next) {


    connection.query('SELECT * from users', function (err, rows, fields) {
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

    connection.query('SELECT uer_id from users where user_firstName = ?', patientName, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        else {
            connection.query('SELECT * from profile where uer_id = ?', rows[0].uer_id, function (err, rows2, fields) {
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

module.exports = router;