import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
