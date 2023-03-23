import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import HomeIcon from "../assets/home-icon.svg";
import BooksIcon from "../assets/books-icon.svg";
import LoginIcon from "../assets/login-icon.svg";
import UserIcon from "../assets/user-icon.svg";
import LibraryIcon from "../assets/library-iconNav.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const { theme } = useSelector((state) => state.theme);

  const { colors } = theme;

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/" style={{ color: colors.nav }}>
            Home<img src={HomeIcon} alt="home icon"></img>
          </Link>
        </li>
        <li>
          <Link to="/books" style={{ color: colors.nav }}>
            Books<img src={BooksIcon} alt="books icon"></img>
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/library" style={{ color: colors.nav }}>
              Library <img src={LibraryIcon} alt="library icon"></img>
            </Link>
          </li>
        )}
        <li>
          {!user ? (
            <Link to="/auth" style={{ color: colors.nav }}>
              Sing In<img src={LoginIcon} alt="login icon"></img>
            </Link>
          ) : (
            <Link to="/user" style={{ color: colors.nav }}>
              User<img src={UserIcon} alt="user icon"></img>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
