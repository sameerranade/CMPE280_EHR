var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maithili@123',
    database: 'sanjeevani'
});

connection.connect();

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

module.exports = router;