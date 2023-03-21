import SingUpImage from "../assets/Image-SingUp.svg";

const OverlayRigth = ({ onHandleActive }) => {
  return (
    <>
      <div className="overlay-rigth">
        <h1>Hello, Reader!</h1>
        <p>Enter your personal details and start enjoying with us!</p>
        <button id="singUp" className="btn" onClick={onHandleActive}>
          SING UP
        </button>
        <div className="imageSingUp">
          <img src={SingUpImage} alt="Sing Ip" />
        </div>
      </div>
    </>
  );
};

export default OverlayRigth;
