import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const selectIsAuthenticated = createSelector(
    [(store: RootState) => store.users.user],
    (data) => !!data
);