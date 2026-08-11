import React, { useState } from "react";
import "./macwindow.scss";
import { Rnd } from "react-rnd";
import { useWindowStateContext } from "../context/WindowStateContext";

const MacWindow = ({
  children,
  windowTitle,
  id,
  dimensions = { width: "50vw", height: "63vh", x: 300, y: 200 },
}) => {
  const { windowState, setWindowState } = useWindowStateContext();

  const [position, setPosition] = useState({
    x: dimensions.x,
    y: dimensions.y,
  });

  const [size, setSize] = useState({
    width: dimensions.width,
    height: dimensions.height,
  });

  return (
    <Rnd
      default={dimensions}
      size={{
        width: windowState[id] === "maximize" ? "100%" : size.width,
        height: windowState[id] === "maximize" ? "100%" : size.height,
      }}
      position={{
        x: windowState[id] === "maximize" ? 0 : position.x,
        y: windowState[id] === "maximize" ? 0 : position.y,
      }}
      onDragStop={(e, d) => {
        setPosition({
          x: d.x,
          y: d.y,
        });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });

        setPosition({
          x: position.x,
          y: position.y,
        });
      }}
      minWidth="20vw"
      minHeight="30vh"
      disableDragging={windowState[id] === "maximize"}  
      enableResizing={windowState[id] !== "maximize"}
    >
      <div className="window">
        <div
          className="nav"
        >
          <div className="dots">
            <div
              onClick={() => {
                setWindowState((prev) => ({ ...prev, [id]: false }));
              }}
              className="dot red"
            ></div>
            <div
              onClick={() => {
                setWindowState((prev) => ({ ...prev, [id]: "minimize" }));
                setPosition({
                  x: dimensions.x,
                  y: dimensions.y,
                });
              }}
              className="dot yellow"
            ></div>
            <div
              onClick={() => {
                setWindowState((prev) => ({ ...prev, [id]: "maximize" }));
              }}
              className="dot green"
            ></div>
          </div>
          <div className="title">
            <p>saheel_atugade-zsh</p>
            <p className="sub-title">~{windowTitle}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
