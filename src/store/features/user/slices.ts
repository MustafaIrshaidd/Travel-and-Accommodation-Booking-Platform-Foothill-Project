import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { loginUserAsync } from "./thunks";

const initialState = {
  family_name: "",
  given_name: "",
  userType: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDecodedToken: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserAsync.pending, (state, action) => {
        return {
          ...state,
        };
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        return {
          ...state,
        };
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        return {
          ...state,
        };
      });
  },
});

export const { userDecodedToken } = userSlice.actions;

const userSlices = combineReducers({
  user: userSlice.reducer,
});

export default userSlices;
