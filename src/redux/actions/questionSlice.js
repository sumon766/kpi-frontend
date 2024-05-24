import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    questions: [],
    error: '',
    successMessage: ''
};

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/questions');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const addQuestion = createAsyncThunk('questions/addQuestion', async (question) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/questions', question);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const questionSlice = createSlice({
    name: 'question',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.loading = false;
            state.questions = action.payload;
            state.error = '';
        });
        builder.addCase(fetchQuestions.rejected, (state, action) => {
            state.loading = false;
            state.questions = [];
            state.error = action.payload;
        });
        builder.addCase(addQuestion.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addQuestion.fulfilled, (state, action) => {
            state.loading = false;
            state.questions.push(action.payload);
            state.successMessage = 'Question added successfully!';
            state.error = '';
        });
        builder.addCase(addQuestion.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.successMessage = '';
        });
    }
});

export default questionSlice.reducer;
