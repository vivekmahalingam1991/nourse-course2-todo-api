const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');

const{Todo} = require('./../server/models/todo');

var id = "5b1791a1012dac485a6b21f4";

if(!ObjectId.isValid(id)){
  console.log("invalid id");
}

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("todos",todos);
//
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log("todo",todo);
//
// });


Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('id not found');
  }
  console.log("todo by id",todo);
}).catch((e)={
  console.log(e);
});
