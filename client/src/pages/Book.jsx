import { useState } from "react";

const Book = ({ info }) => {
  const [hover, setHover] = useState(false);

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

  return (
    <div
      className="book-cont"
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={hovered}
      id={hover ? "onHover" : null}
    >
      {hover && <button>Add to my library</button>}
    </div>
  );
};

export default Book;
