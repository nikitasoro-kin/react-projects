import { useState } from "react";

function TaskForm({addTask, filter, onFilterChange}) {
    const [text, setText] = useState("");

    function handleAddTask() {
        if (text) {
            addTask(text);
        }
        setText("");
    }

    return (
        <div className="form-container">
            <input
                    type="text"
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Введите задачу"
            />

            <button onClick={handleAddTask}>Добавить</button>

            <select 
                name="filter" 
                id="filter"
                value={filter}
                onChange={e => onFilterChange(e.target.value)}
            >
                <option value="all">Все</option>
                <option value="completed">Выполненные</option>
                <option value="active">Невыполненные</option>
            </select>
        </div>
    )
}

export default TaskForm;