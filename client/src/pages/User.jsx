import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import UserIcon from "../assets/user-icon.svg";
import UserIconDM from "../assets/user-iconDM.svg";
import ImageUser from "../assets/Image-User.svg";
import Spinner from "../components/Spinner";
import { resetTheme, updateTheme } from "../features/theme/themeSlice";
import { dark, light } from "../utilities/Themes";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const { colors } = theme;

  const { user, isLoading } = useSelector((state) => state.auth);

  const { username, email } = user;

  const onClick = () => {
    dispatch(updateTheme(theme.mode !== "light" ? light : dark));
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetTheme());
    navigate("/");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="userContainer" style={{ color: colors.general }}>
      <div className="name">
        <p>User's Setting</p>
        <img
          src={theme.mode === "light" ? UserIcon : UserIconDM}
          alt="user icon"
        ></img>
      </div>
      <div className="userSett">
        <div className="imageCont">
          <img src={ImageUser} alt="User" />
        </div>
        <div className="userCont">
          <div className="accountSett options">
            <div className="titleSett">
              <h3>Account</h3>
            </div>
            <section className="optionsSett">
              <p className="bold">Username:</p>
              <p>{username}</p>
            </section>
            <section className="optionsSett">
              <p className="bold">Email:</p>
              <p>{email}</p>
            </section>
            <span className="rigth link">Update Info</span>
          </div>
          <div className="securitySett options">
            <div className="titleSett">
              <h3>Security</h3>
            </div>
            <section className="optionsSett">
              <p className="bold">Password</p>
              <span className="link">Update Password</span>
            </section>
          </div>
          <div className="accesibilitySett options">
            <div className="titleSett">
              <h3>Accesibility</h3>
            </div>
            <section className="optionsSett">
              <p className="bold">Dark Mode:</p>
              <div className="contChange">
                {theme.mode === "light" ? <p>Off</p> : <p>On</p>}
                <div className="select">
                  <div
                    className="inner"
                    style={{
                      float: theme.mode === "light" ? "right" : "left",
                    }}
                    onClick={onClick}
                  ></div>
                </div>
              </div>
            </section>
          </div>
          <button onClick={onLogout} className="btn">
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
