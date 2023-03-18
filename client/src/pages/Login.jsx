import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import googleIcon from "../assets/google-icon.svg";
import SingUpImage from "../assets/Image-SingUp.svg";
import SingInImage from "../assets/Image-SingIn.svg";

const Login = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.message(message);
    }

    // if (user) {
    //   navigate("/");
    // }

    dispatch(reset());
  }, [user, isError, isSucces, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        username,
        email,
        password,
        library: [],
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  const onHandleActive = () => {
    setActive(!active);
  };

  return (
    <div className="cont-login">
      <div
        className={
          !active ? "login-container" : "login-container rigth-panel-active"
        }
      >
        <div className="sing-up">
          <form onSubmit={onSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="http://localhost:3000/login" className="social">
                <img src={googleIcon} alt="Google Icon" />
              </a>
            </div>
            <p>or use your email for registration</p>
            <input
              type="text"
              className="inputForm"
              id="username"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={onChange}
            />
            <input
              type="email"
              className="inputForm"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
            <input
              type="password"
              className="inputForm"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
            <input
              type="password"
              className="inputForm"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm your password"
              onChange={onChange}
            />
            <button>Sing Up</button>
          </form>
        </div>
        <div className="sing-in">
          <form action="#">
            <h1>Sing In</h1>
            <div className="social-container">
              <a href="http://localhost:3000/login" className="social">
                <img src={googleIcon} alt="Google Icon" />
              </a>
            </div>
            <p>or use your account</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="inputForm"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
              className="inputForm"
            />
            <button>Sing In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us, please login with your personal info
              </p>
              <button id="singIn" onClick={onHandleActive}>
                Sing In
              </button>
              <div className="imageSingIn">
                <img src={SingInImage} alt="Sing Ip" />
              </div>
            </div>
            <div className="overlay-rigth">
              <h1>Hello, Reader!</h1>
              <p>Enter your personal details and start enjoying with us!</p>
              <button id="singUp" onClick={onHandleActive}>
                Sing Up
              </button>
              <div className="imageSingUp">
                <img src={SingUpImage} alt="Sing Ip" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
