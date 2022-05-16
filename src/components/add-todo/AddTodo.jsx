import React from "react";
import "./add-todo.scss";

const AddTodo = () => {
  return (
    <div className="add-todo">
      <div className="add-todo_input">
        <input type="text" placeholder="Add a task here..." />
      </div>
      <div className="add-todo_btn">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default AddTodo;
