import React from 'react'

import { useAppDispatch } from '../app/hooks'

import { addTodo } from '../app/todoListSlice'

export default function InputForm() {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(
      addTodo({ id: Date.now(), title: 'another item', complete: false })
    )
  }

  return <button onClick={handleClick}>Click to add another item</button>
}
