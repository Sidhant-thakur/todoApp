import { useState } from "react";

function AddTodo({ buttonadded }) {
  const [newtask, setnewtask] = useState("");
  const [newtaskdate, setnewtaskdate] = useState("");

  let newtasktodo = (event) => {
    setnewtask(event.target.value);
  };

  let newdeuDate = (event) => {
    setnewtaskdate(event.target.value);
  };

  let addingtask = () => {
    if (newtask != "" && newtaskdate != "") {
      buttonadded(newtask, newtaskdate);
      setnewtask("");
      setnewtaskdate("");
    }
  };

  return (
    <center>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter your task"
              onChange={newtasktodo}
              value={newtask}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={newdeuDate} value={newtaskdate} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success button"
              onClick={addingtask}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default AddTodo;
