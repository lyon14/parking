import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectListVentaId = createSelector(
    [(store: RootState) => store.venta.ListVenta],
    (ListVenta) => ListVenta
);