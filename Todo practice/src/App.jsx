import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  const taskRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    const { current } = taskRef;
    setTasks([current.value, ...tasks]);
  };
  return(
     <div>
        <div>Home</div>
        <input ref={taskRef} type="text" placeholder="Enter text" />
        <button onClick={handleSubmit}>Add Task</button>
        {tasks.length > 0?
          tasks.map((task, index) => (
            <div key={index}>{task}</div>
          )):(
            <p>No Tasks Available</p>
          )
        }
     </div>
     );
}

export default App;
