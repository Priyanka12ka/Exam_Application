const express = require("express");
const router = express.Router();

const adminRoutes = require("./AdminRoutes");


router.use("/admin", adminRoutes);

module.exports = router;
