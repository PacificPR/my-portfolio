import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/src/styles/Navbar.module.css";

const Navbar: NextPage = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className={styles.header} id="top">
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/P.svg"
            alt="prashant-logo"
            width={80}
            height={50}
          />
        </div>
        <div className={styles.sections}>
          <div>
            <a href="#">0. About me</a>
          </div>
          <div>
            <a href="#">1. Education</a>
          </div>
          <div>
            <a href="#">2. Work Experience</a>
          </div>
          <div>
            <a href="#">3. Contact</a>
          </div>
        </div>
        <button className={styles.dropButton} onClick={() => setMenu(!menu)}>
          <Image src="/images/bars.svg" alt="menu" width={40} height={40} />
        </button>
      </div>
      {menu && (
        <div className={styles.dropMenu}>
          <div>
            <a href="#">About me</a>
          </div>
          <div>
            <a href="#">Education</a>
          </div>
          <div>
            <a href="#">Work Experience</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
