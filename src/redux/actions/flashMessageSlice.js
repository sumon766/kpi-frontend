import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    type: 'info'
};

const flashMessageSlice = createSlice({
    name: 'flashMessage',
    initialState,
    reducers: {
        setFlashMessage: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        clearFlashMessage: (state) => {
            state.message = '';
            state.type = 'info';
        }
    }
});

export const { setFlashMessage, clearFlashMessage } = flashMessageSlice.actions;
export default flashMessageSlice.reducer;
