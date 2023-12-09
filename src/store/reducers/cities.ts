// citiesReducers.ts
import { ActionTypes, CitiesState } from "@store/types/cities";

const initialState = {
  cities: [],
  loading: false,
  error: { message: "" },
} as CitiesState;

export const citiesReducer = (
  state: CitiesState = initialState,
  action: any
): CitiesState => {
  switch (action.type) {
    case ActionTypes.ADD_CITY: {
      return { ...state, cities: [...state.cities, action.payload] };
    }
    default:
      return state;
  }
};
