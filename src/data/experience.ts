import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Developer Engineer AI (AI Engineer)",
    organisation: {
      name: "Cornerstone OnDemand",
      href: "https://www.cornerstoneondemand.com/",
    },
    date: "April 2025 - Present",
    location: "Hyderabad, India",
    description: `
-- Understanding and analyzing the existing codebase of Cornerstone's Learning Management System (LMS) to identify areas where AI can be integrated to enhance user experience and functionality.

    `,
  },
  {
    title: "Software Developer Intern",
    organisation: {
      name: "Gokwik",
      href: "https://www.gokwik.co/",
    },
    date: "Sept 2025 - March 2025",
    location: "Remote",
    description: `
-- Integrated PineLabs Payment Aggregator into the end-to-end payment flow, enabling UPI (Intent, QR, Collect), credit/debit cards, EMI (CC/DC), and seamless refund handling; currently working on offer integration for PineLabs.

--  Refactored the NetBanking service from a global-level to a user-level configuration, reducing average UI loading time by 0.7 seconds.

-- Implemented integration with Snapmint eligibility API to enable real-time credit eligibility checks for users.

-- Implemented a search API for settlements, enabling efficient retrieval using Settlement ID and Merchant Order ID.

-- Worked on cross-team database migration using configuration-driven rollouts, ensuring backward compatibility and seamless integration across services.
    `,
  },
];
