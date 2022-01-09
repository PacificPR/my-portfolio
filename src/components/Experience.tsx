import { NextPage } from "next";
import styles from "@/src/styles/Experience.module.css";
import Timeline from "./Timeline";
import { timelineData } from "../utils/constants";

const Experience: NextPage = () => {
  return (
    <div className={styles.experience} id="experience">
      <h1>My journey so far : </h1>

      {timelineData.length > 0 && (
        <div className={styles.timeline}>
          {timelineData.map((data, idx) => (
            <Timeline data={data} key={idx} listId={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
