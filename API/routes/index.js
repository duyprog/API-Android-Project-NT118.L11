var express = require('express');
var router = express.Router();
var staff = require('../models/staff');
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
      res.send(JSON.stringify(rows)); // tra ve ket qua truy van duoi dang json 
    }
  });
});
router.post('/insert_new_staff', (req, res, next) =>{
  staff.addAnStaff(req.body, (err, count) =>{ // req.body là các tham số truyền vào để insert nằm trong phần body ví dụ như là : req.body.STAFFID, ..... 
    if(err){
      res.json(err); // tra ve loi 
    }
    else{
      res.json(req.body); // neu them thanh cong thi tra ve ket qua la phan body cua request 
    }
  })
})
module.exports = router;
