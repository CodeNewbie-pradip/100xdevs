/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor(){
        this.todo_list=[];
    }
    add(todo){
        this.todo_list.push(todo);
    }
    remove(todoIndex){
        this.todo_list.splice(todoIndex, 1);
    }
    update(index, updatedTodo){
        if(this.todo_list.length>index){
            this.todo_list.splice(index, 1, updatedTodo);
        }else{
            return null;
        }
    }
    getAll(){
        return this.todo_list;
    }

    get(index){
        if(this.todo_list.length>index){
            return this.todo_list[index];
        }else{
            return null;
        }
    }

    clear(){
        this.todo_list=[];
    }
}

const obj=new Todo();
obj.add('cook');
obj.add("dinner");
obj.add('sleep');

console.log(`all todos: ${obj.getAll()}`);

module.exports = Todo;