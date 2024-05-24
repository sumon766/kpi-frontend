import { configureStore } from "@reduxjs/toolkit";
import sectorReducer from "./actions/sectorSlice";

const store = configureStore({
    reducer: {
        sector: sectorReducer
    }
});

export default store;