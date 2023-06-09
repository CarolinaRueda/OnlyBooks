import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "./booksService";

const initialState = {
  books: [],
  booksOnScreen: [],
  bookInfo: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "",
};

// Load books
export const loadBooks = createAsyncThunk(
  "books/loadBooks",
  async (_, thunkAPI) => {
    try {
      return await booksService.loadBooks();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Load books
export const loadBookById = createAsyncThunk(
  "books/loadBookById",
  async (bookId, thunkAPI) => {
    try {
      return await booksService.loadBookById(bookId);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    loadMoreBooks: (state) => {
      state.booksOnScreen = [
        ...state.booksOnScreen,
        ...state.books.slice(0, 10),
      ];
      state.books = state.books.slice(10);
    },
    resetBookInfo: (state, _) => {
      state.bookInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.books = action.payload;
        const onScreen = action.payload.splice(0, 10);
        state.booksOnScreen = onScreen;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.message = action.payload;
      })
      .addCase(loadBookById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.bookInfo = action.payload;
      })
      .addCase(loadBookById.rejected, (state, action) => {
        state.isLoading = false;
        state.isSucces = true;
        state.message = action.payload;
      });
  },
});

export const { loadMoreBooks, resetBookInfo } = bookSlice.actions;
export default bookSlice.reducer;
