import { configureStore } from '@reduxjs/toolkit'
import  parlamentReducer from "./slice/parlamentSlice"

export const store = configureStore({
  reducer: {
  parlament:parlamentReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch