let mongoose    = require('mongoose');
let Schema      = mongoose.Schema;

let BearSchema  = new Schema({
  name: String,
  weapon: String,
  message: String,
});

module.exports = mongoose.model('Bear', BearSchema);