var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});
connection.connect();


var addsql='insert into websites(id,name,url,alexa,country)values(0,?,?,?,?)';
var addsqlparams=['游戏网站','www.4399.com','123','cn']
connection.query(addsql,addsqlparams,function(err,result){
    if(err){
        console.log(err);
        return;
    }
console.log("------------------------------------------");
console.log(result);
console.log("------------------------------------------");
});


connection.end();