import React, { useRef, useState } from "react";
import AddTodo from "../components/add-todo/AddTodo";
import Todo from "../components/todo/Todo";
import "./home.scss";
import {Navigate, useNavigate} from 'react-router-dom'

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

  const navigate = useNavigate()

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const arr = [...listTodo];
      arr.push(todo);
      setListTodo(arr);
      setTodo({
        title: "",
        completed: false,
      });
      elementInput.current.focus();
    }
    // const arr = [...listTodo];
    // arr.push(todo);
    // setListTodo(arr);
    // setTodo({
    //   title: "",
    //   completed: false,
    // });
    // elementInput.current.focus();
  };

  const handleDeleteTodo = (idx) => {
    const arrUpdate = [...listTodo];
    arrUpdate.splice(idx, 1);
    setListTodo(arrUpdate);
  };

  const handleChangeStatusTodo = (id) => {
    const arrUpdate = [...listTodo];
    arrUpdate.length > 0 && arrUpdate.map((item, idx) => {
      if (idx === id) {
        return item.completed =  !item.completed
      }
      return item
    })
    setListTodo(arrUpdate)
  }

  const handleDeleteAllChecked = () => {
    const listUpdateFilter = listTodo.filter(item => item.completed === false)
    setListTodo(listUpdateFilter)
  }

  const handleLogoutSystem = () => {
    localStorage.setItem('isLogin', false)
    const isLogin = localStorage.getItem('isLogin')
    if (isLogin === 'false') {
      localStorage.removeItem('accessToken')
      navigate('/login')
      window.history.replaceState({}, "/");
    }
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
            listTodo.map((item, index) => (
              <Todo
                key={index}
                id={index}
                todoItem={item}
                handleDeleteTodo={handleDeleteTodo}
                handleChangeStatusTodo={handleChangeStatusTodo}
              />
            ))}
        </div>
        <div className="modal-todo_btn">
          <button className="modal-todo_btn-filter">
              Filter Checked
          </button>
          <button className="modal-todo_btn-filter">
              Filter Not Checked
          </button>
          <button className="modal-todo_btn-filter" onClick={handleDeleteAllChecked}>
              Delete All Checked
          </button>
          <button onClick={handleLogoutSystem}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
