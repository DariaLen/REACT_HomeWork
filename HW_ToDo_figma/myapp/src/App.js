import { useState } from "react";
import "./App.css";
import TasksFoter from "./components/footer/wrapperform_tasksFooter/TasksFoter";
import TasksBoard from "./components/tasksBoard/tasksBoard/TasksBoard";

function App() {

  const [todos, setTodos] = useState([])


  const addTask = (userInput) => {
  if(userInput){
    const newItem = {
      id:Date.now(),
      task:userInput,
      complete: false
    }
    setTodos([...todos, newItem])
}

  }
  
  const removeTask = () => {

  }

  const handleTogggle = () => {

  }

   
  return (
    <div className="wrapper">
      <TasksFoter addTask={addTask}/>

      {todos.map((todo) => {
        return (
          <TasksBoard
          todo={todo}
          key={todo.id}
          toggleTask={handleTogggle}
          removeTask={removeTask}
           />
        )
      })}
   
    </div>
  );
}

export default App;
