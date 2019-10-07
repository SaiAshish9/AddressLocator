const express=require('express');
const app=express();
const ejs=require('ejs')
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/addressLocatorDB",{useNewUrlParser:true})
app.set('view engine','ejs')
app.use(express.static("public"))

app.get("/",(req,res)=>{
res.render("home");
})


app.post("/",(req,res)=>{
  console.log("hi");
})

app.listen(process.env.PORT||3001,()=>{
  console.log("server started");
})
