import styles from "@/src/styles/AboutMe.module.css";
import { NextPage } from "next";
import Image from "next/image";

const AboutMe: NextPage = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.image}>
        <Image
          src="/images/prashant_darkblue.png"
          alt="My photo"
          width={285}
          height={255}
        />
        <div className={styles.brief}>
          <h1>Prashant Jha</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
      <p className={styles.intro}>
        I&apos;m a Software Developer. Love to code my way through problems,
        learn new tech stacks to solve real world problems. Enhancing my skills
        to become a good full stack developer. Interested in Web development,
        Cloud technologies, Networking and Linux.
      </p>
      <div className={styles.skills}>
        <h2>My skill set : </h2>
        <ul className={styles.list}>
          <li>
            <span>&#10148; </span>
            <p>Javascript</p>
          </li>
          <li>
            <span>&#10148;</span>
            <p>React</p>
          </li>
          <li>
            <span>&#10148;</span>
            <p>Java</p>
          </li>
          <li>
            <span>&#10148;</span>
            <p>Flask</p>
          </li>
          <li>
            <span>&#10148;</span>
            <p>C/C++</p>
          </li>
          <li>
            <span>&#10148;</span>
            <p>Wireshark</p>
          </li>
        </ul>
      </div>
      <div className={styles.resume}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
