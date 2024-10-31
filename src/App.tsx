import React from 'react'
import './App.css'
import TodoList from './components/todoList/TodoList'
import InputForm from './components/InputForm'

export default function App() {
  return (
    <div className="app">
      <TodoList></TodoList>
      <InputForm></InputForm>
    </div>
  )
}
