import { useState } from 'react'
import Todo from './Todo'
import Footer from './Footer'
import Done from './Done'
function App() {
  const [tasks, setTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])
  const [NewTask, setNewTask] = useState('')
  function addTask(){
    if (NewTask.trim() !== '') {
      setTasks([...tasks, NewTask.trim()]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }
  
function markAsDone(task){
  const updatedTasks = [...tasks]
  const updatedDoneTasks = [...doneTasks, task]
  updatedTasks.splice(updatedTasks.indexOf(task), 1)
  setTasks(updatedTasks)
  setDoneTasks(updatedDoneTasks)
}



return (
 <>
<div className='flex flex-col items-center gap-4 justify-center'>
        <h1 className='font-graduate mt-32 text-[#9E78CF] text-2xl'>To-do List </h1>
        <div className='flex gap-1'>
            <input type="text" name="todo" id="todo"
            placeholder="Add a New Task" 
            className='border border-[#9E78CF] bg-[#0D0714] rounded-lg focus:outline-none p-3
             placeholder:text-[#777777] text-[#9E78CF] h-10 w-[381px]'
             onChange={(e)=> setNewTask(e.target.value)} 
             value={NewTask}
              />
              <button type="submit" className='text-[#FFFFFF] w-10 h-10 p-2 rounded-md bg-[#9E78CF]'
              onClick={addTask}>
                +
              </button>


        </div>
    </div>
    {tasks.length > 0 && (
        <div className='mt-10 flex flex-col items-center gap-1 justify-center'>
          {tasks.map((task, index) => (
            <Todo key={index} task={task} onDelete = {()=> deleteTask(index)} onDone = {()=> markAsDone(task)}/>
          ))}
        </div>
      )}

      {doneTasks.length > 0 &&(
        
        <div className='mt-10 flex flex-col items-center gap-1 justify-center'>
         <p className='font-graduate text-xl '>Done</p> 

          {doneTasks.map((task, index) => (
            <Done done = {task} key ={index} />
          ))
        }
        </div>
      )}

    <Footer />
 </>
)
}

export default App
