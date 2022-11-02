import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import locacion from "./locacion";

const rootReducer = combineReducers({
    // Add your reducers here
    users,
    locacion,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
