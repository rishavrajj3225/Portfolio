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
  SiNewrelic,
  SiRedis,
  SiClickhouse,
  SiAmazondynamodb,
  SiKibana,
  SiSplunk,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
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
import {
  Braces,
  Boxes,
  Layers3,
  Cpu,
  Database,
  SearchCode,
  Workflow,
  Brain,
  CloudCog,
} from "lucide-react";

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
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Clickhouse",
        icon: SiClickhouse,
      },
      {
        name: "DynamoDB",
        icon: SiAmazondynamodb,
      }
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
      },
      {
        name: "Kibana",
        icon: SiKibana,
      },
      {
        name: "Splunk",
        icon: SiSplunk,
      }
    ],
  },
  {
    sectionName: "DevOps",
    skills: [
      {
        name: "Jenkins",
        icon: SiJenkins,
      },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },
      {
        name: "Terraform",
        icon: SiTerraform,
      }
    ]
  },
  {
    sectionName: "Conceptual Knowledge",
    skills: [
      {
        name: "Data Structures and Algorithms",
        icon: Braces,
      },
      {
        name : "Object Oriented Programming",
        icon: Boxes,
      },
      {
        name: "Low Level Design",
        icon: Layers3,
      },
      {
        name: "Operating Systems",
        icon: Cpu,
      },
      {
        name: "DataBase Management Systems",
        icon: Database, 
      },
      {
        name: "Retrieval Augmented Generation",
        icon: SearchCode, 
      },
      {
        name: "Langchain",
        icon: Workflow, 
      },
      {
        name: "AI/ML",
        icon: Brain,
      },
      {
        name: "Cloud Computing",
        icon: CloudCog,
      }
    ] 
  }
];
