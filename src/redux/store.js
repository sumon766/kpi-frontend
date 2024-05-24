import { configureStore } from "@reduxjs/toolkit";
import sectorReducer from "./actions/sectorSlice";
import employeeReducer from "./actions/employeeSlice";
import questionReducer from "./actions/questionSlice";
import flashMessageReducer from "./actions/flashMessageSlice";

const store = configureStore({
    reducer: {
        sector: sectorReducer,
        employee: employeeReducer,
        question: questionReducer,
        flashMessage: flashMessageReducer
    }
});

export default store;