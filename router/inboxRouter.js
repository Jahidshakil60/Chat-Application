//external imports
const express = require("express");

//INTERnal imports
const {getInbox} = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

//inbox page
router.get("/",decorateHtmlResponse("Inbox"),checkLogin, getInbox);

module.exports = router;