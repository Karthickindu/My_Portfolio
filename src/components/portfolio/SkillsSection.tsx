import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  "React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3",
  "Tailwind CSS", "Chakra UI", "Redux Toolkit", "REST APIs",
  "Git", "Figma to Code", "Responsive Design", "Python", "SQL",
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
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
