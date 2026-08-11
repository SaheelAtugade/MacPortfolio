import React, { useEffect, useState } from "react";
import "./skills.scss";
import MacWindow from "./MacWindow";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Skills = () => {
  const [noteData, setNoteData] = useState(null);

  useEffect(() => {
    fetch("/skills.md")
      .then((res) => res.text())
      .then((text) => setNoteData(text));
  }, []);

  return (
    <MacWindow id="skills" windowTitle="Skills" dimensions={{ width: "50vw", height: "50vh", x: 400, y: 40 }}>
      <div className="note-window">
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {/* <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}> */}
          {noteData}
        {/* </Markdown> */}
        </SyntaxHighlighter>
      </div>
    </MacWindow>
  );
};

export default Skills;
