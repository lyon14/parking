import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./store/rootReducer";

const persistentConfig = {
  key: "root",
  storage: storage,
  blacklist: ["massiveDocumentCreate"],
  transforms: [],
};

const persistedRootReducer = persistReducer(persistentConfig, rootReducer);

const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/* if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./store/reducers", () => {
    const newRootReducer = require("./store/reducers").default;
    store.replaceReducer(newRootReducer);
  });
} */

export type AppDispatch = typeof store.dispatch;
export default store;
