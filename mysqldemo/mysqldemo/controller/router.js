var formidable = require("formidable");
var db = require("../models/mysql.js");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});

exports.showIndex = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("hello word");
};

exports.doFind = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    connection.connect();
    var sql = 'select * from node_user';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        var people = [];
        if (result) {
            for (let i = 0; i < result.length; i++) {
                people.push({ 'id': result[i].id, 'name': result[i].name, 'age': result[i].age });
            }
        }
        res.send(people);
        return people;
    });
};

exports.dologin = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    var username = req.body.username;
    var password = req.body.password;
    var sql = 'select * from st_users where username="' + username + '"and password=' + password;
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (err) {
            res.send("err");
        }
        if (result.length > 0) {
            res.send("success");
        } else {
            res.send("passworderr")
        }
    });

}
exports.doregist = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    var username = req.body.username;
    var password = req.body.password;
    var nikename = req.body.nikename;
    var age = req.body.age;
    var sex = req.body.sex;
    var email = req.body.email;
    // var sql = 'INSERT INTO st_users VALUES("'+username+'","'+password+'","'+nickname+'",'+age+',"'+sex+'","'+email+'")';
    // console.log(sql);
    // connection.query(sql, function (err, result) {
    //     if (err) {
    //         res.send("err");
    //     }

    //     else{
    //         res.send("insertsuccess")
    //     }
    // });
    var addsql = 'insert into st_users(id,username,password,nickname,sex,age,email)values(0,?,?,?,?,?,?   )';
    var addsqlparams = [username, password, nikename, sex, age, email]
    connection.query(addsql, addsqlparams, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            console.log(nikename);
            console.log(req.body); 
            res.send("result"); }

    });


}