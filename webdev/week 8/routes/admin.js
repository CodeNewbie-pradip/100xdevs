const {Router}=require("express");
const adminRouter=Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        message:"Signup endpoint"
    });
});

adminRouter.post("/signin", function(req, res){
    res.json({
        message:"Signin endpoint"
    });
});

adminRouter.post("/course", function(req, res){
    res.json({
        message:"Signup endpoint"
    });
});

adminRouter.post("/course", function(req, res){
    res.json({
        message:"Signup endpoint"
    });
});

adminRouter.post("/course/bulk", function(req, res){
    res.json({
        message:"Signup endpoint"
    });
});

module.exports-{
    adminRouter:adminRouter
}

