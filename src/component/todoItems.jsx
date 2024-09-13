import Task from "./task";

const Todoitems = ({ todoWork, deleteTask }) => {
  return (
    <div>
      {todoWork.map((todo) => {
        return (
          <Task
            key={todo.todoTask}
            todoTask={todo.todoTask}
            todoDate={todo.todoDate}
            deleteTask={deleteTask}
          ></Task>
        );
      })}
    </div>
  );
};

export default Todoitems;
