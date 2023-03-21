import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from "../assets/google-icon.svg";
import Spinner from "../components/Spinner";
import { login, reset } from "../features/auth/authSlice";

const SingIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSucces || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSucces, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="sing-in">
        <form onSubmit={onSubmit}>
          <h1>Sing In</h1>
          <div className="social-container">
            <a href="http://localhost:3000/login" className="social">
              <img src={googleIcon} alt="Google Icon" />
            </a>
          </div>
          <p>or use your account</p>
          <input
            type="email"
            className="inputForm"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
          />
          <input
            type="password"
            className="inputForm"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
          />
          <button className="btn">SING IN</button>
        </form>
      </div>
    </>
  );
};

export default SingIn;
