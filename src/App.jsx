import Heading from "./component/Heading";
import AddTodo from "./component/Input-data";
import Todoitems from "./component/todoItems";

import "./App.css";
import { useState } from "react";

function App() {
  let todoWork = [
    { todoTask: "Buy Milk", todoDate: "23/05/2024" },
    { todoTask: "go to gym", todoDate: "23/05/2024" },
  ];

  const [addtask, setAddtask] = useState(todoWork);

  let buttonadded = (worktodo, datetodo) => {
    console.log(`task : ${worktodo} and Date : ${datetodo}`);
    setAddtask([...addtask, { todoTask: worktodo, todoDate: datetodo }]);
  };

  let deleteTask = (deletetodo) => {
    console.log(deletetodo);
    let afterdeleteitems = addtask.filter((val) => {
      if (val.todoTask !== deletetodo) return val;
    });
    setAddtask(afterdeleteitems);
  };
  return (
    <center className="todo-container">
      <Heading />
      <AddTodo buttonadded={buttonadded}></AddTodo>
      <Todoitems todoWork={addtask} deleteTask={deleteTask}></Todoitems>
    </center>
  );
}

export default App;
