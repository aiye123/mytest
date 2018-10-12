var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});
connection.connect();
var modsql='DELETE FROM websites where id=6';
connection.query(modsql,function(err,result){
    if(err){
        console.log(err);
        return;
    }
console.log("------------------------------------------");
console.log(result);
console.log("------------------------------------------");
});


connection.end();