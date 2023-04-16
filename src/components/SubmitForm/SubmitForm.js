import React from 'react';
import { useState } from 'react';
import './SubmitForm.css';

function SubmitForm() {

    const [tasks, setTasks] = useState([]);

    function addTask (event) {
        event.preventDefault();
        const task = document.getElementById("new-task").value;
        setTasks([...tasks, task]);
        document.getElementById("new-task").value = "";
    }
  
    function removeTask (index, event) {
        event.preventDefault();
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }
  return (
    
        <div className="todo">
            <div className="headAdd">
                <h1>Lexicon's ToDo App</h1>
                <div className="add-task">
                    <input className='input' id="new-task" placeholder='Add Task' />
                    <button className='add-button' type='submit' onClick={addTask}>Add</button>
                </div>
            </div>
            <div className="tasks">
                <ul>
                    {tasks.map((task, index) => (
                    <li key={index} className="task">
                        {task}
                    <button className="delete-button" onClick={() => removeTask(index)}>Done</button>
                    </li>
                ))}
                </ul>
            </div>
        </div>
   
  )
}

export default SubmitForm