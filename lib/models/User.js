const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },

  authentication: {
    password: String,
    required: true,
  },

  phone: {
    type: Number,
    maxlength: 10,
    enum: ['home', 'work', 'mobile']
  },

  image: {
    type: URL,
  } 
});

module.exports = mongoose.model('User', schema);
