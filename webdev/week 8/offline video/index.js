const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");

//middleware for parsing request bodies
app.use(bodyparser.json());
app.use("/admin", adminRouter);
app.use("/admin", userRouter);

const port=3003;

app.listen(port, ()=>{
    console.log(`server is runnign on port ${port}`)
})
