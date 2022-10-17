import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../../@types/user";

export const createUser = createAsyncThunk(
    "user/createUser",
    async (user: User, { rejectWithValue }) => {
        try {
            let response = await fetch(`${api.baseURL}user/signup`, {
                method: "POST",
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                throw response.statusText;
            }
            let data: User = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
