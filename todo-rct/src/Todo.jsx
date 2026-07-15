import { useState } from "react";
import "./Todo.css"; 

function Todo() {
    const [task, setTask] = useState('');
    const [allTask, setAllTask] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) { 
            setAllTask([
                ...allTask,
                { tasks: task, completed: false }
            ]);
            setTask('');
        }
    }

    const handleDelete = (idx) => {
        const allLists = [...allTask];
        allLists[idx].completed = !allLists[idx].completed;
        setAllTask(allLists);
    }

    return (

        <div className="todo-container">
            <h1>Todo App</h1>
            

            <form onSubmit={handleSubmit} className="todo-form">
                <input 
                    type="text"
                    placeholder="enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)} 
                    className="todo-input" 
                />
                <button type="submit" className="todo-add-btn"> Add todo </button>
            </form>

     
            <ul className="todo-list">
                {allTask.map((single, idx) => (

                    <li key={idx} className="todo-item"> 
                        <div className="todo-text-container">
                            <span 
                                className="todo-text"
                                style={{ 
                                    textDecoration: single.completed ? 'line-through' : 'none',
                                    color: single.completed ? '#94a3b8' : '#334155'
                                }} 
                            >
                                {single.tasks} 
                            </span>
                            

                            <button onClick={() => handleDelete(idx)} className="todo-delete-btn">
                                {single.completed ? 'Undo' : 'Complete'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;