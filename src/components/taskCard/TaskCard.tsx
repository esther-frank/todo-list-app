import React from 'react'
import './TaskCard.css'

import { useAppDispatch } from '../../app/hooks'

import { setComplete } from '../../app/todoListSlice'

interface TodoItem {
  id: number
  title: string
  complete: boolean
}

export default function TaskCard({ id, title, complete }: TodoItem) {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(setComplete(id))
  }

  return (
    <div className="task-card" id={`${id}`}>
      <input type="checkbox" checked={complete} onChange={handleChange} />
      <p>{title}</p>
    </div>
  )
}
