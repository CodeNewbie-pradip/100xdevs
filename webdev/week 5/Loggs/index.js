const express=require('express');
const app=express();

const requestLogger=(req, res, next)=>{
    const method=req.method;
    const url=req.url;
    const timeStamp=new Date().toISOString(); //current timestamp

    console.log(`[${timeStamp} ${method} request to ${url}`);

    next();
};

app.use(requestLogger);
app.get('/', (req, res)=>{
    res.send('home Page');
});

app.get('/about', (req, res)=>{
    res.send('About Page');
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})