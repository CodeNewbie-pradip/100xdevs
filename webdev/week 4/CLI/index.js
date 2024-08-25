const command=require('commander');
const fs=require('fs');
 
const program=new command.Command();

program
.name('file-related-cli')
.description('A simple CLI to do file based task')
.version('1.0.0');

program
.command('count_words')
.description('count the number of words in a file')
.argument('<file>', 'file to count')
.action((file)=>{
    fs.readFile(file, 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }else{
            let words=0;
            for(let i=0; i<data.length; i++){
                if(data[i]===' '){
                    words++;
                }
            }
            console.log(`there are ${words+1} words in file ${file}`)
        }
    });
});

program
.command('count_sentences')
.description('count the senteses in file')
.argument('<file>', 'file to count')
.action((file)=>{
    fs.readFile(file, 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }else{
            let totalSentence=1;
            for(let i=0; i<data.length; i++){
                if(file[i]==='.' || data[i]==='?' || data[i]==='!'){
                    totalSentence++;
                }
            }
            console.log(`there are ${totalSentence} sentences in a ${file}`);
        }
    });
});
program.parse(process.argv);