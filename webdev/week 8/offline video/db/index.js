const { mongoose } = require("mongoose");

//connect to mongoose
mongoose.connect('your mongoose url');

//define schemas
const AdminSchema=new mongoose.Schema({
    //schema definition here
    username:String,
    password:String,
});

const userSchema=new mongoose.Schema({
    //schema definition here
    username:String,
    password:String,
    purchasedCouses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
})

const CourseSchema=new mongoose.Schema({
    //schema defintion here
    title:String,
    description:String,
    imageLink:String,
    price:Number
})

const User=mongoose.model('User', userSchema);
const Admin=mongoose.model('Admin', AdminSchema);
const Course=mongoose.model('Course', CourseSchema);

module.exports=User;
module.exports=Admin;
module.exports=Course;