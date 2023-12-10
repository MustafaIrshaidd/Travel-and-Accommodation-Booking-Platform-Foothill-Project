import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import citiesSlice from "./features/cities/citiesSlice";

const store = configureStore({
  reducer: {
    cities: citiesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
