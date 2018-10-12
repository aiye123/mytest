var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});
connection.connect();


var addsql='update websites set name=?,url=?,country=?where id=?';
var addsqlparams=['游戏网站','www.4399.com','cn','2']
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