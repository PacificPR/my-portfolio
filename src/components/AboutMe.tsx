import styles from "@/src/styles/AboutMe.module.css";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div id="about" className={styles.about}>
      <h3>Hey, this is</h3>
      <h1>Prashant Kumar Jha.</h1>
      <div className={styles.image}>
        <Image
          src="/images/Prashant.png"
          alt="My photo"
          width={285}
          height={255}
        />
      </div>
      <p className={styles.intro}>
        I&apos;m a Software Developer. Love to code my way through problems,
        learn new tech stacks to solve real world problems. Enhancing my skills
        to become a good full stack developer. Interested in Web development,
        Cloud technologies and Linux.
      </p>
      <div className={styles.skills}>
        <p className={styles.intro}>My skill set : </p>
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
    </div>
  );
};

export default AboutMe;
