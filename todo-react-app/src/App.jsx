import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    setTasks(
      [
        {
          id: Date.now(),
          text: text,
          completed: false,
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

  function selectFilter() {
    
  }

  return <>
    <div className='main-container'>
      <TaskForm 
        addTask={addTask}
      />

      <TaskList 
        tasks={tasks} 
        removeTask={removeTask} 
        toggleTask={toggleTask}
      />
    </div>

  </>
}

export default App
