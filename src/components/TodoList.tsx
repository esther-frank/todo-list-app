import React from 'react'

import { useAppSelector } from '../app/hooks'

// import { addTodo } from '../app/todoListSlice'

export default function TodoList() {
  const todoList = useAppSelector(state => state.todoList)
  //   const dispatch = useAppDispatch()

  return (
    <ul>
      {todoList.items.map(todo => (
        <li key={todo.id}>{JSON.stringify(todo)}</li>
      ))}
    </ul>
  )
}
