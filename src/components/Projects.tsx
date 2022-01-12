import ProjectCard from "./ProjectCard";
import { listProjects } from "@/src/utils/constants";
import styles from "@/src/styles/Projects.module.css";
import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <div className={styles.projects} id="projects">
      <h1>
        Some projects I&apos;ve worked on
        <span />
      </h1>
      <div className={styles.list}>
        {listProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
