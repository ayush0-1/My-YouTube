import { createSlice } from "@reduxjs/toolkit";

const searchKeywordSlice = createSlice({
    name: "search keyword",
    initialState:{
        keyword : ""
    },
    reducers:{
        setKeyword : (state , action)=>{
            state.keyword = ""
            state.keyword=action.payload;
        }
    }
})

export const {setKeyword} = searchKeywordSlice.actions;

export default searchKeywordSlice.reducer;