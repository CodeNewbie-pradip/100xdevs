const express=require('express');
const path=require('path');
const fs=require('fs');
const { title } = require('process');

const app=express();

app.use(express.json());

const filePath=path.join(__dirname, 'todos.json');

//helper function to load todos from file

function loadTodos(){
    if(fs.existsSync(filePath)){
        const data=fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
    return [];
}

function saveTodos(todos){
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

let todos=loadTodos();

// 1.GET/todos -Retrieve all  the items
app.get('/todos', (req, res)=>{
    res.status(200).json(todos);
});

//2. GET /todos/:id- Retrieve a specific todo item by id
app.get('/todos/:id', (req, res)=>{
    const todo=todos.find(t=>t.id===parseInt(req.params.id));
    if(todo){
        res.status(200).json(todo);
    }else{
        res.status(404).json({message:'Todo not found'});
    }
});

//3. POST:/ todos- create a new todo item
app.post('/todos', (req, res)=>{
    const newTodo={
        id:todos.length+1,
        title:req.body.title,
        description:req.body.description
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json({id:newTodo.id});
});

// 4. PUT /todos/:id - Update an existing todo item by ID
app.put('/todos/:id', (req, res)=>{
    const todo=todos.find(t=>t.id===parseInt(req.params.id));

    if(todo){
        todo.title=req.body.title || todo.title;
        todo.description=req.body.description||todo.description;
        saveTodos(todos);
        res.status(200).json(todo);
    }else{
        res.status(404).json({message:"Todo not found"});
    }
});

//5. DELETE /todos/:id- delete a todo item by ID
app.delete('/todos/:id', (req, res)=>{
    const todo=todos.filter(t=>t.id!==parseInt(req.params.id));
    saveTodos(todos);
    res.status(200).send('todo delete sucessfully');
});

app.use((req, res)=>{
    res.status(404).json({message:'Not Found'})
});

app.listen(3000, ()=>{
    console.log(`server is running on port 3000`);
});