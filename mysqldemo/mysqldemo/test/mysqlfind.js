var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test',
});
connection.connect();
var sql='select * from node_user';
var people=[];
connection.query(sql,function(err,result){
    if(err){
        console.log(err);
        return;
    }
    
     if(result){
      for (let i = 0; i < result.length; i++) {
                people.push({'id':result[i].id,'name':result[i].name,'age':result[i].age}) ;
      }
 }

  return people;
 
});
console.log(people);
connection.end();
