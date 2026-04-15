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
  SiGnubash,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiOpenapiinitiative,
  SiOpenai,
  SiPrometheus,
  SiNewrelic
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
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
        name: "Java",
        icon: FaJava,
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
        name: "Bash",
        icon: SiGnubash,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
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
    sectionName: "Frontend",
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
        name: "Redux",
        icon: ReduxSvg,
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
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PG vector",
        icon: SiPostgresql,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Websockets",
        icon: SiSocketdotio,
      },
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
        icon: SiOpenapiinitiative,
      },
      {
        name: "MCP",
        icon: SiOpenai,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Signoz",
        icon: SiPrometheus,
      },
      {
        name: "New Relic",
        icon: SiNewrelic,
      }
    ],
  },
];
