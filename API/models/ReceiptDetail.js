var db = require('../dbconnection/dbconnection');

var receiptDetails = { 
    getReceiptDetailById: ( RECEIPT_ID,callback) => {
        return db.query(`SELECT * FROM RECEIPTDETAILS JOIN ITEMS ON RECEIPTDETAILS.ITEM_ID = ITEMS.ITEM_ID JOIN RECEIPT ON RECEIPT.RECEIPT_ID = RECEIPTDETAILS.RECEIPT_ID JOIN TB ON TB.TB_ID = RECEIPT.TBID  WHERE RECEIPTDETAILS.RECEIPT_ID = ?`, [RECEIPT_ID], callback);
    }, 
}


module.exports = receiptDetails;