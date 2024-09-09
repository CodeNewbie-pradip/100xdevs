const express=require('express');
const app=express();

function middleware(req, res, next){
    console.log("method is "+req.method);
    console.log("methos is "+req.url);
    console.log("method is "+req.hostname);
    console.log(new Date());

    next();
}

app.use(middleware);

app.get('/sum', (req, res)=>{
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        sum:a+b
    })
    // if(!isNaN(a) && !isNaN(b)){
    //     const sum=a+b;
    //     res.send(`the sum the${a} and ${b} is ${sum}`);
    // }else{
    //     res.send('please pprovide valid number a and b');
    // }
});

app.listen(3000, ()=>{
    console.log('server is running in port 3000')
});