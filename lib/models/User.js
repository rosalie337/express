const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  phoneType: {
    type: String,
    enum: ['home', 'work', 'mobile']
  },

  phoneNumber: {
    type: Number,
    maxlength: 10,
    required:true
  },

  image: {
    type: String,
  } 
});

module.exports = mongoose.model('User', schema);
