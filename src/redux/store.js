import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice";

const store=configureStore({
    reducer:{
favReducer:favSlice

    }
    
})
export default store;