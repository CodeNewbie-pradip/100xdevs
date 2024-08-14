const inc=document.getElementById('inc');
const dec=document.getElementById('dec');
const cnt=document.getElementById('cnt');
let counter =0;

cnt.innerText=counter;

inc.addEventListener('click', ()=>{
    counter++;
    cnt.innerText=counter;
});

dec.addEventListener('click', ()=>{
    counter--;
    cnt.innerText=counter;
});