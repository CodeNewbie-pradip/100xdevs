const express=require("express");
const adminMiddleware=require("../middleware/admin");
const {Admin, Course}=require("../db")
const router=express.Router();

router.post('/signup', async (req, res)=>{
    //implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    //check if a user with this usernamee alredy exists
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin created succefully"
    })

    // .then(function(){
    //     res.json({
    //         message:"Admin created succefully"
    //     })
    // })
    // .catch(function(){
    //     res.json({
    //         message:"Admin not created"
    //     })
    // })
    
});

router.post("/courses", adminMiddleware, async(req, res)=>{
    //implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    //first we check all inputs are given
    const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message:"course created succesfully", courseId:newCourse._id
    })

});

router.get("/courses", adminMiddleware, async(req, res)=>{
    //implement fettching all courses logic
    const responce=await Course.find({})
    
    res.json({
        courses:responce
    })
})

module.exports=router;