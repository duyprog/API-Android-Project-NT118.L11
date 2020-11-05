var db = require('../dbconnection/dbconnection');

var staff={
    getAllStaff: (callback) =>{
        return db.query("SELECT * FROM STAFF", callback);
    },
    addAnStaff: (STAFF, callback) =>{
        return db.query("INSERT INTO STAFF(STAFFID, STAFFNAME, DOB, PHONE, username, passwd, position) VALUES(?,?,?,?,?,?,?)",
         [STAFF.STAFFID, STAFF.STAFFNAME, STAFF.DOB, STAFF.PHONE, STAFF.username, STAFF.passwd, STAFF.position], callback);
    }
}
module.exports = staff;