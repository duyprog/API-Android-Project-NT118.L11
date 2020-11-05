var express = require('express');
var router = express.Router();
var staff = require('../models/staff');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get_all_staff', (req, res, next) =>{
  staff.getAllStaff((err, rows) =>{
    if(err){
      res.send(err);
    }
    else{
      res.send(JSON.stringify(rows));
    }
  });
});
router.post('/insert_new_staff', (req, res, next) =>{
  staff.addAnStaff(req.body, (err, count) =>{
    if(err){
      res.json(err);
    }
    else{
      res.json(req.body);
    }
  })
})
module.exports = router;
