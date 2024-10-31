import React from 'react'

import { useAppSelector } from '../app/hooks'

export default function TodoList() {
  const todoList = useAppSelector(state => state.todoList)

  return (
    <ul>
      {todoList.items.map(todo => (
        <li key={todo.id}>{JSON.stringify(todo)}</li>
      ))}
    </ul>
  )
}
