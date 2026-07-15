import { useState } from "react"

function Todo() {
    const [task, setTask] = useState('');
    const [allTask, setAllTask] = useState([]);



    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task){
            setAllTask([
                ...allTask,
                {tasks : task, completed:false}
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
        <div>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="enter a task"
                    value={task}
                    onChange={(e)=>setTask(e.target.value)} 
                />
                <button type="submit" > Add todo </button>
            </form>
            <ul>
                {allTask.map((single, idx) => (
                    <li key={idx} > 
                        <span style={{ textDecoration : single.completed ? 'line-through' : 'none' }} >
                            {single.tasks} <button onClick={()=> handleDelete(idx)}>delete</button>
                            </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
