//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err){
  return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  //delete many

  // db.collection('todos').deleteMany({text: 'eat lunch'}).then((result)=>{
  //
  //   console.log(result);
  //
  // });

  //deleteOne
  //
  // db.collection('todos').deleteOne({text: 'eat lunch'}).then((result)=>{
  //
  //   console.log(result);

db.collection('todos').findOneAndDelete({completed:false}).then((result)=>{
console.log(result);

});




  //find one and delet


});
