//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err){
  return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

db.collection('todos').findOneAndUpdate({
  _id : new ObjectId('5b1661c2628bfb2e00b256cb')
},{
  $set:{
    completed: false
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});





  //find one and delet


});
