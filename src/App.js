
import { useEffect, useState } from 'react'
import Header from  "./component/Header";
import Tasks from "./component/Tasks"
import AddTask from './component/AddTask'; 

const TASK_KEY = 'tasks'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem(TASK_KEY);
  return saved ? JSON.parse(saved) : [
{
    id: 1,
    text: 'Doctor Appointment',
    day: 'feb 5th at 2:30pm',
    reminder: true,
    // status: 'in Progress'

},
{
    id: 2,
    text: 'Meeting at school',
    day: 'feb 5th at 2:30pm',
    reminder: true,
    //  status: 'in Progress'
},
{
    id: 3,
    text: 'Food shopping',
    day: 'feb 5th at 2:30pm',
    reminder: false,
    // status: 'Completed'
},

];
});

useEffect(() => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}, [tasks]);


  // Add tasks

  const addTask = (task ) => {
const id = Math.floor(Math.random() * 10000) + 1
const newTask = {id, ...task }
setTasks([...tasks, newTask])
  }

  // delete tasks

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => (task.id !== id)))
}

// Toggle Reminder
const toggleReminder = (id) => {
setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder:
     !task.reminder} : task))
}

const handleUpdate = (id, updateTask) => {
  setTasks(tasks.map(task => task.id === id ? updateTask : task));
  console.log(tasks)
};

  return (
    <div className="container">
   
    <Header onAdd={() => setShowAddTask
      (!showAddTask)} showAdd={showAddTask} title={ 'Task Tracker'}  />
      {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ? 
   <Tasks tasks={tasks}
    onDelete={deleteTask} 
   onToggle={toggleReminder}
   onUpdate={handleUpdate}
   /> : 'No Tasks To Show'}
   
 
    </div>
  );
}

export default App