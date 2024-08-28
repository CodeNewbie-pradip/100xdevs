const express=require('express');
const fs=require('fs');
const path=require('path');

const app=express();

//1. GET files- Return a list of files present in './files/' directory
app.get('/files', (req, res)=>{
    const directoryPath=path.join(__dirname, 'files');

    fs.readdir(directoryPath, (err, files)=>{
        if(err){
            return res.status(500).json({message: 'unable to scan files!'});
        }
        res.status(200).json(file);
    });
});

//2. GET /file/:filename- returns the content of the given file by name
app.get('/file/:filename', (req, res)=>{
    const filename=req.params.filename;
    const filePath=path.join(__dirname, 'files', filename);

    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){
            if(err.code==='ENOENT'){
                return res.status(404).send('file not found');
            }
            return res.status(500).send('Error reading file');
        }
        res.status(200).send(data);
    });
});

app.use((req, res)=>{
    res.status(404).send('NOT Found');
});

app.listen(3000);