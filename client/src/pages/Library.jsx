import { useSelector } from "react-redux";
import LibraryIcon from "../assets/library-iconNav.svg";
import TrashIcon from "../assets/trash-icon.svg";

const Library = () => {
  const { theme } = useSelector((state) => state.theme);

  const { colors } = theme;

  return (
    <div className="libraryCont">
      <div className="name">
        <p style={{ color: colors.general }}>This is your library</p>
        <img src={LibraryIcon} alt="library icon"></img>
      </div>
      <div
        className="parent titleTable"
        style={{ borderBottom: "none", color: colors.general }}
      >
        <p>Cover</p>
        <p>Title</p>
        <p>Author</p>
        <p>N° Pages</p>
        <p>Rating</p>
      </div>
      <div className="parent infoTable" style={{ color: colors.pageText }}>
        <img
          src="https://images.gr-assets.com/books/1382846449l/7144.jpg"
          alt="test"
        />
        <p>Crime and Punishment</p>
        <p>Fyodor Dostoyevsky</p>
        <p>671</p>
        <p>4.2</p>
        <img src={TrashIcon} alt="Trash Icon" className="deleteIcon" />
      </div>
    </div>
  );
};

export default Library;
