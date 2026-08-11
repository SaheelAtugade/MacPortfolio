import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./github.scss";
import { useWindowStateContext } from "../context/WindowStateContext";

const Github = () => {


  const ProjectCard = ({
    data = {
      image: "",
      title: "",
      description: "",
      tags: [],
      repoLink: "",
      demoLink: "",
    },
  }) => {
    return (
      <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className="description">{data.description}</p>

        <div className="tags">
          {data.tags.map((tag, idx) => (
            <p key={idx} className="tag">
              {tag}
            </p>
          ))}
        </div>

        <div className="urls">
          <a href={data.repoLink}>📂Repository</a>
          {data.demoLink && <a href={data.demoLink}>🔗Demo link</a>}
        </div>
      </div>
    );
  };

  return (
    < MacWindow id="github" windowTitle="Github Projects" dimensions={{ width: "55vw", height: "70vh", x: 200, y: 100 }}>
      <div className="cards">
        {githubData.map((project) => {
          return <ProjectCard data={project} key={project.id} />;
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
