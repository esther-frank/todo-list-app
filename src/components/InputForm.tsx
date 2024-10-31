import React, { useState } from 'react'

import { useAppDispatch } from '../app/hooks'

import { addTodo } from '../app/todoListSlice'

export default function InputForm() {
  const [newTask, setNewTask] = useState('')

  const dispatch = useAppDispatch()

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(addTodo({ id: Date.now(), title: newTask, complete: false }))
  }

  return (
    <form onSubmit={handleClick}>
      <label htmlFor="new-task">What do you need to get done?</label>
      <input
        id="new-task"
        type="text"
        value={newTask}
        onChange={e => {
          setNewTask(e.target.value)
        }}
      />
      <input type="submit" value="ADD TASK" />
    </form>
  )
}
