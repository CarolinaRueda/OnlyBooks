import { useSelector } from "react-redux";
import imageHome from "../assets/Image-Home.svg";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);

  const { colors } = theme;

  if (isLoading) {
    return <Spinner />;
  }

  const username = !user
    ? null
    : user.username.slice(0, 1).toUpperCase() +
      user.username.slice(1, user.username.length);

  return (
    <div className="dashboard">
      <div className="imgDash">
        <img src={imageHome} alt="Dashboard" />
      </div>
      <div className="text">
        {!user ? (
          <>
            <h1 className="title">Welcome</h1>
            <p className="text-p" style={{ color: colors.pageText }}>
              To this safe place, <span className="text-s">register</span> and{" "}
              <br /> discover everything we have <br /> for you!
            </p>
          </>
        ) : (
          <>
            <h1 className="title">Welcome, {username}</h1>
            <p className="text-p" style={{ color: colors.pageText }}>
              To your safe place, keep
              <br /> discovering everything we have <br /> for you!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
