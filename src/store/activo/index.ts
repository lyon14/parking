import { createAction, createSlice } from "@reduxjs/toolkit";
import { Activo } from "../../@types/activo";
import { ActivoFindPatente } from "./actions/ActivoFindPatente";
import { ActivoPagoRealizadoPatente } from "./actions/ActivoPagoRealizadoPatente";

interface ActivoState {
    Activo?: Activo;
    FindPatenteStatus: string;
    PagoRealizadoPatenteStatus: string;
}

const initialState = {
    Activo: undefined,
    FindPatenteStatus: "",
    PagoRealizadoPatenteStatus: "",
} as ActivoState;

export const initActivoState = createAction("INIT_ACTIVO_STATE");

const activoSlice = createSlice({
    name: "activo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initActivoState, (state) => {
                state.Activo = undefined;
                state.FindPatenteStatus = "";
                state.PagoRealizadoPatenteStatus = "";
            })
            .addCase(ActivoFindPatente.pending, (state, { payload }) => {
                state.FindPatenteStatus = "pending";
            })
            .addCase(ActivoFindPatente.fulfilled, (state, { payload }) => {
                state.Activo = payload;
                state.FindPatenteStatus = "fulfilled";
            })
            .addCase(ActivoFindPatente.rejected, (state, { payload }) => {
                state.FindPatenteStatus = "rejected";
            })
            .addCase(ActivoPagoRealizadoPatente.pending, (state, { payload }) => {
                state.PagoRealizadoPatenteStatus = "pending";
            })
            .addCase(ActivoPagoRealizadoPatente.fulfilled, (state, { payload }) => {
                state.PagoRealizadoPatenteStatus = "fulfilled";
            })
            .addCase(ActivoPagoRealizadoPatente.rejected, (state, { payload }) => {
                state.PagoRealizadoPatenteStatus = "rejected";
            });

    }
});

export default activoSlice.reducer;