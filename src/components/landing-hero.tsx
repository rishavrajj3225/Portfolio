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
                I'm a results-driven software Engineer from IIT (ISM) Dhanbad, specializing in building scalable, high-performance, and user-focused web applications. I had delivered production-grade products with measurable impact, including platforms serving 2,400+ monthly users and implementing real-time, user-centric features. 
                Proficient in{" "}
                <span className="font-semibold text-accent">C++</span>,{" "}
                <span className="font-semibold text-accent">Golang</span>,{" "}
                <span className="font-semibold text-accent">TypeSript</span>,{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">Python</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>,{" "}
                <span className="font-semibold text-accent">NodeJs</span>,{" "}
                <span className="font-semibold text-accent">Mongodb</span>,{" "}
                <span className="font-semibold text-accent">Postgres</span>,{" "}
                <span className="font-semibold text-accent">VectorDb</span>,{" "}
                I'm focusing on optimizing performance, enhancing user experience, and building reliable, scalable systems. I'm consistently stays updated with modern tools and best practices to deliver efficient and impactful solutions.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
