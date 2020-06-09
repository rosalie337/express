const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  organization: {
    name: String,
    _id: Number,
    imageUrl: URL,
    description: String,
  }
});

module.exports = mongoose.model('Organization', schema);
