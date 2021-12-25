import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { Repositories, Repository } from "@/src/types/types";

const projects: NextPage<Repositories> = ({ repositories }: Repositories) => {
  console.log(repositories);

  return (
    <>
      <Head>
        <title>my Projects</title>
      </Head>
      <h1>My projects : </h1>
      <ul>
        {repositories.map((repo: Repository) => {
          return <li key={repo.id}> {repo.name}</li>;
        })}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.github.com/users/PacificPR/repos");
  const result = await res.json();
  return {
    props: {
      repositories: result,
    },
  };
};

export default projects;
