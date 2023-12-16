import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync } from "./userThunks";

const initialState = {
  //   exp: null,
  family_name: "",
  given_name: "",
  //   iss: "",
  //   nbf: null,
  //   sub: "",
  userType: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInformationAdded: (state, action) => {
      return {
        ...state,
        ...action.payload
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

export const { userInformationAdded } = userSlice.actions;

export default userSlice.reducer;
