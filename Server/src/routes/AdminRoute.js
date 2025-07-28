let express = require("express");
let cntrl = require("../controllers/Admin");
let router=express.Router();

router.get("/adminlogin", cntrl.getAdminLoginPage);