var db = require('../dbconnection/dbconnection');

var staff={
    getAllStaff: (callback) =>{
        return db.query("SELECT * FROM STAFF", callback); // get all staff from table STAFF
    },
    addAnStaff: (STAFF, callback) =>{
        return db.query("INSERT INTO STAFF(STAFFID, STAFFNAME, DOB, PHONE, username, passwd, position) VALUES(?,?,?,?,?,?,?)",
         [STAFF.STAFFID, STAFF.STAFFNAME, STAFF.DOB, STAFF.PHONE, STAFF.username, STAFF.passwd, STAFF.position], callback); // truy van insert
    }
}
module.exports = staff;