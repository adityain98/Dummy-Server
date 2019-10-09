var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
  name:  String,
  email: String
})

var Test = mongoose.model('Test', testSchema);

module.exports = Test