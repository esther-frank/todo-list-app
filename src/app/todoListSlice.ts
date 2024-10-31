import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import TodoList from '../components/todoList/TodoList'

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
    },
    setComplete: (state, action: PayloadAction<number>) => {
      const task = state.items.findIndex(item => item.id === action.payload)
      state.items[task].complete = !state.items[task].complete
    }
  }
})

export const { addTodo, setComplete } = todoSlice.actions

export default todoSlice.reducer
