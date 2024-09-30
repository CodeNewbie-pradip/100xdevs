const {Router}=require("express");
const router=Router();
const userMiddleware=require("../middleware/user");
const {User, Course}=require("../db");
const { route } = require("./admin");

//user Routes
router.post("/signup", async(req, res)=>{
    const username=req.body.username;
    const password=req.body.password;

    await User.create({
        username:username,
        password:password
    })

    res.json({
        message:"user not creted succefully"
    })
})

router.get("/courses", async (req, res)=>{
    //implement listing all courses logic
    const responce=await Course.find({})
    res.json({
        courses:responce
    })
})

router.post('/courses/coursId', userMiddleware, (req, res)=>{
    //implement course puchase logic
    const courseId=req.params.coursId;
    const username=req.headers.username;

    User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    });
    res.json({
        message:"purchase completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res)=>{
//implement fetching purchased courses logic
    const user=await User.findOne({
        username:req.headers.username
    });

    const courses=await Course.find({
        courseId:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
})

module.exports=router;