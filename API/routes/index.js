var express = require('express');
var router = express.Router();
var staff = require('../models/Staff');
var table = require('../models/Table');
var receipt = require('../models/Receipt');
var items = require('../models/Item');
var receiptDetails = require('../models/ReceiptDetail');
var Customer = require('../models/Customer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get_all_staff', (req, res, next) =>{
  staff.getAllStaff((err, rows) =>{ // goi ham get all staff
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});
router.post('/insert_new_staff', (req, res, next) =>{
  staff.addAStaff(req.body, (err) =>{ // req.body là các tham số truyền vào để insert nằm trong phần body ví dụ như là : req.body.STAFFID, ..... 
    if(err){
      res.json(err); // tra ve loi 
    }
    else{
      res.json(req.body); // neu them thanh cong thi tra ve ket qua la phan body cua request 
    }
  })
})
router.delete('/delete_a_staff/:STAFFID', (req, res, next) =>{
  req.body = req.params.STAFFID;
  staff.deleteAStaff(req.body, (err) =>{
    if(err){
      res.json(err);
    }
    else{
      res.json(req.body);
    }
  })
}); 
// TABLE
router.get('/get_all_table', (req, res, next) =>{
  table.getAllTable((err, rows) =>{ // goi ham get all staff
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});

// ITEM
router.get('/get_all_food_item', (req, res, next) =>{
  items.getAllFoodItem((err, rows) =>{ // goi ham get all food
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});

router.get('/get_all_drink_item', (req, res, next) =>{
  items.getAllDrinkItem((err, rows) =>{ // goi ham get all drink
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});
router.get('/get_all_dessert_item', (req, res, next) =>{
  items.getAllDessertItem((err, rows) =>{ // goi ham get all dessert
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});

router.get('/get_all_hotpot_item', (req, res, next) =>{
  items.getAllHotpotItem((err, rows) =>{ // goi ham get all hotpot
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});
router.get('/get_all_fried_item', (req, res, next) =>{
  items.getAllFriedItem((err, rows) =>{ // goi ham get all fried
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});

router.get('/get_all_noodles_item', (req, res, next) =>{
  items.getAllNoodlesItem((err, rows) =>{ // goi ham get all noodles
    if(err){
      res.send(err); // neu co loi response se tra ve loi
    }
    else{
      res.send(rows); // tra ve ket qua truy van duoi dang json 
    }
  });
});


// RECEIPT
router.get('/get_all_receipt', (req, res, next) =>{
  receipt.getAllReceipt((err, rows) =>{
    if(err) {
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});

router.get('/get_all_complete_receipt', (req, res, next) =>{
  receipt.getAllCompleteReceipt((err, rows) =>{
    if(err) {
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});

router.get('/get_all_incomplete_receipt', (req, res, next) =>{
  receipt.getAllInCompleteReceipt((err, rows) =>{
    if(err) {
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});


router.delete('/delete_a_receipt/:RECEIPT_ID', (req, res, next) =>{
  req.body = req.params.RECEIPT_ID;
  receipt.deleteAReceipt(req.body, (err) =>{
    if(err){
      res.json(err);
    }
    else{
      res.json(req.body);
    }
  })
});

router.get('/get_receipt_by_id/:RECEIPT_ID', (req, res, next) =>{
  console.log(req.params);
  receipt.getReceiptById(req.params.RECEIPT_ID, (rows, err) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});
router.get('/get_receiptdetail_by_id/:RECEIPT_ID', (req, res, next) =>{
  console.log(req.params);
  receiptDetails.getReceiptDetailById(req.params.RECEIPT_ID, (rows, err) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});
router.post('/insert_new_receipt/:STAFFID/:CUSTOMER_ID/:TBID/:TYPE', (req, res, next) =>{
  receipt.insertNewReceipt(req.params.STAFFID, req.params.CUSTOMER_ID, req.params.TBID, req.params.TYPE, (err) =>{ // req.body là các tham số truyền vào để insert nằm trong phần body ví dụ như là : req.body.STAFFID, ..... 
    if(err){
      res.json(err); // tra ve loi 
    }
    else{
      res.json(req.params.body); // neu them thanh cong thi tra ve ket qua la phan body cua request 
    }
  })
})


// Customer
router.get('/get_all_customer', (req, res, next) =>{
  console.log(req.params);
  Customer.getAllCustomer((rows, err) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});
router.get('/get_customer_by_id/:customer_ID', (req, res, next) =>{
  console.log(req.params);
  Customer.getCustomerById(req.params.customer_ID, (rows, err) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(rows);
    }
  });
});

router.post('/insert_new_customer/:CUSTOMER_ID/:CUSTOMER_NAME/:PHONE', (req, res, next) =>{
  Customer.addANewCustomer(req.params.CUSTOMER_ID, req.params.CUSTOMER_NAME, req.params.PHONE, (err) =>{ // req.body là các tham số truyền vào để insert nằm trong phần body ví dụ như là : req.body.STAFFID, ..... 
    if(err){
      res.send(err); // tra ve loi 
    }
    else{
      res.send(req.params.body); // neu them thanh cong thi tra ve ket qua la phan body cua request 
    }
  })
})
module.exports = router;
