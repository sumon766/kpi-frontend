import { configureStore } from "@reduxjs/toolkit";
import sectorReducer from "./actions/sectorSlice";
import employeeReducer from "./actions/employeeSlice";
import questionReducer from "./actions/questionSlice";

const store = configureStore({
    reducer: {
        sector: sectorReducer,
        employee: employeeReducer,
        question: questionReducer
    }
});

export default store;