import api from "../../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const ActivoPagoRealizadoPatente = createAsyncThunk(
    "activo/ActivoPagoRealizadoPatente",
    async (formData: object, { rejectWithValue }) => {
        try {
            let response = await fetch(`${api.baseURL}activo/pagoRealizado`, {
                method: "POST",
                body: JSON.stringify(formData),
            });
            let activo = await response.json();
            return activo;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);