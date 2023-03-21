import { useState } from "react";
import OverlayLeft from "./OverlayLeft";
import OverlayRigth from "./OverlayRigth";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

const AuthWrapper = () => {
  const [active, setActive] = useState(false);

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
        <SingUp />
        <SingIn />
        <div className="overlay-container">
          <div className="overlay">
            <OverlayLeft onHandleActive={onHandleActive} />
            <OverlayRigth onHandleActive={onHandleActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
