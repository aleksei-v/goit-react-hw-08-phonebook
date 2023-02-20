import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, refreshCurrentUser } from "./auth-operations";
const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};
const initialState = {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [register.rejected]: handleRejected,
        [login.pending]: handlePending,
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [login.rejected]: handleRejected,
        [logOut.pending]: handlePending,
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = null;
            state.isLoading = false;
        },
        [logOut.rejected]: handleRejected,
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true; 
            state.isRefreshing = false;
        },
        [refreshCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    }
});


export default authSlice.reducer;