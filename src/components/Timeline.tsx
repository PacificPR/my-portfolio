import styles from "@/src/styles/Experience.module.css";
import { NextPage } from "next";
import { TimeLineDataType } from "../types/types";

interface TimelineProps {
  data: TimeLineDataType;
  listId: number;
}

const Timeline: NextPage<TimelineProps> = ({ data, listId }) => {
  const detail = data.text.trim().split(".");
  detail.pop();
  let pos = "right";
  if (listId % 2 == 0) pos = "left";

  return (
    <div className={`${styles.container} ${styles[pos]}`}>
      <div className={styles.content}>
        <div className={styles.head}>
          <time>{data.date}</time>
          <span
            className={styles.tag}
            style={{ background: data.category.color }}
          >
            {data.category.tag}
          </span>
        </div>
        <p>{data.position}</p>
        <ul>
          {detail.map((det) => (
            <li key={det}>{det}</li>
          ))}
        </ul>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Timeline;
