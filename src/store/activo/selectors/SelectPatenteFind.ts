import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const selectPatenteFind = createSelector(
    [(store: RootState) => store.activo.Activo],
    (activo) => activo
);