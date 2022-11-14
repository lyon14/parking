import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listVentaId = createAsyncThunk(
    "venta/listVentaId",
    async (id: any, { rejectWithValue }) => {
        try {
            const result = await fetch(`${api.baseURL}venta/list/${id}`,{
                method: "GET"
            });
            const data = await result.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)