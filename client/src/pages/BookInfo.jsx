import LibraryIcon from "../assets/library-icon.svg";
import example from "../assets/examplesvg.svg";
import quoteUp from "../assets/quote-up.svg";
import quoteUpDM from "../assets/quote-upDM.svg";
import quoteDown from "../assets/quote-down.svg";
import quoteDownDM from "../assets/quote-downDM.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadBookById, resetBookInfo } from "../features/books/booksSlice";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

const BookInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { bookInfo, isLoading } = useSelector((state) => state.books);
  const { theme } = useSelector((state) => state.theme);

  const { colors } = theme;

  useEffect(() => {
    dispatch(loadBookById(id));
    return () => {
      dispatch(resetBookInfo());
    };
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;
  return bookInfo ? (
    <div className="book-infoCont fade">
      <div className="leftSide" style={{ color: colors.general }}>
        <img className="cover" src={bookInfo.image_url} alt={bookInfo.title} />
        <div className="genres">
          {bookInfo.genre_list.split(",").map((genre, idx) => (
            <p key={idx}>{genre}</p>
          ))}
        </div>
        <button className="btn">
          Add Library
          <img src={LibraryIcon} alt="Library Icon" className="icon" />
        </button>
      </div>
      <div className="rigthSide">
        <div className="info" style={{ color: colors.general }}>
          <h1>{bookInfo.title}</h1>
          <h3>{bookInfo.authors}</h3>
          <img src={example} alt="example" className="example" />
          <p
            className="description"
            style={{ color: colors.description, fontWeight: "lighter" }}
          >
            {bookInfo.description}
          </p>
          <p className="quote" style={{ color: colors.description }}>
            <img
              src={theme.mode === "light" ? quoteUp : quoteUpDM}
              alt="quote up"
            />
            {bookInfo.Quote1}
            <img
              src={theme.mode === "light" ? quoteDown : quoteDownDM}
              alt="quote down"
            />
          </p>
        </div>
        <div className="comments" style={{ color: colors.general }}>
          <h3>Comment's</h3>
          <div className="textButton">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              style={{
                backgroundColor: colors.background,
              }}
            ></textarea>
            <button
              className="btn"
              style={{ backgroundColor: "#e79870", borderColor: "#e79870" }}
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>unable to load book info please try again</p>
  );
};

export default BookInfo;
