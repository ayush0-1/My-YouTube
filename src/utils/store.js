import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchslice from "./searchslice";
import chatSlice from "./chatSlice";
import searchKeywordSlice from "./searchKeywordSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchslice,
        chat: chatSlice,
        searchKeyword: searchKeywordSlice
    }

})

export default store;