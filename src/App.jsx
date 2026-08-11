import React, { useState } from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/Github";
import Skills from "./components/windows/Skills";
import Resume from "./components/windows/Resume";
import Calender from "./components/windows/Calender";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { useWindowStateContext } from "./components/context/WindowStateContext";
import Mail from "./components/windows/Mail";

const App = () => {
  const {windowState} = useWindowStateContext();
  
  
  return (
    <main>
      <Nav windowState={windowState} />
      {windowState.github && <Github />}
      {windowState.skills && <Skills />}
      {windowState.resume && <Resume />}
      {windowState.calender && <Calender />}
      {windowState.spotify && <Spotify />}
      {windowState.mail && <Mail />}
      {windowState.cli && <Cli />}
      <Dock />
    </main>
  );
};

export default App;
