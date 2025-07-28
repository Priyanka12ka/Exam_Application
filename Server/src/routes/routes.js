const express = require("express");
const router = express.Router();
const AdminRouter = require("./AdminRoutes");

router.use("/admin", AdminRouter); // your base route

module.exports = router;
