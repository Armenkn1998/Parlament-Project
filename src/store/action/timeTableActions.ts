import { Dispatch } from "@reduxjs/toolkit";
import axios from "../../axios";
import {  fetching, fetchSuccess, fetchError, fetchSuccess1 } from "../slice/timeTableSlice";

export const fetchTimeTable = () => {
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(fetching());
            const response =await axios.get('telNumbers');
            dispatch(fetchSuccess(response.data[0].admission));
            dispatch(fetchSuccess1(response.data[0].citizenAdmission));
        }
        catch(error){
            dispatch(fetchError(error as Error));
        }

    }
}