var db = require('../dbconnection/dbconnection');

var items={
    getAllFoodItem: (callback) =>{
        return db.query("SELECT * FROM ITEMS WHERE TYPE=FASTFOOD", callback); 
    },
    getAllDrinkItem: (callback) =>{
        return db.query("SELECT * FROM ITEMS WHERE TYPE=DRINK", callback); 
    },
    getAllDessertItem: (callback) =>{
        return db.query("SELECT * FROM ITEMS WHERE TYPE=DESSERT", callback); 
    },
    getAllHotpotItem: (callback) =>{
        return db.query("SELECT * FROM ITEMS WHERE TYPE=HOTPOT", callback);
    },
    getAllFriedItem: (callback) =>{
        return db.query("SELECT * FROM ITEMS WHERE TYPE=FRIED", callback);
    },
    getAllNoodlesItem: (callback) =>{
        return db.query("SELECT * FROM ITEMS WHERE TYPE=NOODLES", callback);
    }
    // addAItem: (Item, callback) =>{
    //     return db.query("INSERT INTO ITEMS(Item_ID, Item_NAME, UNITPRICE, TYPE) VALUES(?,?,?,?)",
    //      [Item.Item_ID, Item.NUM_OF_SEAT, Item.TB_STATUS], callback); // truy van insert
    // },
    // deleteAItem: (Item_ID, callback) =>{
    //     return db.query("DELETE FROM ITEMS WHERE Item_ID=?", [Item_ID], callback);
    // }
}
module.exports = items;