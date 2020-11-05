var mysql = require('mysql');

var connection = mysql.createPool({ // tạo kết nối, thiết lập thông số để truy cập vào cơ sở dữ liệu
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant'
});

module.exports = connection;