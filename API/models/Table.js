var db = require('../dbconnection/dbconnection');

var table={
    getAllTable: (callback) =>{
        return db.query("SELECT * FROM TB ORDER BY TB_ID", callback);  
    },
    addATable: (Table, callback) =>{
        return db.query("INSERT INTO TB(TB_ID, NUM_OF_SEATS, TB_STATUS) VALUES(?,?,?)",
         [Table.TB_ID, Table.NUM_OF_SEAT, Table.TB_STATUS], callback); // truy van insert
    },
    deleteATable: (TB_ID, callback) => {
        return db.query("DELETE FROM Table WHERE TB_ID=?", [TB_ID], callback);
    },
    updateServeDone: (TB_ID, callback) => {
        return db.query("UPDATE TB SET TB_STATUS=0 WHERE TB_ID=?", [TB_ID], callback);
    }
}
module.exports = table;