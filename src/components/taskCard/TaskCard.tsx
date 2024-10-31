import React from 'react'
import './TaskCard.css'

interface TodoItem {
  id: number
  title: string
  complete: boolean
}

export default function TaskCard({ id, title, complete = false }: TodoItem) {
  return (
    <div className="task-card" id={`${id}`}>
      <input type="checkbox" checked={complete} />
      <p>{title}</p>
    </div>
  )
}
