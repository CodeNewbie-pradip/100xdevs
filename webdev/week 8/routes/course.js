const {Router}=require("express");
const courseRouter=Router();

courseRouter.post("/user/purchases", function(req, res){
        res.json({
            message:"purchases endpoint"
        });
    });
    
    courseRouter.get("/courses", function(req, res){
        res.json({
            message:"signup endpoint"
        });
    });

module.exports={
    courseRouter:courseRouter
}