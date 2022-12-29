import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDepnumbers } from '../../models/model'

interface DepNumbersState {
   loading: boolean;
   error:string;
   admission:IDepnumbers[],
   citizenAdmission:IDepnumbers[]
}

const initialState: DepNumbersState = {
    loading: false,
    error:"",
    admission:[],
    citizenAdmission:[]
}

export const depNumberSlice = createSlice({
  name: 'admission',
  initialState,
  reducers: {
    fetching(state){
        state.loading = true;
    },
    fetchSuccess(state,action: PayloadAction<IDepnumbers[]>){
        state.loading = false;
        state.admission = action.payload;
        state.error = ''
    },
    fetchSuccess1(state,action: PayloadAction<IDepnumbers[]>){
      state.loading = false;
      state.citizenAdmission = action.payload;
      state.error = ''
  },
    fetchError(state,action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const {  fetching, fetchSuccess, fetchSuccess1, fetchError } = depNumberSlice.actions


export default depNumberSlice.reducer