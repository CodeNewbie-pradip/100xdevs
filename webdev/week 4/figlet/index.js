const figlet=require('figlet');

const args=process.argv.splice(2);

if(args.length>0){
    figlet(args, (err, data)=>{
        if(err){
            console.log("something went wrong....");
            console.dir(err);
            return;
        }
        console.log(data);
    });
}else{
    console.log("please provide name");
}