import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import UserIcon from "../assets/user-icon.svg";
import ImageUser from "../assets/Image-User.svg";
import Spinner from "../components/Spinner";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth);

  const { username, email } = user;

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="name">
        <p>User's Setting</p>
        <img src={UserIcon} alt="user icon"></img>
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
              <section>
                <p>Off</p>
                <div></div>
              </section>
            </section>
          </div>
          <button onClick={onLogout} className="btn">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
