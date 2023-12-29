import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootSlice from "./features";

const store = configureStore({
  reducer: rootSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
