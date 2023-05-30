//external imports
const express = require("express");


//INTERnal imports
const {getUsers, addUser,removeUser} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/userValidator");

const router = express.Router();

//login page
router.get("/",decorateHtmlResponse("Users"), getUsers);
 

//add user
router.post("/", avatarUpload, addUserValidators , addUserValidationHandler,addUser);

//delete user
router.delete("/:id",removeUser)

module.exports = router;