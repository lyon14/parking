import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listLocation = createAsyncThunk(
    "locacion/listLocation",
    async (data, { rejectWithValue }) => {
        try {
            const result = await fetch(`${api.baseURL}locacion/list`,{
                method: "POST"
            });
            const data = await result.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)