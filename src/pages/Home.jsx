import React, { useRef, useState } from "react";
import AddTodo from "../components/add-todo/AddTodo";
import Todo from "../components/todo/Todo";
import "./home.scss";

const arrTodo = [
  {
    title: "HIT CLUB 2022",
    completed: false,
  },
  {
    title: "HIT PRODUCT",
    completed: false,
  },
  {
    title: "HIT GAME",
    completed: true,
  },
];

const Home = () => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });
  const [listTodo, setListTodo] = useState([]);
  const elementInput = useRef(null);

  const handleAddTodo = () => {
    const arr = [...listTodo];
    arr.push(todo);
    setListTodo(arr);
    setTodo({
      title: "",
      completed: false,
    });
    elementInput.current.focus()
  };

  const handleDeleteTodo = (idx) => {
    const arrUpdate = [...listTodo]
    arrUpdate.splice(idx, 1)
    setListTodo(arrUpdate)
  }

  return (
    <div className="flex items-center justify-center h-full py-10">
      <div className="modal-todo h-full">
        <header className="modal-todo_heading">TODO LIST</header>
        <AddTodo
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
          elementInput={elementInput}
        />
        <div className="modal-todo_list">
          {listTodo.length > 0 &&
            listTodo.map((item, index) => <Todo key={index} id={index} todoItem={item} handleDeleteTodo={handleDeleteTodo} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
