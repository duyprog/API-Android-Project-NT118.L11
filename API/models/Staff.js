const mongoose = require('mongoose');
const StaffSchema = new mongoose.Schema({
  identify:{
      type: Number,
      required: true,
      unique: true
  },
  staffName:{
      type: String,
      required: true,
  },
  position:{
      type: String, 
  }
});

const Staff = mongoose.model("Staff", StaffSchema);
module.exports = Staff;