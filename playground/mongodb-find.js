//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err){
  return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

 // db.collection('todos').find({
 //   _id :new  ObjectId('5b1661c2628bfb2e00b256cb')
 //   }).toArray().then((docs)=>{
 //   console.log('Todos');
 //   console.log(JSON.stringify(docs,undefined,2));
 // },(err)=>{
 //   console.log("unable to fetch",err);
 // });


 // db.collection('user').find().count().then((count)=>{
 //   console.log(`Todos count:${count}`);
 //   //console.log(JSON.stringify(docs,undefined,2));
 // },(err)=>{
 //   console.log("unable to fetch",err);
 // });


 db.collection('users').find({name:'vivek'}).count().then((count)=>{
   console.log(`Todos count:${count}`);
   //console.log(JSON.stringify(docs,undefined,2));
 },(err)=>{
   console.log("unable to fetch",err);
 });

});
