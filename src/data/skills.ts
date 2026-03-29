import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
  SiCplusplus,
  SiC,
  SiGo,
  SiAssemblyscript,
  SiDjango,
  SiFastapi,
  SiDocker,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import { GoalIcon } from "lucide-react";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "C",
        icon: SiC,
      },
      {
        name: "Golang",
        icon: SiGo,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Assembly",
        icon: SiAssemblyscript,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Websockets",
        icon: SiSocketdotio,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Databases ",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "PG vector",
        icon: GoalIcon,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Restful APIs",
        icon: GoalIcon,
      },
      {
        name: "MCP",
        icon: GoalIcon,
      },
      {
        name: "MCP",
        icon: GoalIcon,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
