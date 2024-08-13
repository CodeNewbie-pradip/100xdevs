const button=document.getElementById('button');
        const count=document.getElementById('count');
        let c=0;

        count.innerText=`button was click ${c} times!`;

        button.addEventListener('click', ()=>{
            c++;
            count.innerText=`button was click ${c} times`;
        });