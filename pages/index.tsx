import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import AboutMe from "@/src/components/AboutMe";
import GoToTop from "@/src/components/GoToTop";
import styles from "@/src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>This is Prashant </title>
      </Head>
      <Navbar />
      <AboutMe />
      <div className={styles.div2}></div>
      <div className={styles.div3}></div>
      <GoToTop />
    </>
  );
};

export default Home;
