import React from "react";
import "./resume.scss";
import MacWindow from "./MacWindow";

const Resume = () => {
  return (
    <MacWindow id="resume" windowTitle="Resume" dimensions={{ width: "30vw", height: "80vh" , x: 40, y: 40 }}>
      <div className="resume-window">
        <embed src="/myResume.pdf" frameborder={0} type="application/pdf" />
      </div>
    </MacWindow>
  );
};

export default Resume;
