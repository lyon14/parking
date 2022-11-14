import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const selectPatenteAuthenticated = createSelector(
    [(state: RootState) => state.activo.Activo],
    (activo) => !!activo
)