import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
  });

  const [filter, setFilter] = useState("all");

  let filteredTasks = tasks;

  if (filter === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  }

  if (filter === "active") {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  function addTask(text) {
    setTasks(
      [
        {
          id: Date.now(),
          text: text,
          completed: false,
          timeStamp: Date.now(),
        },

        ...tasks,
      ]
    )
  }

  function removeTask(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    )
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }

        return task;
      }) 
    )
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return <>
    <div className='main-container'>
      <TaskForm 
        addTask={addTask}
        filter={filter}
        onFilterChange={setFilter}
      />

      <TaskList 
        tasks={filteredTasks} 
        removeTask={removeTask} 
        toggleTask={toggleTask}
      />
    </div>

  </>
}

export default App
