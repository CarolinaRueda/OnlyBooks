import axios from "axios";

const API_URL = "https://example-data.draftbit.com/books";

// Load all books
const loadBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const booksService = {
  loadBooks,
};

export default booksService;
