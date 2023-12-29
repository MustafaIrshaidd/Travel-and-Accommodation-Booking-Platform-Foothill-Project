import { combineReducers } from "@reduxjs/toolkit";
import roomsSlices from "./rooms/slices";
import hotelsSlices from "./hotels/slices";
import citiesSlices from "./cities/slices";
import commonSlices from "./common/slices";
import userSlices from "./user/slices";

const rootSlice = combineReducers({
  rooms: roomsSlices,
  hotels: hotelsSlices,
  cities: citiesSlices,
  common: commonSlices,
  user: userSlices,
});

export default rootSlice;
