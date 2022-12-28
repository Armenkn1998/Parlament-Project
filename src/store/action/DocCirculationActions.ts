import { Dispatch } from "@reduxjs/toolkit";
import axios from "../../axios";
import {  fetching_1, fetchSuccess_1, fetchSuccess_11, fetchSuccess_12, fetchError_1 } from "../slice/DocCirculationSlice";

export const fetchDocCirculation = ()=>{
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(fetching_1());
            const response =await axios.get('DocCirculation');
            
            dispatch(fetchSuccess_1(response.data[0].DocCirculation_1));
            dispatch(fetchSuccess_11(response.data[0].DocCirculation_2));
            dispatch(fetchSuccess_12(response.data[0].DocCirculation_3));
        }
        catch(error){
            dispatch(fetchError_1(error as Error));
        }

    }
}