import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "Junior Software Engineer",
    company: "Orchestro AI",
    period: "May 2025 to Present",
    points: [
      "Architected and delivered production ready frontend modules for enterprise logistics platforms, serving clients across parcel shipping and supply chain verticals.",
      "Built the DIM Optimizer interface enabling real time product to box matching and multi carrier cost comparison, reducing manual shipping decisions by an estimated 40%.",
      "Engineered dynamic data transformation pipelines in the Refund Finder dashboard, surfacing actionable refund insights through interactive charts and tables.",
      "Developed Parcel Intercept features for in transit rerouting, improving operational flexibility and reducing failed delivery rates for enterprise shippers.",
    ],
  },
  {
    type: "work" as const,
    title: "Frontend Developer Intern",
    company: "Orchestro AI",
    period: "Dec 2024 to May 2025",
    points: [
      "Integrated complex RESTful APIs using Redux Toolkit, ensuring seamless data synchronization and optimized state management across multiple application modules.",
      "Translated Figma design specifications into pixel perfect, responsive interfaces using React.js, Chakra UI, and Tailwind CSS.",
      "Refactored legacy components for reusability, reducing codebase redundancy by ~30% and improving developer velocity across the frontend team.",
      "Collaborated in Agile sprints with design, product, and backend teams to deliver features on schedule with zero critical post release bugs.",
    ],
  },
  {
    type: "education" as const,
    title: "B.Tech, Information Technology",
    company: "Government College of Engineering",
    period: "2021 to 2025",
    points: [
      "Graduated with a CGPA of 8.18/10, demonstrating strong academic performance across core CS and IT disciplines.",
      "Developed multiple full-stack projects during coursework, building a strong foundation in software engineering principles.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 section-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className={`flex items-start gap-6 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                  {exp.type === "work" ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-primary" />
                  )}
                </div>

                <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                  <div className="p-5 rounded-xl glass hover:glow-primary transition-all duration-300">
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                    <h3 className="text-lg font-semibold mt-1 text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
