
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AxiosSingleton from "@utils/axiosUtil";
import citiesSlice from "./features/cities/citiesSlice";
import hotelsSlice from "./features/hotels/hotelsSlice";
import searchSlice from "./features/search/searchSlice";
import contentSlice from "./features/content/contentSlice";
import hotelsDetailsSlice from "./features/hotelDetails/hotelsDetailsSlice";

const store = configureStore({
  reducer: {
    cities: citiesSlice,
    hotels: hotelsSlice,
    search: searchSlice,
    content: contentSlice,
    hotelDetails:hotelsDetailsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const axiosInstance = AxiosSingleton.getInstance();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;