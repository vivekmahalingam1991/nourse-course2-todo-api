var mongoose  = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/TodoApp');

module.exports = {mongoose};
