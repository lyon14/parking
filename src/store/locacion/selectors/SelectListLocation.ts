import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";

export const SelectListLocacion = createSelector(
  [(store: RootState) => store.locacion.ListLocacion],
  (ListLocacion) => ListLocacion
  
);
