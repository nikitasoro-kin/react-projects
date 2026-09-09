
function TaskItem({task, removeTask, toggleTask}) {

    return (
        <>
            <li className={task.completed ? "task completed" : "task"}>
                <span>
                    {task.text}
                </span>

                <span className="task-date">
                    {(new Date(task.timeStamp)).toLocaleString()}
                </span>

                <input 
                    type="checkbox" 
                    name="completed" 
                    id="completed" 
                    onChange={() => toggleTask(task.id)}
                />

                <button onClick={() => removeTask(task.id)}>X</button>
            </li>

        </>
    )
}

export default TaskItem