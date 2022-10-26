import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const selectUser = createSelector(
  [(store: RootState) => store.users.user],
  (user) => user
);
