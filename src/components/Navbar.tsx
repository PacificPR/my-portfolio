import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/src/styles/Navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <header className={styles.header}>
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
          <div>0. About me</div>
          <div>1. Education</div>
          <div>2. Work Experience</div>
          <div>3. Contact </div>
        </div>
        <button className={styles.dropButton}>
          <Image src="/images/bars.svg" alt="menu" width={40} height={40} />
        </button>
        {/* <div className={styles.dropMenu}>
          <div>0. About me</div>
          <div>1. Education</div>
          <div>2. Work Experience</div>
          <div>3. Contact </div>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
