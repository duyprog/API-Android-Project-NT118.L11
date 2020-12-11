var express = require('express');
var router = express.Router();
var staff = require('../models/Staff');
var table = require('../models/Table');
var receipt = require('../models/Receipts');
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

router.post('/insert_new_receipt', (req, res, next) =>{
  receipt.addAReceipt(req.body, (err) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(req.body);
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
module.exports = router;
