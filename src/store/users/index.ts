import { createAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../@types/user";
import { createUser } from "./actions/createUser";

interface UsersState {
    users: User[];
}

const initialState = {
    users: [],
} as UsersState;

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.users.push(payload);
            });
    }
});

export default usersSlice.reducer;