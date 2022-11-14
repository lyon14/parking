import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const selectStatusPagoRealizadoPatente = createSelector(
    [(state: RootState) => state.activo.PagoRealizadoPatenteStatus],
    (PagoRealizadoPatenteStatus) => PagoRealizadoPatenteStatus
)