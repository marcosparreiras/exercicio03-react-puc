import { configureStore } from "@reduxjs/toolkit";
import favorites from "./features/favorites";

const store = configureStore({
  reducer: {
    favorites,
  },
});

export default store;
export type RootStoreState = ReturnType<typeof store.getState>;
