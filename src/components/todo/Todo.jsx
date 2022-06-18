import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faRotateLeft,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import "./todo.scss";

const Todo = ({
  todoItem,
  handleDeleteTodo,
  id,
  handleChangeStatusTodo,
  handleActiveChangeTodo,
  handleChangeTodo,
  change,
  activeIdTodo
}) => {
  console.log('change', change);
  console.log('activeIdTodo', activeIdTodo);
  console.log('status', activeIdTodo === id);
  return (
    <div className={`todo ${todoItem.completed || todoItem.change ? "todo-active" : ""}`}>
      {/* <div className="todo_title">{todoItem.title}</div> */}
      <input
        type="text"
        className="todo_title"
        readOnly={!todoItem.change}
        value={todoItem.title}
        onChange={(e) => handleChangeTodo(e, id)}
      />
      <div className="todo_icon">
        <div
          className="todo_icon-change"
          onClick={() => handleActiveChangeTodo(id)}
        >
          {!todoItem.change ? (
            <FontAwesomeIcon icon={faPen} />
          ) : (
            <FontAwesomeIcon icon={faRotateLeft} />
          )}
        </div>
        <div
          className="todo_icon-checked"
          onClick={() => handleChangeStatusTodo(id)}
        >
          {todoItem.completed ? (
            <FontAwesomeIcon icon={faRotateLeft} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </div>
        <div className="todo_icon-clear" onClick={() => handleDeleteTodo(id)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
