const express = require("express");
const AdminController = require("../controllers/Admin/Admin.js");
const router = express.Router();

router.post("/register", AdminController.registerAdminn);
router.post("/login", AdminController.adminLogin);

module.exports = router;
