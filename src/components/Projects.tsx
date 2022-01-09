import ProjectCard from "./ProjectCard";
import { listProjects } from "@/src/utils/constants";
import styles from "@/src/styles/Projects.module.css";
import { NextPage } from "next";

const Projects: NextPage = () => {
  //listProjects will be an array of objects,
  // each object having, title, summary, github-link, external-link(if available)

  return (
    <div className={styles.projects} id="projects">
      <h1>Few projects I&apos;ve worked on : </h1>
      <div className={styles.list}>
        {listProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
