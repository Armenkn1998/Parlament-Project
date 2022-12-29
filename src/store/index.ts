import { configureStore } from '@reduxjs/toolkit'
import  parlamentReducer from "./slice/parlamentSlice"
import depNumbersReducer from './slice/depNumbersSlice'
import timeTableReducer from "./slice/timeTableSlice"

export const store = configureStore({
  reducer: {
  parlament:parlamentReducer,
  admission:depNumbersReducer,
  telNumbers:timeTableReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch