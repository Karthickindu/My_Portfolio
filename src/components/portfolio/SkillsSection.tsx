import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3",
  "Tailwind CSS", "Chakra UI", "Redux Toolkit", "REST APIs",
  "Git", "Figma to Code", "Responsive Design", "Python", "SQL",
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, idx) => (
              <span
                key={skill}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
