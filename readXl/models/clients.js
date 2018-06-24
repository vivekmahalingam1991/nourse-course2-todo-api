var mongoose = require('mongoose');


var Client = mongoose.model('Client',{
name:{
  type: String,
  required: true,
  minlength: 1,
  trim: true
}
});

module.exports = {Client};
