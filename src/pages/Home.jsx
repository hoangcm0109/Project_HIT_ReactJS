import React from 'react'
import AddTodo from '../components/add-todo/AddTodo'
import './home.scss'

const Home = () => {
  return (
    <div className='flex items-center justify-center h-full py-10'>
      <div className="modal-todo h-full">
        <header className='modal-todo_heading'>TODO LIST</header>
        <AddTodo />
      </div>
    </div>
  )
}

export default Home