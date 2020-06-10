const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  
  name: {
    type:String,
    required: true,
  },
  description: {
    type:String
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Organization', schema);
