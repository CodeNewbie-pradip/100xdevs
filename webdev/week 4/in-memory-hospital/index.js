const express=require('express');
const app=express();

app.use(express.json()); //middle ware it uses the acess the data

//In memory data store
let user={
    kidneys:[
        { id:1, healthy:true },
        { id:2, healthy:true },
        { id:3, healthy:false }
    ]
};

//1. GET-check number kidneys the user has and their health
app.get('/kidneys', (req, res)=>{
    const total=user.kidneys.length;
    const healthyKidneys=user.kidneys.filter(k=>k.healthy).length;
    res.json({
        totalKidneys: total,
        healthyKidneys: healthyKidneys,
        kidneys:user.kidneys
    });
});

//2. POST- add new kidney
app.post('/kidneys', (req, res)=>{
    const {healthy}=req.body;
    const newKidney={
        id:user.kidneys.length>0?user.kidneys[user.kidneys.length-1].id+1 : 1,
        health: healthy !== undefined ? healthy : true
    };
    user.kidneys.push(newKidney);
    res.status(201).json(newKidney);
});

//3. PUT- replace a kidney and make it helathy
app.put('/kidneys/:id', (req, res)=>{
    const kidneyId=parseInt(req.params.id);
    const kidney=user.kidneys.find(k=>k.id===kidneyId);

    if(kidney){
        kidney.healthy=true;
        res.json(kidney);
    }else{
        res.json(404).json({message: 'kidney not found'});
    }
});

//4.DELETE- remove a kidney
app.delete('/kidneys/:id', (req, res)=>{
    const kidneyId=parseInt(req.params.id);
    const index=user.kidneys.findIndex(k=>k.id ===kidneyId);
    if(index===-1){
        return res.status(404).json({message:'kidney not found'});
    }
    const removeKidney=user.kidneys.splice(index, 1)[0];
    res.json(removeKidney);
});

app.listen(3000, ()=>{
    console.log('hospital server is running on port 3000');
});