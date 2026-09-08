import TaskItem from "./TaskItem";

function TaskList({tasks, removeTask, toggleTask}) {
    return (
        <>
            <ul>
                {tasks.map((task) => {
                    return <TaskItem 
                        key={task?.id} 
                        task={task} 
                        removeTask={removeTask}
                        toggleTask={toggleTask}
                    />
                })}
            </ul>
        </>
    )
}

export default TaskList;