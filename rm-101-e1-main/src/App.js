import React from "react";


import { AddTask } from "./components/AddTask";
import { Counter } from "./components/Counter";
import Task from "./components/Task/Task";
import TaskApp from "./components/TaskApp";
import TaskHeader from "./components/TaskHeader/TaskHeader";
function App() {
  return <div>


   <AddTask/>
   <Counter/>
   <Task/>
   <TaskHeader/>
   <TaskApp/>

  </div>;
}

export default App;
