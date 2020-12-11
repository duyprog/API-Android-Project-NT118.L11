var db = require('../dbconnection/dbconnection');

var receipt = {
    getAllReceipt: (callback) =>{
        return db.query("SELECT * FROM RECEIPT", callback); 
    },
    addAReceipt: (newReceipt, callback) =>{
        return db.query("INSERT INTO RECEIPT(RECEIPT_ID, DATECREATE, TOTALPRICE, STAFFID, CUSTOMER_ID, TBID) VALUES(?, ?, ?, ?, ?, ?",
            [newReceipt.RECRIPT_ID, newReceipt.DATECREATE, newReceipt.TOTALPRICE, newReceipt.STAFFID, newReceipt.CUSTOMER_ID, newReceipt.TBID], callback);
    }, 
    deleteAReceipt: (deletedReceipt, callback) => {
        return db.query("DELETE FROM RECEIPT WHERE RECEIPT_ID=?", [deletedReceipt], callback);
    }, 
    getReceiptById: (RECEIPT_ID, callback) => {
        return db.query("SELECT * FROM receipt WHERE RECEIPT_ID = ?" , [RECEIPT_ID],  callback);
    }
}

module.exports = receipt;

