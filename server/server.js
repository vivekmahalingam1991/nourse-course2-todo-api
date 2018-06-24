const _ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');



var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Users} = require('./models/users');
var {Userdetail} = require('./models/userdetail');

const port = process.env.PORT || 3000;


var app = express();

app.use(bodyParser.json());


app.post('/todos',(req,res)=>{

  var todo = new Todo({
    text : req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  })
console.log(req.body);
});

app.get('/todos',(req,res)=>{

  var todos1;
  Todo.find().then((todos)=>{
    res.send({
      todos
    })
console.log(todos[0].havingCard);

  },(e)=>{
    res.status(400).send(e);
  });





});


app.get('/todos123',(req,res)=>{

  var todos1;
  Userdetail.find().then((userdetails)=>{
    res.send({
      userdetails
    })
// console.log(todos[0].havingCard);

  },(e)=>{
    res.status(400).send(e);
  });





});



app.get('/todos/:fromid&:toid',(req,res)=>{

console.log("hii");
var toid = req.params.toid;
var fromid = req.params.fromid;

  // var todo = new Todo({
  //   having :  req.params.fromid
  // });

  // var todo1 = {
  //
  // having: req.params.fromid
  // }

  Todo.findOneAndUpdate({userCard:toid},{$push:{havingCard:fromid}},{new: true, upsert: true}
  ).then((todo)=>{

    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    return res.status(404).send();
  });
  });


app.get('/users',(req,res)=>{

  var todos1;
  Users.find().then((users)=>{
    res.send({
      users
    })



  },(e)=>{
    res.status(400).send(e);
  });



});


app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
  return  res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{res.send(todo)},(e)=>{res.status(400).send();}).catch((e)=>{res.status(400).send();});

});


app.get('/todos123/:id',(req,res)=>{

  var id = req.params.id;


Userdetail.findOne({usercard:id}).then((userdetail)=>{
  res.send({userdetail});
console.log("hii");
})


  },(e)=>{
    res.status(400).send(e);
  });







app.patch('/todos/:id',(req,res)=>{
var id = req.params.id;
var body = _.pick(req.body,['text','completed']);

if(!ObjectID.isValid(id)){
return  res.status(404).send();
}
if(_.isBoolean(body.completed)&&body.completed){
  body.completedAt = new Date().getTime();
}
else{
  body.completed = false;
  body.completedAt = null
}

Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
  if(!todo){
    return res.status(404).send();
  }
  res.send({todo});
}).catch((e)=>{
  return res.status(404).send();
})
});


app.listen(port,()=>{
  console.log(`started at port ${port}`);

});
