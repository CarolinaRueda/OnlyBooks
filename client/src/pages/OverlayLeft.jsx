import SingInImage from "../assets/Image-SingIn.svg";

const OverlayLeft = ({ onHandleActive }) => {
  return (
    <>
      <div className="overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us, please login with your personal info</p>
        <button id="singIn" className="btn" onClick={onHandleActive}>
          SING IN
        </button>
        <div className="imageSingIn">
          <img src={SingInImage} alt="Sing Ip" />
        </div>
      </div>
    </>
  );
};

export default OverlayLeft;
