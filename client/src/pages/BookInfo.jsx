import LibraryIcon from "../assets/library-icon.svg";
import example from "../assets/examplesvg.svg";
import quoteUp from "../assets/quote-up.svg";
import quoteDown from "../assets/quote-down.svg";

const BookInfo = () => {
  return (
    <div className="book-infoCont">
      <div className="leftSide">
        <img
          className="cover"
          src="https://images.gr-assets.com/books/1474154022l/3.jpg"
          alt="Harry Potter and the Sorcerer's Stone"
        />
        <div className="genres">
          <p>Fantasy</p>
          <p>Young Adult</p>
          <p>Fiction</p>
        </div>
        <button className="btn">
          Add Library
          <img src={LibraryIcon} alt="Library Icon" className="icon" />
        </button>
      </div>
      <div className="rigthSide">
        <div className="info">
          <h1>Harry Potter and the Sorcerer's Stone</h1>
          <h3>J.K. Rowling</h3>
          <img src={example} alt="example" className="example" />
          <p className="description">
            Harry Potter's life is miserable. His parents are dead and he's
            stuck with his heartless relatives, who force him to live in a tiny
            closet under the stairs. But his fortune changes when he receives a
            letter that tells him the truth about himself: he's a wizard. A
            mysterious visitor rescues him from his relatives and takes him to
            his new home, Hogwarts School of Witchcraft and Wizardry.After a
            lifetime of bottling up his magical powers, Harry finally feels like
            a normal kid.
          </p>
          <p className="quote">
            <img src={quoteUp} alt="quote up" />
            You don't forget the face of the person who was your last hope.
            <img src={quoteDown} alt="quote down" />
          </p>
        </div>
        <div className="comments">
          <h3>Comment's</h3>
          <div className="textButton">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="btn">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
