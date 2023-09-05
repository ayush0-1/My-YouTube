import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"app",
    initialState: {
        isMenueOpen:true,
    },
    reducers:{
        toggleMenue : (state)=>{
            state.isMenueOpen= !state.isMenueOpen;
        },
        closeSideBar:(state)=>{
            state.isMenueOpen = false;
        }
    }
})

export const {toggleMenue , closeSideBar} = appSlice.actions;

export default appSlice.reducer;