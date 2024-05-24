import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    employees: [],
    error: ''
};

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/employees');
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
});

export const addEmployee = createAsyncThunk('employees/addemployee', async (employee) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/employees', employee);
        return response.data;
    }
    catch (error) {
        throw error.response.data;
    }
});

const employeeSlice = createSlice({
    'name': 'employee',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.pending, (state) => {
            state.loading = true
        });

        builder.addCase(fetchEmployees.fulfilled, (state, action) => {
            state.loading = false;
            state.employees = action.payload;
            state.error = '';
        });

        builder.addCase(fetchEmployees.rejected, (state, action) => {
            state.loading = false;
            state.employees = [];
            state.error = action.payload
        });

        builder.addCase(addEmployee.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(addEmployee.fulfilled, (state, action) => {
            state.loading = false;
            state.employees.push(action.payload);
            state.error = '';
        });

        builder.addCase(addEmployee.rejected, (state, action) => {
            state.loading = false;
            state.employees = [];
            state.error = action.payload;
        })
    }
});

export default employeeSlice.reducer;