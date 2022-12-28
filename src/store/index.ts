import { configureStore } from '@reduxjs/toolkit'
import  parlamentReducer from "./slice/parlamentSlice"
import  DocCirculationReducer from "./slice/DocCirculationSlice"
import  CommitteesReducer from "./slice/CommitteesSlice"

export const store = configureStore({
  reducer: {
  parlament:parlamentReducer,
  DocCirculation:DocCirculationReducer,
  Committees:CommitteesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch