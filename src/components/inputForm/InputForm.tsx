import React, { useState } from 'react'

import { useAppDispatch } from '../../app/hooks'
import { addTodo } from '../../app/todoListSlice'

import './InputForm.css'

export default function InputForm() {
  const [newTask, setNewTask] = useState('')

  const dispatch = useAppDispatch()

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(addTodo({ id: Date.now(), title: newTask, complete: false }))
  }

  return (
    <form onSubmit={handleClick}>
      <div className="form-element">
        <label htmlFor="new-task">What do you need to get done?</label>
        <div className="form-input">
          <input
            id="new-task"
            type="text"
            value={newTask}
            onChange={e => {
              setNewTask(e.target.value)
            }}
          />
          <input id="submit-button" type="submit" value="ADD TASK" />
        </div>
      </div>
    </form>
  )
}
