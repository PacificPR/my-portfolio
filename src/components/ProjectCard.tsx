import styles from "@/src/styles/ProjectCard.module.css";
import { ProjectType } from "@/src/types/types";
import { NextPage } from "next";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: NextPage<ProjectCardProps> = (props) => {
  const { project } = props;
  const detail = project.summary.trim().split(".");
  detail.pop();
  let visExternal = "hidden";
  let visRepo = "hidden";
  if (project["external-link"]) visExternal = "visible";
  if (project["repo-link"]) visRepo = "visible";

  return (
    <div className={styles.project}>
      <h2>{project.title}</h2>
      <ul>
        {detail.map((det) => (
          <li key={det}>{det}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <div className={styles.github} style={{ visibility: visRepo }}>
          <a
            target="_blank"
            href={project["repo-link"]}
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>

        <div className={styles.external} style={{ visibility: visExternal }}>
          <a
            target="_blank"
            href={project["external-link"]}
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>

              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.tech}>
        {project["tech-stack"].map((tech) => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
