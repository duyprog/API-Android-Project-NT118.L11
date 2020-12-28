var db = require('../dbconnection/dbconnection');

var staff={
    getAllStaff: (callback) =>{
        return db.query("SELECT * FROM STAFFS", callback); // get all staff from table STAFF
    },
    addAStaff: (STAFF, callback) =>{
        return db.query("INSERT INTO STAFFS(STAFFID, STAFFNAME, DOB, PHONE, username, passwd, position) VALUES(?,?,?,?,?,?,?)",
         [STAFF.STAFFID, STAFF.STAFFNAME, STAFF.DOB, STAFF.PHONE, STAFF.username, STAFF.passwd, STAFF.position], callback); // truy van insert
    },
    deleteAStaff: (STAFFID, callback) =>{
        return db.query("DELETE FROM STAFF WHERE STAFFID=?", [STAFFID], callback);
    }
}
module.exports = staff;