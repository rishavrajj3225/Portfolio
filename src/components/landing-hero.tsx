import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Rishu Raj
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Software Engineer | Competative Programmer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                I'm a results-driven{" "}
                <span className="font-semibold text-accent">
                  Software Development Engineer (AI)
                </span>{" "}
                and an IIT (ISM) Dhanbad graduate, passionate about building
                scalable, AI-powered, and high-performance applications. I have
                delivered production-grade features with measurable impact,
                including reducing AI response latency by{" "}
                <span className="font-semibold text-accent">42.5%</span>,
                improving the reliability of enterprise AI insights, and
                developing products serving over{" "}
                <span className="font-semibold text-accent">
                  2,400+ monthly users
                </span>
                . My experience spans Generative AI, Retrieval-Augmented
                Generation (RAG), backend engineering, and distributed systems,
                with a strong focus on creating reliable, user-centric
                solutions. Proficient in{" "}
                <span className="font-semibold text-accent">C++</span>,{" "}
                <span className="font-semibold text-accent">Java</span>,{" "}
                <span className="font-semibold text-accent">Python</span>,{" "}
                <span className="font-semibold text-accent">TypeScript</span>,{" "}
                <span className="font-semibold text-accent">Spring Boot</span>,{" "}
                <span className="font-semibold text-accent">Next.js</span>,{" "}
                <span className="font-semibold text-accent">React</span>,{" "}
                <span className="font-semibold text-accent">Node.js</span>,{" "}
                <span className="font-semibold text-accent">Docker</span>,{" "}
                <span className="font-semibold text-accent">AWS</span>,{" "}
                <span className="font-semibold text-accent">MongoDB</span>,{" "}
                <span className="font-semibold text-accent">MySQL</span>,{" "}
                <span className="font-semibold text-accent">VectorDB</span>,{" "}
                <span className="font-semibold text-accent">ClickHouse</span>.{" "}
                I'm passionate about optimizing system performance, designing
                scalable backend architectures, and building AI-driven products
                using LLMs and RAG. I continuously explore modern technologies,
                open-source contributions, and software engineering best
                practices to deliver efficient, impactful, and production-ready
                solutions.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
