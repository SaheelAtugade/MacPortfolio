import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
import { useWindowStateContext } from "./context/WindowStateContext";

const Nav = () => {
  const { windowState, setWindowState } = useWindowStateContext();
  const isAnyWindowOpen = Object.values(windowState).some(
    (value) => value === "maximize",
  );

  return (
    <nav style={isAnyWindowOpen ? { zIndex: 0 } : { zIndex: 20 }}>
      <div className="left">
        <div className="nav-icon">
          <img src="/navbar_icon/apple.svg" alt="" />
        </div>

        <div className="nav-item">
          <p>Saheel Atugade</p>
        </div>
        <div className="nav-item">
          <p
            onClick={() => window.open("https://github.com/SaheelAtugade", "_blank")}
          >Github</p>
        </div>
        <div className="nav-item">
          <p
            onClick={() => window.open("https://www.linkedin.com/in/sahil-atugade/", "_blank")}
          >Linkedin</p>
        </div>
        <div className="nav-item">
          <p
            onClick={() => {
              setWindowState((prev) => ({ ...prev, cli: "minimize" }));
            }}
          >
            Terminal
          </p>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="/navbar_icon/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
