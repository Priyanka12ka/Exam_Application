const express = require("express");
const AdminController = require("../controllers/Admin.js");

const AdminRouter = express.Router();

AdminRouter.post("/register", AdminController.registerAdmin);

module.exports = AdminRouter;
