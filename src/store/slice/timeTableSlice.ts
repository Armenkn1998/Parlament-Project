import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITime } from '../../models/model'

interface TimeTableState {
   loading: boolean;
   error:string;
   telNumbers:ITime[]
}

const initialState: TimeTableState = {
    loading: false,
    error:"",
    telNumbers:[]
}

export const timeTableSlice = createSlice({
  name: 'telNumbers',
  initialState,
  reducers: {
    fetching(state){
        state.loading = true;
    },
    fetchSuccess(state,action: PayloadAction<ITime[]>){
        state.loading = false;
        state.telNumbers = action.payload;
        state.error = ''
    },
    fetchError(state,action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const {  fetching, fetchSuccess, fetchError } = timeTableSlice.actions


export default timeTableSlice.reducer