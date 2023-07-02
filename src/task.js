
const Task = (task) =>  {

    return(
        <div style={{backgroundColor : task.completed === true? "green" : "red"}}  className="App">
            <h1>{task.name}</h1> 
            <button onClick={() => task.complete(task.id)}>Complete</button>
            <button onClick={() => task.delete(task.id)}>Delete</button>
            <button onClick={() => task.undo(task.id)}>Undo</button>
            <button onClick={() => task.update(task.id)}>Update</button>
           
        </div>
    );

}

export {Task};