function Task({ todoTask, todoDate, deleteTask }) {
  let onbuttonclick = () => {
    deleteTask(todoTask);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-4">{todoTask}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger button"
            onClick={onbuttonclick}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Task;
