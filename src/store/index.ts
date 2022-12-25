import { configureStore } from '@reduxjs/toolkit'
import  parlamentReducer from "./slice/parlamentSlice";
import MpsnumberReducer from "./slice/MpsnumberSlice";
import CommitteReducer from "./slice/CommitteSlice";
import FractionReducer from "./slice/FractionSlice"

export const store = configureStore({
  reducer: {
  parlament:parlamentReducer,
  Mpsnumber: MpsnumberReducer,
  Committe: CommitteReducer,
  Fraction: FractionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch