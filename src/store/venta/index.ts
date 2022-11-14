import { createAction, createSlice } from "@reduxjs/toolkit";
import { listVentaId } from "./actions/listVentaId";

interface VentaState {
    ListVenta?: any[];
    ListVentaStatus: string;
}

const initialState = {
    ListVenta: [],
    ListVentaStatus: "",
} as VentaState;

export const initVentaState = createAction("INIT_VENTA_STATE");

const ventaSlice = createSlice({
    name: "venta",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initVentaState, (state) => {
                state.ListVenta = [];
                state.ListVentaStatus = "";
            })
            .addCase(listVentaId.pending, (state, { payload }) => {
                state.ListVentaStatus = "pending";
            })
            .addCase(listVentaId.fulfilled, (state, { payload }) => {
                state.ListVentaStatus = "fulfilled";
                state.ListVenta = payload;
            })
            .addCase(listVentaId.rejected, (state, { payload }) => {
                state.ListVentaStatus = "rejected";
            });
    }
});

export default ventaSlice.reducer;