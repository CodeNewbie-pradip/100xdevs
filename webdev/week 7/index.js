const express = require('express');
const {UserModel, TodoMode} = require("./db");
const jwt=require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const JWT_SECRET="pradiplabade";

mongoose.connect("");

const app=express();
app.use(express.json());

function auth(req, res, next){
    const token=req.headers.token;

    const decodeData=jwt.verify(token, JWT_SECRET);

    if(decodeData){
        req.userId=decodeData.id;
        next();
    }else{
        res.status(403).json({
            message:"Incorrect credential"
        });
    }
}

app.post('/signup', async function(req, res){
const email=req.body.email;
const password=req.body.password;
const name=req.body.name;

await UserModel.create({
        email:email,
        password:password,
        name:name
    });

    res.json({
        message:'data are inserted'
    });
});

app.post('/signin', async function(req, res){
    const email=req.body.email;
    const password=req.body.password;

    const user=await UserModel.findOne({
        email:email,
        password:password,
    });

    console.log(user);
    if(user){
        const token=jwt.sign({
            id:user._id.toString()
        }, JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:'incorrect credential'
        })
    }
});

app.post("/todo", auth, function(req,res){
    const userId=req.userId;

    res.json({
        userId:userId
    });
});

app.get('/todos', function(req, res){
    const userId=req.userId;

    res.json({
        userId:userId
    })
})

app.listen(3000, ()=>{
    console.log('youre connected port 3000');
})