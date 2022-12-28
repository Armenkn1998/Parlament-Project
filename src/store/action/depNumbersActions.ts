import { Dispatch } from "@reduxjs/toolkit";
import axios from "../../axios";
import {  fetching, fetchSuccess, fetchError, fetchSuccess1 } from "../slice/depNumbersSlice";

export const fetchDepNum = () => {
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(fetching());
            const response =await axios.get('depnum');
            dispatch(fetchSuccess(response.data[0].admission));
            dispatch(fetchSuccess1(response.data[0].citizenAdmission));
        }
        catch(error){
            dispatch(fetchError(error as Error));
        }

    }
}