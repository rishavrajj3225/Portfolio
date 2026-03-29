import { COMPETITIVE_PROGRAMMING } from "@/data/competitiveProgramming";
import { FiExternalLink } from "react-icons/fi";

export default function CompetitiveProgrammingSection() {
  return (
    <section className="overflow-hidden px-6 py-16 sm:px-14 md:px-20 mt-0 mb-0">
      <div className="relative mx-auto max-w-7xl mt-0 mb-0">
        <h2 className="text-xl font-semibold text-accent sm:text-4xl mb-4">
          Competitive Programming
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {COMPETITIVE_PROGRAMMING.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-lg border border-accent/20 bg-background p-6 shadow-md transition hover:scale-105 hover:border-accent group relative overflow-hidden"
            >
              {/* Animated background effect */}
              <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent blur-xl scale-110" />
              <span className="relative z-10 flex flex-col items-center">
                <platform.icon className="text-4xl text-accent mb-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125" />
                <span className="font-semibold text-lg text-accent-foreground flex items-center gap-1">
                  {platform.name}
                  <FiExternalLink className="inline text-xs ml-1" />
                </span>
                <span className="mt-2 text-xs text-muted-foreground text-center">
                  {platform.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
