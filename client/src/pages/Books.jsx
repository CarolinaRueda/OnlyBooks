import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loadBooks, loadMoreBooks } from "../features/books/booksSlice";
import Spinner from "../components/Spinner";
import Book from "./Book";

const Books = () => {
  const dispatch = useDispatch();
  const { books, booksOnScreen, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.books);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || books.length) {
      return;
    }

    dispatch(loadBooks());
  }, [books, dispatch, isSuccess, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="books-cont">
      {booksOnScreen.map((book, idx) => (
        <Book key={idx} info={book} />
      ))}
      <button onClick={() => dispatch(loadMoreBooks())}>LOAD MORE</button>
    </div>
  );
};

export default Books;
