//external imports
const bcrypt = require("bcrypt");

//get users page
function getUsers(req,res,next){
    res.render("users");
}

//add user
async function addUser(req,res,next){
    let newUser;
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
}

module.exports = {
    getUsers,
    addUser
}