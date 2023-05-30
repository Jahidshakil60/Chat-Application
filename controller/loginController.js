function getLogin(req,res,next){
    res.render("index");
}

//do login
async function login(req,res,next){
    try {
        //find a user who has this email/username
        const user = await User.findOne({
            $or: [{email: req.body.username}, {mobile: req.body.username}]
        })
    } catch (error) {
        
    }
}

module.exports = {
    getLogin,
}