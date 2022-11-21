const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let posts = [];

app.get("/",function(req,res){
  res.render("home",{
    newPosts:posts
  });
});

app.get("/post/:postTitle",function(req,res){
  let postTitle = req.params.postTitle;

  for(let i=0;i<posts.length;i++)
  {
    if(posts[i].title === postTitle)
    {
      res.render("post",{
        foundPost:posts[i]
      })
    }
  }
})




app.get("/about",function(req,res){
  res.render("about");
})

app.get("/create",function(req,res){
  res.render("create");
})

app.post("/create",function(req,res){
  console.log(req.body);
  let title = req.body.title;
  let postBody = req.body.postBody;

  let postObj = {
    title:title,
    postBody:postBody
  }

  posts.push(postObj);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("server started on port 3000.");
});
