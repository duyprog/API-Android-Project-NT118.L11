var express = require('express');
var router = express.Router();
const foodModel = require('../models/Food');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foods', async(req, res) =>{
  const foods = await foodModel.find({});

  try{
    res.send(foods);
  }
  catch(err){
    res.status(500).send(err);
  }
});

router.post('/insert', async(req, res) =>{
  const food = new foodModel(req.body);

  try{
    await food.save();
    res.send(food);
  }
  catch(err){
    res.status(500).send(err);
  }
});
module.exports = router;