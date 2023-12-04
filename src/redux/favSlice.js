import { faV } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const favSilce=createSlice({
    name:'favourates',
    initialState:[],
    reducers:{
        addfav:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addfav}=favSilce.actions
export default favSilce.reducer