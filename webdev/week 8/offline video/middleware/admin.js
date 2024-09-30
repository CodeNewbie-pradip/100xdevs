const {Admin}=require("../db");

//middleware for handling auth
function adminMiddleware(req, res, next){
    //implememnt admin auth logic
    //you need to check the head ---and validate the admin from the admin DB.
    //check readme for the exact heaers to be expected
    const username=req.headers.username;
    const password=req.headers.password;

    Admin.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                message:"admin doesn't exist"
            })
        }
    })
}

module.exports=adminMiddleware;