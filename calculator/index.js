const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  console.log(req.body);
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let sum = num1+num2;

  res.send("sum is "+ sum);
});

app.get("/contact",function(req,res){
  res.send("Contact me : cezainmajeed@gmail.com");
});

app.get("/about",function(req,res){
  res.send("I am Cezain.")
})

app.listen(3000,function(){
  console.log("App is listening to port 3000");
});
