import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import CompetitiveProgrammingSection from "@/components/competitive-programming-section";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Rishu Raj | Software Engineer"
        description="Explore the professional portfolio of Rishu Raj, a skilled Software Engineer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Rishu Raj - Software Engineer",
          description:
            "Dive into the world of web development with Rishu Raj. Discover a Software Engineer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          images: [
            {
              url: siteMetadata.socialBanner,
              alt: "Rishu Raj - Portfolio Image",
            },
          ],
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Software Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <CompetitiveProgrammingSection />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
