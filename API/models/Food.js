const mongoose = require('mongoose');
const FoodSchema = new mongoose.Schema({
    foodId:{
        type: Number, 
        required: true, 
        unique: true
    },
    foodName:{
        type: String, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    urlImage:{
        type:String,
    }
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
// receiptId: Number,
// price: Number,
// createDate: Date.now,
// employee: {
//     employeeId: Number, 
//     employeeName: String,
//     position: String, 