require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");

const app=express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

createUserRoutes(app);
createCourseRoutes(app);



app.listen(3000);