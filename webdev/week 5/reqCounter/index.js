const express=require('express');
const app=express();

let requestCounter=0;

//middlesware count the request
const countRequest=(req, res, next)=>{
    requestCounter++;
    console.log(`Total request: ${requestCounter}`);
    next();
};

app.use(countRequest);

app.get('/', (req, res)=>{
    res.send('home');
});

app.get('/about', (req, res)=>{
    res.send('about page');
});

app.listen(3000, ()=>{
    console.log('server is runnign on port 3000');
});