import { ProjectType } from "../types/types";

export const listProjects: ProjectType[] = [
  {
    id: 0,
    title: "create-memes",
    summary:
      "It is a flask web-app using which one can create memes. You can select from variety of templates and eneter your own texts as labels in them. It is deployed on Heroku.",
    "repo-link": "https://github.com/PacificPR/creatememes",
    "external-link": "https://creatememes.herokuapp.com/",
    "tech-stack": ["flask", "jinja", "html", "css", "imgflip api"],
  },
  {
    id: 1,
    title: "QBox",
    summary:
      "QBox is a secure file-sharing service. It is a customized version of the popularly available VSFTPD server.",
    "repo-link": "",
    "external-link":
      "https://criodo.github.io/Crio-Launch-Feb-2020-prashant-kumarjha63/",
    "tech-stack": ["Linux", "Wireshark", "Network", "Security"],
  },
];

export const timelineData = [
  {
    text: "Develop platform that helps in accessing data easily. Allow filtering, sorting and other functionalities on the data present on ElasticSearch cluster. Working on tech stack : React, FastApi, AWS and Terraform.",
    date: "August 2021 - Present",
    position: "Software Developer",
    category: {
      tag: "Comono India",
      color: "#486164",
      role: "Full Stack Developer and Co-founder",
    },
    link: {
      url: "https://comono.no",
      text: "Comono",
    },
  },
  {
    text: "Worked on projects that provide law firms different tools to handle documents and contracts in an efficient way. Refactored and optimized a text-comparision algorithm to improve performance considerably. Tech stack used to build the platform: React, Node, MySql and AWS.",
    date: "January 2021 - July 2021",
    position: "Software Developer",
    category: {
      tag: "Comono AS",
      color: "#59a6a6",
    },
    link: {
      url: "https://comono.no",
      text: "Comono",
    },
  },
  {
    text: "Worked on various projects aimed to improve fundamental skills such as Data Structure, Linux commands, etc required as a Computer Science Engineer.Developed scripts to handle installation and analyzing performance of a secure file-sharing service,VSFTPD server.Build the core logic of a Stock Portfolio Manager and published it as a library.",
    date: "January 2020 - April 2020",
    position: "Backend Developer",
    category: {
      tag: "Crio.Do",
      color: "#277e33",
    },
    link: {
      url: "https:crio.do",
      text: "Crio.Do",
    },
  },
];
