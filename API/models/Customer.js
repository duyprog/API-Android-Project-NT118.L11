var db = require('../dbconnection/dbconnection');

var customer={
    getAllCustomer: (callback) =>{
        return db.query("SELECT * FROM CUSTOMER", callback); // get all staff from CUSTOMER STAFF
    },
    getCustomerById: (CUSTOMER_ID, callback) => {
        return db.query("SELECT * FROM customer WHERE CUSTOMER_ID = ?", [CUSTOMER_ID], callback);
    },
    addACustomer: (CUSTOMER, callback) =>{
        return db.query("INSERT INTO CUSTOMER(CUSTOMER_ID, CUSTOMER_NAME, PHONE) VALUES(?,?,?)",
         [CUSTOMER.CUSTOMER_ID, CUSTOMER.CUSTOMER_NAME, CUSTOMER.PHONE], callback); // truy van insert
    },
    addANewCustomer: (CUSTOMER_NAME, PHONE, callback) =>{
        return db.query("INSERT INTO CUSTOMER(CUSTOMER_NAME, PHONE) VALUES(?,?)",
        [CUSTOMER_NAME, PHONE], callback); // truy van insert
    },
    deleteACustomer: (CUSTOMER_ID, callback) =>{
        return db.query("DELETE FROM CUSTOMER WHERE CUSTOMER_ID=?", [CUSTOMER_ID], callback);
    }, 
    getCurrentCustomerId:(callback) =>{
        return db.query("SELECT CUSTOMER_ID FROM CUSTOMER ORDER BY CUSTOMER_ID DESC LIMIT 1", callback)
    }
}
module.exports = customer;