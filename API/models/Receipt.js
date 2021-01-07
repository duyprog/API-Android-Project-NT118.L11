var db = require('../dbconnection/dbconnection');

var receipt = {
    getAllReceipt: (callback) =>{
        return db.query("SELECT * FROM RECEIPT", callback); 
    },
    getAllCompleteReceipt: (callback) => {
        return db.query("SELECT * FROM receipt WHERE TYPE=1" , callback);
    },
    getAllInCompleteReceipt: (callback) => {
        return db.query("SELECT * FROM receipt WHERE TYPE=0" , callback);
    },
    deleteAReceipt: (deletedReceipt, callback) => {
        return db.query("DELETE FROM RECEIPT WHERE RECEIPT_ID=?", [deletedReceipt], callback);
    },
    getReceiptById: (RECEIPT_ID, callback) => {
        return db.query("SELECT * FROM receipt WHERE RECEIPT_ID = ?" , [RECEIPT_ID],  callback);
    }, 
    insertNewReceipt: (STAFFID, CUSTOMER_ID, TBID, TYPE, callback) => {
        return db.query("INSERT INTO RECEIPT(STAFFID, CUSTOMER_ID, TBID, TYPE) VALUES (?,?,?,1)", [STAFFID, CUSTOMER_ID, TBID, TYPE], callback);
    }, 
    insertTakeAwayReceipt: (STAFFID, callback) => {
        return db.query("INSERT INTO RECEIPT(STAFFID, takeaway) VALUES (?,1)", [STAFFID], callback);
    }, 
    getIdOfCurrentReceipt: (callback) =>{
        return db.query('SELECT RECEIPT_ID FROM RECEIPT ORDER BY RECEIPT_ID DESC LIMIT 1', callback);
    },
    updateReceiptTotalPrice: (callback) => {
        return db.query(`UPDATE receipt JOIN receiptdetails on receiptdetails.RECEIPT_ID = receipt.RECEIPT_ID SET TOTALPRICE = (SELECT SUM(receiptdetails.price) FROM receiptdetails WHERE receipt.RECEIPT_ID = receiptdetails.RECEIPT_ID) WHERE receipt.RECEIPT_ID = receiptdetails.RECEIPT_ID`, callback)
    }, 
    getTotalPriceById: (RECEIPT_ID, callback) => {
        return db.query("SELECT TOTALPRICE FROM receipt WHERE RECEIPT_ID = ?" , [RECEIPT_ID],  callback);
    }, 

    updateReceiptDone: (RECEIPT_ID, callback) => {
        return db.query(`UPDATE RECEIPT SET TYPE=0 WHERE RECEIPT_ID=?`, [RECEIPT_ID], callback);
    }, 
    getTableIdbyReceiptId: (RECEIPT_ID, callback) => {
        return db.query(`SELECT TBID FROM RECEIPT WHERE RECEIPT_ID = ?`, [RECEIPT_ID], callback);
    }, 
    getReceiptTakeAway: (callback) => {
        return db.query(`SELECT * FROM RECEIPT WHERE takeaway = 1`, callback);
    }
}

module.exports = receipt;

