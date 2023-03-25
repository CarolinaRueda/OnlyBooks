import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import HomeIcon from "../assets/home-icon.svg";
import HomeIconDM from "../assets/home-iconDM.svg";
import BooksIcon from "../assets/books-icon.svg";
import BooksIconDM from "../assets/books-iconDM.svg";
import LoginIcon from "../assets/login-icon.svg";
import LoginIconDM from "../assets/login-iconDM.svg";
import UserIcon from "../assets/user-icon.svg";
import UserIconDM from "../assets/user-iconDM.svg";
import LibraryIcon from "../assets/library-iconNav.svg";
import LibraryIconDM from "../assets/library-iconNavDM.svg";
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
            Home
            <img
              src={theme.mode === "light" ? HomeIcon : HomeIconDM}
              alt="home icon"
            ></img>
          </Link>
        </li>
        <li>
          <Link to="/books" style={{ color: colors.nav }}>
            Books
            <img
              src={theme.mode === "light" ? BooksIcon : BooksIconDM}
              alt="books icon"
            ></img>
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/library" style={{ color: colors.nav }}>
              Library{" "}
              <img
                src={theme.mode === "light" ? LibraryIcon : LibraryIconDM}
                alt="library icon"
              ></img>
            </Link>
          </li>
        )}
        <li>
          {!user ? (
            <Link to="/auth" style={{ color: colors.nav }}>
              Sing In
              <img
                src={theme.mode === "light" ? LoginIcon : LoginIconDM}
                alt="login icon"
              ></img>
            </Link>
          ) : (
            <Link to="/user" style={{ color: colors.nav }}>
              User
              <img
                src={theme.mode === "light" ? UserIcon : UserIconDM}
                alt="user icon"
              ></img>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
