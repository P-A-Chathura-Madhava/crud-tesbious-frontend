import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

export const createUser = createAsyncThunk(
    "user/create-user",
    async(userData, thunkAPI) => {
        try {
            return await userService.createUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = {
    users: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(createUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(createUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.users = action.payload;
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})