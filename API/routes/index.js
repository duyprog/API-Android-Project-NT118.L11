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
module.exports = router;
