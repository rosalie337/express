const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  organization: {
    name: String,
    description: String,
    imageUrl: String,
    required: true,
  }
});

module.exports = mongoose.model('Organization', schema);
