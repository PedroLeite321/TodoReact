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
      complete: false,
      
    };
    setTodoTask([...todoList, obj]);
    
  }
  
  const deleteTask = () =>  {

  }

  const updateTask = () =>  {

  }
  
  const completedTask = () => {

  }

  const undo_Complete = () => {

  }

  return (
    <main>
     
      <div className="App">
        <input type='text' onChange={task_Text}></input>
        <button onClick={createTask}>Add Item</button>
      </div>
      <div className="App">
          {todoList.map((allTasks) => <Task name={allTasks.name} id={allTasks.id} delete={deleteTask} update={updateTask} undo={undo_Complete} complete={completedTask}/>)}
      </div>
    </main>
  );
}

export default App;
