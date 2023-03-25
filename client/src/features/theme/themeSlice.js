import { createSlice } from "@reduxjs/toolkit";
import { light } from "../../utilities/Themes";

// Get theme from LocalStorage
const theme = JSON.parse(localStorage.getItem("theme"));

const initialState = {
  theme: theme ? theme : light,
  message: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      localStorage.setItem("theme", JSON.stringify(action.payload));
      state.theme = action.payload;
    },
    resetTheme: (state) => {
      localStorage.removeItem("theme");
      state.theme = light;
    },
  },
  extraReducers: {},
});

export const { updateTheme, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
