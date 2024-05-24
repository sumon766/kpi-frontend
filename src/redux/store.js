import { configureStore } from "@reduxjs/toolkit";
import sectorReducer from "./actions/sectorSlice";
import employeeReducer from "./actions/employeeSlice";

const store = configureStore({
    reducer: {
        sector: sectorReducer,
        employee: employeeReducer
    }
});

export default store;