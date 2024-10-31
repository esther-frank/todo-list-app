import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export interface TodoItem {
  id: number
  title: string
  complete: boolean
}

interface TodoList {
  items: TodoItem[]
}

const initialState: TodoList = {
  items: [{ id: 1, title: 'first item', complete: false }]
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
