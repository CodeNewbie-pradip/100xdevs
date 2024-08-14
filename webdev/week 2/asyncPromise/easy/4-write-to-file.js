const fs=require("fs");

const content="this is some content that will be written to the file";
 //writing file asynchronously
fs.writeFile("xyz.txt", content, "utf-8", (err)=>{
    if(err){
        console.log("Error writing to the file");
        return;
    }
    console.log("file has been written sucessfully!");
});

//rest of code execute immediately without waiting for the file write to complete;
console.log('this message is logged before the file write operation completes')

//writing file synchronously
// try{
//     fs.writeFileSync("xtyz.txt", content, "utf-8");
//     console.log("file has been written sucessfully");
// }catch(err){
//     console.log("error writting to file", err);
// }
// //when file writation is complete then other code executing starting
// console.log("this message logged after the file write operation complete");