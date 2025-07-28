let express=require("express");
const bodyParser=require("body-parser");
let db=require("../db.js");
let router=require("./routes/routes.js");

let app=express();
require("dotenv").config();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/",router);

module.exports=app;
