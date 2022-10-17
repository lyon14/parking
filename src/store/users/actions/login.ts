import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "user/login",
    async (formData: object, { rejectWithValue }) => {
        try {
            let response = await fetch(`${api.baseURL}user/login`, {
                method: "POST",
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw response.statusText;
            }
            let { user } = await response.json();
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);