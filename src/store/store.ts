import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { citiesReducer } from "./reducers/cities";

const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
