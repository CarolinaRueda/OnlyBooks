import LibraryIcon from "../assets/library-iconNav.svg";
import TrashIcon from "../assets/trash-icon.svg";

const Library = () => {
  return (
    <div>
      <div className="name">
        <p>This is your library</p>
        <img src={LibraryIcon} alt="library icon"></img>
      </div>
      <div className="parent titleTable" style={{ borderBottom: "none" }}>
        <p>Cover</p>
        <p>Title</p>
        <p>Author</p>
        <p>N° Pages</p>
        <p>Rating</p>
      </div>
      <div className="parent infoTable">
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
