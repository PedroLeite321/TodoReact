import './App.css';
import {Task} from "./task";
import {useState} from "react";

function App() {
  const [newText, setTaskText] = useState("");
  const [todoList, setTodoTask] = useState([]); 

  const task_Text = (event) =>  {
    setTaskText(event.target.value);
  }

  const createTask = () =>  {
    
    let obj = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id+ + 1,
      name: newText,
      completed: false,
      
    };
    setTodoTask([...todoList, obj]);
    
  }
  
  const deleteTask = (args) =>  {
    setTodoTask(todoList.filter((toDelete) => {
      if(toDelete.id === args){
        return false;
      }else {
        return toDelete;
      }
    }));
  }

  const updateTask = (args) =>  {
   
  }
  
  const completedTask = ( args ) => {
    //map function to create a copy with changes in its objects.
    setTodoTask(todoList.map((completedTask) => {
      if(completedTask.id === args) {
        return{...completedTask, completed: true};
      }
      else{
        return(completedTask);
      }
    }))
  }

  const undo_Complete = (args) => {
    setTodoTask(todoList.map((undo) => {
      if(undo.id === args)  {
        return {...undo, completed: false};
      }else{
        return undo;
      }
    }));
  }

  return (
    <main>
     
      <div className="App">
        <input type='text' onChange={task_Text}></input>
        <button onClick={createTask}>Add Item</button>
      </div>
      <div className="App">
          {todoList.map((allTasks) => <Task name={allTasks.name} id={allTasks.id} delete={deleteTask} update={updateTask} undo={undo_Complete} complete={completedTask} completed={allTasks.completed}/>)}
      </div>
    </main>
  );
}

export default App;
