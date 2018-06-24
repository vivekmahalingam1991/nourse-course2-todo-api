const _ = require('lodash');
const xlsx = require('xlsx');

var express = require('express');
var bodyParser = require('body-parser');



var {mongoose} = require('./db/mongoose');
var {Client} = require('./models/clients');


const port = process.env.PORT || 4000;






const workbook = xlsx.readFile('profiles.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const columnA = [];

for (let z in worksheet) {
  if(z.toString()[0] === 'A'){
    columnA.push(worksheet[z].v);
  }
}





var jsonColumnA = JSON.stringify(columnA);
console.log(jsonColumnA);
console.log(columnA);

for(i in columnA){
  var client = new Client({
    name : columnA[i]
  })

  client.save().then((doc)=>{
    console.log(doc);
  },(e)=>{
    console.log(e);
  })


}

var app = express();

app.use(bodyParser.json());




app.post('/pdc',(req,res)=>{


  var client = new Client({
    name : columnA[1]
  })

  client.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  })
console.log(req.body);


});

app.get('/pdc',(req,res)=>{
  Client.find().then((clients)=>{
    res.send({
      clients
    })
  },(e)=>{
    res.status(400).send(e);
  });
});






app.listen(4000,()=>{
  console.log(`started at port ${port}`);

});
