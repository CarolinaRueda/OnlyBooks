import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import HomeIcon from "../assets/home-icon.svg";
import BooksIcon from "../assets/books-icon.svg";
import LoginIcon from "../assets/login-icon.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            Home<img src={HomeIcon} alt="home icon"></img>
          </Link>
        </li>
        <li>
          <Link to="/books">
            Books<img src={BooksIcon} alt="books icon"></img>
          </Link>
        </li>
        <li>
          <Link to="/login">
            Sing In<img src={LoginIcon} alt="login icon"></img>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
