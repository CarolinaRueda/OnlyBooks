import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import googleIcon from "../assets/google-icon.svg";

const SingUp = () => {
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
      console.log(message);
      toast.error(message);
    }

    if (isSucces || user) {
      navigate("/");
    }

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
  return (
    <>
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
          <button className="btn">SING UP</button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
