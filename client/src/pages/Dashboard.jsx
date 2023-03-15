import imageHome from "../assets/Image-Home.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="imgDash">
        <img src={imageHome} alt="Dashboard" />
      </div>
      <div className="text">
        <h1 className="title">Welcome</h1>
        <p className="text-p">
          To this save place, <span className="text-s">register</span> and{" "}
          <br /> discover everything we have <br /> for you!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
