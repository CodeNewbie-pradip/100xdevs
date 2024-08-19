const libox=document.querySelector('#libox');
//const libox=document.getElementById('.libox');
const inp=document.querySelector('input');
let index=1;

const addTodo=()=>{
    const newli=document.createElement('li');
    newli.setAttribute("id", 'todo-'+index)

    if(inp.value===''){
        return;
    }else{
        newli.innerHTML=`
        ${inp.value}<span>
        <button id="editbtn" onclick="editTodo(${index})">Edit</button>
        <button id="deletebtn" onclick="deleteTodo(${index})">Delete</button>
        </span>
        `;
        libox.appendChild(newli);
    }
    index++;
    inp.value='';
    console.log('add');
};

const editTodo=(index)=>{
    const li=document.querySelector(`#todo-${index}`);
    const currentText=li.childNodes[0].textContent.trim();
    const newText=prompt("Edit your todo: ", currentText);

    if(newText!==null && newText!==''){
        li.childNodes[0].textContent=newText;
    }

};

const deleteTodo=(index)=>{
    const li=document.querySelector(`#todo-${index}`);
    if(li){
        li.parentNode.removeChild(li);
    }
};