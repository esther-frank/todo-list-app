import React from 'react'
import './App.css'
import TodoList from './components/todoList/TodoList'
import InputForm from './components/inputForm/InputForm'

export default function App() {
  return (
    <div className="app">
      <InputForm></InputForm>
      <TodoList></TodoList>
    </div>
  )
}
