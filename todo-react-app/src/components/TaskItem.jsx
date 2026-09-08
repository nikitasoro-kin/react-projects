
function TaskItem({task, removeTask, toggleTask}) {

    return (
        <>
            <li className={task.completed ? "task completed" : "task"}>
                {task.text}

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