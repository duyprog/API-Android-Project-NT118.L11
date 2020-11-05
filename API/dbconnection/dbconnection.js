var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant'
});

module.exports = connection;