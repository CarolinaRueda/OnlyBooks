import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../utilities/Themes";

// Get theme from LocalStorage
const theme = JSON.parse(localStorage.getItem("theme"));

export const getTheme = createAsyncThunk("global/getTheme", async () => {
  return theme === "light" ? light : dark;
});

// Set theme
export const setTheme = createAsyncThunk("global/setTheme", async (theme) => {
  return theme === "light" ? light : dark;
});

const initialState = {
  theme: light,
  message: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTheme.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheme.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.theme = action.payload;
      })
      .addCase(getTheme.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.theme = light;
      })
      .addCase(setTheme.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setTheme.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSuccess = true;
        state.theme = action.payload;
      })
      .addCase(setTheme.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.theme = light;
      });
  },
});

export default themeSlice.reducer;
