import { createAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types/user";
import { createUser } from "./actions/createUser";
import { login } from "./actions/login";
import { logout } from "./actions/logout";

interface UsersState {
    user?: User;
    createStatus: string;
    loginStatus: string;
    logoutStatus: string;
}

const initialState = {
    user: undefined,
    createStatus: "",
    loginStatus: "",
    logoutStatus: "",
} as UsersState;

export const initState = createAction("INIT_STATE");

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initState, (state) => {
                state.createStatus = "";
                state.loginStatus = "";
                state.user = undefined;
                state.logoutStatus = "";
            })
            .addCase(createUser.pending, (state, { payload }) => {
                state.createStatus = "pending";
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.createStatus = "fulfilled";
            })
            .addCase(createUser.rejected, (state, { payload }) => {
                state.createStatus = "rejected";
            })
            .addCase(login.pending, (state, { payload }) => {
                state.loginStatus = "pending";
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload
                state.loginStatus = "fulfilled";
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.loginStatus = "rejected";
            })
            .addCase(logout.pending, (state, { payload }) => {
                state.logoutStatus = "pending";
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.logoutStatus = "fulfilled";
                state.user = undefined;
                state.loginStatus = "";
            });
            
    }
});

export default usersSlice.reducer;