var db = require('../models/mysql.js');
var sql = 'SELECT count(*) as count from node_user';
db.query(sql, function(err, rows, fields){
    if (err) {
        console.log(err);
        return;
    }
    console.log('用户数量 : ', rows[0].count);
});
