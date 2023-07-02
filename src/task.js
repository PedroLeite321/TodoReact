
const Task = (task) =>  {

    return(
        <div style={{backgroundColor: task.completed ? "green" : "white"}} className="App">
            <h1>{task.name}</h1> 
            <button onClick={task.complete(task.id)}>complete</button>
            <button onClick={task.delete(task.id)}>Delete</button>
            <button onClick={task.undo(task.id)}>undo</button>
            <button onClick={task.update(task.id)}>update</button>
        </div>
    );

}

export {Task};