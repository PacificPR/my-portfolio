import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import AboutMe from "@/src/components/AboutMe";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Contact from "@/src/components/Contact";
import GoToTop from "@/src/components/GoToTop";
import styles from "@/src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prashant Jha</title>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta name="description" content="Prashant Jha's portfolio website. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
      <GoToTop />
    </>
  );
};

export default Home;
