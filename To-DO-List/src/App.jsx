import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputs, setInputs] = useState('');
  const [tasks , setTasks] = useState([{}]);
  
  const addTask = () =>{
    if(inputs.value.trim() === '') return;
    setTasks([...tasks , {task:inputs , id:crypto.randomUUID()}]);
    setInputs('');
  }
  return (
    <>
      <input type="text" 
        onChange={(e)=>{setInputs(e.target.value);} }
        
      />
      <button onClick={addTask}>add</button>
      {tasks.map(tas=>{
        return(
          <div className="list" key={tas.id}>
            <li>{tas.task}</li>
            <button>delete</button>
          </div>
        )
      })}
    </>
  )
}

export default App
