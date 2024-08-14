const fs=require('fs');

//fuction to clean the file content
function cleanFileContent(filePath){
    //step 1-read the file
    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){
            console.error("Error reading the file: ", err);
            return;
        }

        //step 2 - remove extra spaces and trim the string
        const cleanedContent=data.replace(/\s+/g, ' ').trim();

        //step 3 -write the cleaned data back to the same file
        fs.writeFile(filePath, cleanedContent, "utf-8", (err)=>{
            if(err){
                console.error("error writing to the file");
                return;
            }
            console.log('write data sucessfully!');
        });
    });
}

const filePath='abc.txt';
cleanFileContent(filePath);