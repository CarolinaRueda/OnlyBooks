import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/booksSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer,
  },
});
