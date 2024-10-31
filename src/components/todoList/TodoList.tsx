import React from 'react'
import './TodoList.css'

import { useAppSelector } from '../../app/hooks'
import TaskCard from '../taskCard/TaskCard'

export default function TodoList() {
  const todoList = useAppSelector(state => state.todoList)

  return (
    <div className="todo-list">
      {todoList.items.map(todo => (
        <TaskCard key={todo.id} {...todo}></TaskCard>
      ))}
    </div>
  )
}
