import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import citiesSlice from "./features/cities/citiesSlice";
import hotelsSlice from "./features/hotels/hotelsSlice";

const store = configureStore({
  reducer: {
    cities: citiesSlice,
    hotels: hotelsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
