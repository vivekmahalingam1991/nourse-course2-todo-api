const _ = require('lodash');
const xlsx = require('xlsx');

var express = require('express');
var bodyParser = require('body-parser');



var {mongoose} = require('mongoose_connect');
var {Client} = require('./models/clients');


const port = process.env.PORT || 4000;






// const workbook = xlsx.readFile('profiles.xlsx');
// const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//
// const columnA = [];
//
// for (let z in worksheet) {
//   if(z.toString()[0] === 'A'){
//     columnA.push(worksheet[z].v);
//   }
// }
//
//
// var jsonColumnA = JSON.stringify(columnA);
// console.log(jsonColumnA);
// console.log(columnA);



var app = express();

app.use(bodyParser.json());

app.listen(4000,()=>{
  console.log(`started at port ${port}`);

});
