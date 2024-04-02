import { configureStore } from "@reduxjs/toolkit";
import favorites from "./features/favorites";

export default configureStore({
  reducer: {
    favorites,
  },
});
