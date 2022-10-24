import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";
import { listPages } from "../../../utils/listPages";

export const selectListPages = createSelector(
    [(store: RootState) => store.users.user],
    (user) => {
        if(!user) {
            return [];
        }

        const filtered = listPages.filter(pages => pages.title)

        return filtered;
    }
);