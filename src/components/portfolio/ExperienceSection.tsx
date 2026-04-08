import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Orchestro AI",
    period: "May 2025 to Present",
    points: [
      "Built frontend modules for enterprise logistics platforms serving parcel shipping and supply chain clients.",
      "Developed the DIM Optimizer interface for real time cost comparison across carriers.",
      "Engineered the Refund Finder dashboard with interactive charts and data transformations.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Orchestro AI",
    period: "Dec 2024 to May 2025",
    points: [
      "Integrated RESTful APIs using Redux Toolkit for seamless data synchronization.",
      "Translated Figma designs into responsive interfaces using React, Chakra UI, and Tailwind CSS.",
      "Refactored legacy components, reducing codebase redundancy by ~30%.",
    ],
  },
  {
    title: "B.Tech, Information Technology",
    company: "Government College of Engineering",
    period: "2021 to 2025",
    points: [
      "Graduated with a CGPA of 8.18/10.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
              </div>
              <p className="text-sm text-primary mb-3">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
