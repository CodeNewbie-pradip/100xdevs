const {User}=require("../db");

function userMiddleware(req, res, next){
    //implement admin auth logic
    //you need to check the headers ad validate the admin fro the admin db
    //check readme for the exact headers to be expected

    const username=req.headers.username;
    const passsword=req.headers.passsword;

    User.findOne({
        username:username,
        passsword:passsword
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.json(403).json({
                message:"User doent exist"
            })
        }
    })
}

module.exports=userMiddleware;