var mongoose  = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://todos1:todos1@ds153460.mlab.com:53460/todoapp'||'mongodb//localhost:27017/TodoApp');;

module.exports = {mongoose};
