import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ info }) => {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();
  const onHoverIn = () => setHover(true);
  const onHoverOut = () => setHover(false);

  const hovered = hover
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)), url(${info.image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }
    : {
        backgroundImage: `url(${info.image_url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      };

  const onBookInfo = () => {
    navigate("/book-info");
  };

  const onLibrary = () => {
    navigate("/library");
  };

  const onTest = () => {
    console.log(info);
  };

  return (
    <div
      className="book-cont"
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={hovered}
      id={hover ? "onHover" : null}
      onClick={onTest}
    >
      {hover && (
        <>
          <p onClick={onBookInfo}>{info.title}</p>
          <button onClick={onLibrary}>Add to my library</button>
        </>
      )}
    </div>
  );
};

export default Book;
