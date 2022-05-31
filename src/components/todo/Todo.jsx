import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./todo.scss";

const Todo = ({ todoItem, handleDeleteTodo, id }) => {
    console.log(todoItem);
  return <div className="todo">
      <div className="todo_title">
          {todoItem.title}
      </div>
      <div className="todo_icon">
          <div className="todo_icon-checked">
              <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="todo_icon-clear" onClick={() => handleDeleteTodo(id)}>
              <FontAwesomeIcon icon={faXmark} />
          </div>
      </div>
  </div>;
};

export default Todo;
