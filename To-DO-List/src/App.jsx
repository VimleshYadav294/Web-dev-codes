import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputs, setInputs] = useState('');
  const [tasks , setTasks] = useState([]);
 
  
  const addTask = () =>{
    if(inputs.trim() === '') return;
    setTasks([...tasks , {task:inputs , id:crypto.randomUUID() , check:false} ]);
    setInputs('');
  };
  
 
  

   const toggle = (id) =>{ 
      setTasks(prevTasks =>{
         return prevTasks.map(task=> task.id === id?{...task, check: !task.check} : task)
      })
  }
  

  const Delete = (id)=>{
      
      setTasks(tasks.filter(task => task.id !==id));
  }
  const handleKeyDown = (event) =>{ 
    if(event.key === 'Enter'){
      addTask();
    }
  }
  return (
    <>
      <input type="text" 
        onChange={(e)=>{setInputs(e.target.value);}}
        value={inputs}
        size={50}
        onKeyDown={handleKeyDown}
        
      />
      <button onClick={addTask} >add</button>
      <div className="tasks"> 
      {tasks.map(tas=>{
        return(
          <div className="list" key={tas.id}>
             <input type="checkbox" checked={tas.check} onChange={()=>{toggle(tas.id)}}/>
            <li style={{textDecoration:tas.check?'line-through':'none'}}>{tas.task}</li>
            <button onClick={() =>{Delete(tas.id)}} className='delete' >delete</button>
            
          
          </div>
        )
        
      })}
      </div>
    </>
  )
}

export default App
