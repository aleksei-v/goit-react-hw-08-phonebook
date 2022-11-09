import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}
export const register = createAsyncThunk(
    "auth/register",
    async credentials => {
        try {
            const {data} = await axios.post('/users/signup', credentials);
            token.set(data.token)
            return data;
        } catch (error) {
            console.log(error)
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async credentials => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async credentials => {
        try {
            await axios.post('/users/logout', credentials);
            token.unset(); 
        } catch (error) {
            console.log(error)
        }
    }
);

export const refreshCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const PersistedToken = state.auth.token;

        if (PersistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        try {
            token.set(PersistedToken);
            const { data } = await axios.get('/users/current');
             
            return data;
        } catch (error) {
            console.log(error)
        }   
    }
);