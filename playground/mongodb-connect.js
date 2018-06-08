//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://vivekmahalingam32:Ramana@142@ds153460.mlab.com:53460/todoapp'||'mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err){
  return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
});

// db.collection('todos').insertOne({
// text :"something",
// completed: false
//
// },(err,result)=>{
//   if(err){
//     return console.log('unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// })
// db.close();


db.collection('users').insertOne({
name :"vivek",
age: 26,
location:  "mumbai"

},(err,result)=>{
  if(err){
    return console.log('unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
});
