var express =require("express");
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
var router=require("./controller/router.js");
app.set("view engine","ejs");
app.use(express.static("./public"));
app.get("/",router.showIndex); 
app.get("/find",router.doFind); 
app.post("/login",router.dologin);
app.post("/regist",router.doregist);
app.listen(3030);