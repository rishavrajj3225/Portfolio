import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Clever Code",
    href: "/projects",
    tags: ["Node js", "Express", "Reactjs", "Tailwindcss", "Vite", "VectorDb", "RAG"],
    image: {
      LIGHT: "",
      DARK: "/images/projects/Clevercode.png",
    },
  },
  {
    index: 1,
    title: "ProShop",
    href: "/projects",
    tags: [
      "MERN Stack",
      "Redux Toolkit",
      "Tailwindcss",
      "Vercel",
      "MongoDB Atlas",
      "Paypal",
    ],
    image: {
      LIGHT: "",
      DARK: "/images/projects/Proshop.png",
    },
  },
  {
    index: 2,
    title: "Post Pulse",
    href: "/projects",
    tags: ["Django", "jsx", "SQL", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "",
      DARK: "/images/projects/Postpulse.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Clever Code",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/CleverCode.png",
      "/images/projects/CleverCode1.png",
      "/images/projects/CleverCode2.png",
      "/images/projects/CleverCode3.png",
    ],
    description:
      "A platform for competitive programmers to practice problems based on peers' solved sets, leveraging the Codeforces API for real-time problem and submission data. This also contain problem recommendation system for competitive programmers by precomputing embeddings for Codeforces problems and enabling semantic search using a vector database.",
    sourceCodeHref: "https://github.com/rishavrajj3225/CleverCode",
    liveWebsiteHref: "https://clever-code.vercel.app/",
  },
  {
    name: "ProShop",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/Proshop.png",
    ],
    description:
      "A full-stack MERN e-commerce platform built using MongoDB, Express.js, React, and Node.js, featuring secure JWT-based user authentication, a dynamic product catalog with search and filtering, and a fully functional shopping cart. The application includes seamless payment integration, order history tracking, user reviews and ratings, and a responsive UI for a smooth cross-device experience. It also provides an admin dashboard to manage products, users, and orders, along with a notification system to keep users updated on order status and promotions.",
    sourceCodeHref: "https://github.com/rishavrajj3225/ProShop",
    liveWebsiteHref: "",
  },
  {
    name: "Post Pulse",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/Postpulse.png",
    ],
    description:
      "Built a full-featured blogging platform using Django, SQL, and Tailwind with integrated Gemini AI for automated blog summaries, key point generation, and answering blog-related queries to enhance user engagement.",
    sourceCodeHref: "https://github.com/rishavrajj3225/Postpuls",
    liveWebsiteHref: "",
  },
  {
    name: "Chat With YT Videos",
    favicon: "",
    imageUrl: [
      "/images/projects/ChatWithYT.png",
    ],
    description:
      "Developed an AI-powered YouTube Q&A platform that transforms videos into an interactive, searchable knowledge base using LangChain with RAG, conversational memory, and vector-based semantic search to deliver low-latency, context-aware responses.",
    sourceCodeHref: "https://github.com/rishavrajj3225/QA-With-YT-video",
    liveWebsiteHref: "",
  },
];
