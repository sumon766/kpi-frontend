import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    sectors: [],
    error: '',
    successMessage: ''
};

export const fetchSectors = createAsyncThunk('sectors/fetchSectors', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/sectors');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const addSector = createAsyncThunk('sectors/addSector', async (sector) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/sectors', sector);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const sectorSlice = createSlice({
    name: 'sector',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSectors.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchSectors.fulfilled, (state, action) => {
            state.loading = false;
            state.sectors = action.payload;
            state.error = '';
        });
        builder.addCase(fetchSectors.rejected, (state, action) => {
            state.loading = false;
            state.sectors = [];
            state.error = action.payload;
        });
        builder.addCase(addSector.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addSector.fulfilled, (state, action) => {
            state.loading = false;
            state.sectors.push(action.payload);
            state.successMessage = 'Sector added successfully!';
            state.error = '';
        });
        builder.addCase(addSector.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.successMessage = '';
        });
    }
});

export default sectorSlice.reducer;
