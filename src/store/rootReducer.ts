import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import locacion from "./locacion";
import venta from "./venta";
import activo from "./activo";

const rootReducer = combineReducers({
    // Add your reducers here
    users,
    locacion,
    venta,
    activo,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
