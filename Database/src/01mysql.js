const mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database: 'jiaoxue'
});


pool.query('select * from goods limit 0,3', (error, rows)=>{
    console.log(error,rows);
});

module.exports = pool;