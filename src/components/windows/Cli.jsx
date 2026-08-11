import React from "react";
import "./terminal.scss";
import MacWindow from "./MacWindow";
import { ReactTerminal } from "react-terminal";

const Cli = () => {
  const commands = {
    about:
      "I'm Saheel Atugade, a Full Stack Developer focused on building modern and practical web applications.",

    skills:
      "Frontend: HTML, CSS, JavaScript, React, Tailwind CSS | Backend: Node.js, Express.js | Database: MongoDB, MySQL",

    stack: "MERN Stack — MongoDB, Express.js, React.js, Node.js",

    education: "MCA Student | BCA Graduate",

    projects:
      "Building web applications, developer tools, and practical real-world projects using the MERN stack.",

    interests:
      "Full Stack Development, React, UI/UX, AI Integration, and exploring new technologies.",

    learning:
      "Currently learning Advanced React, Data Structures & Algorithms, AI Integration, and Generative AI.",

    contact: "Use the Mail app on my desktop to get in touch with me.",

    github: "github.com/SaheelAtugade",

    status:
      "Open to learning, collaboration, and interesting development opportunities.",
    help: `Available commands: about, skills, stack, education, projects, interests, learning, contact, github, status`,
  };


  return (
    <MacWindow id="cli" windowTitle="Terminal" dimensions={{ width: "50vw", height: "40vh", x: 400, y: 400 }}>
      <div className="terminal-window">
        <ReactTerminal
          // welcomeMessage="type 'help' to see available commands "
          prompt="saheel@portfolio:(try-help)~$"
          commands={commands}
          showControlBar={false}
          themes={{
            "my-custom-theme": {
              themeBGColor: "#242425",
              themeColor: "#FFFEFC",
              themePromptColor: "#17a928",
            },
          }}
          theme="my-custom-theme"
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
