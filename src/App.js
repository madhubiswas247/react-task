import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
const [count,setCount] = useState(0);
const [names,setNames] = useState(['Jaya','Sushma','Nirma']);
const [tasks,setTasks] = useState(['Task 1','Task 2','Task 3']);

console.log("count",count);
  return (
    <div>
      List Of Tasks : {tasks.length}
       <div role="mapping1">
        {
          tasks.map((task,index) =>
            <div>{task} <button onClick={() => setTasks((prevState,props) => 
              {
                const updatedTask =  [...prevState]
                updatedTask.splice(index,1)
                 return updatedTask;
              }
              )}>Done</button></div> 
          )
        }
       </div>

    </div>    
  );
}

export default App;
