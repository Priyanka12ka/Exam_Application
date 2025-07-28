let express = require("express");
let cntrl = require("../controllers/Home");
let router = express.Router();

router.get("/", cntrl.Header);
router.get("/home", cntrl.gethomepage); 
router.get("/about", cntrl.getAboutPage);
router.get("/contact",cntrl.getContactPage);

module.exports = router;
