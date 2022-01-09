import type { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/src/styles/Navbar.module.css";

const Navbar: NextPage = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className={styles.header} id="top">
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image
              src="/images/P.svg"
              alt="prashant-logo"
              width={80}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.sections}>
          <div>
            <a href="#about">0. About me</a>
          </div>
          <div>
            <a href="#projects">1. Projects</a>
          </div>
          <div>
            <a href="#experience">2. Experience</a>
          </div>
          <div>
            <a href="#contact">3. Contact</a>
          </div>
        </div>
        <button className={styles.dropButton} onClick={() => setMenu(!menu)}>
          <Image src="/images/bars.svg" alt="menu" width={40} height={40} />
        </button>
      </div>
      {menu && (
        <div className={styles.dropMenu}>
          <div>
            <a href="#about">About me</a>
          </div>
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#experience">Experience</a>
          </div>
          <div>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
