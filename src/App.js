import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day : 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'School meeting',
        day : 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Shopping',
        day : 'Feb 8th at 2:30pm',
        reminder: false,
    },
  ])

//add tasks
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  // console.log(id)
  // console.log(task)
}


// Toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task))
  }

  //Delete task
  const deleteTask = (id) => {
    // console.log('delete', id)
    // remember immutable
    setTasks( tasks.filter( (task) => task.id !== id ) )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No tasks yet'}
    </div>
  );
}

export default App;
