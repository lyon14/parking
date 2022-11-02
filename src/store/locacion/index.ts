import { createAction, createSlice } from "@reduxjs/toolkit";
import { listLocation } from "./actions/listLocation";
import { Locacion } from "../../@types/locacion";

interface LocacionState {
    ListLocacion?: any[];
    locacionStatus: string;
}

const initialState = {
    ListLocacion: [],
    locacionStatus: "",
} as LocacionState;

export const initLocationState = createAction("INIT_LOCATION_STATE");
const locacionSlice = createSlice({
    name: "locacion",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initLocationState, (state) => {
                state.ListLocacion = [];
                state.locacionStatus = "";
            })
            .addCase(listLocation.pending, (state, { payload }) => {
                state.locacionStatus = "pending";
            })
            .addCase(listLocation.fulfilled, (state, { payload }) => {
                state.locacionStatus = "fulfilled";
                state.ListLocacion = payload;
            })
            .addCase(listLocation.rejected, (state, { payload }) => {
                state.locacionStatus = "rejected";
            });

    }
});

export default locacionSlice.reducer;