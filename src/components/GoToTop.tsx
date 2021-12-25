import { useState } from "react";
import Image from "next/image";
import styles from "@/src/styles/GoToTop.module.css";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={styles.gotoTop}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <Image
        src="/images/go-to-top.svg"
        alt="Go to top"
        width={40}
        height={40}
      />
    </button>
  );
};

export default GoToTop;
