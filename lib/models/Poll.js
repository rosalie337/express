const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  
  organization: {
    type:String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type:String
  },
  executiveDirector: {
    type: String,
    required: true,
    enum: ['Joy', 'Tia', 'Jesse', 'Marshawna', 'Felicia']
  },
  Chair: {
    type: String,
    required: true,
    enum: ['Rob', 'Lisa', 'Rosalie', 'Tare', 'Walter']
  },  
  viceChair: {
    type: String,
    required: true,
    enum: ['Zanele', 'Drae', 'Shannon', 'Ibrahiem', 'Sam']
  }, 
});

module.exports = mongoose.model('Poll', schema);
