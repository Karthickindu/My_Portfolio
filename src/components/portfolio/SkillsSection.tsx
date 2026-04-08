import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 92 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 93 },
      { name: "Chakra UI", level: 85 },
    ],
  },
  {
    title: "State & Data Management",
    skills: [
      { name: "Redux Toolkit", level: 88 },
      { name: "REST API Integration", level: 90 },
      { name: "Data Visualization", level: 78 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Figma to Code", level: 90 },
      { name: "Agile / Scrum", level: 82 },
    ],
  },
  {
    title: "Programming & Other",
    skills: [
      { name: "Python", level: 72 },
      { name: "SQL (Oracle)", level: 70 },
      { name: "Responsive Design", level: 95 },
      { name: "Component Architecture", level: 88 },
    ],
  },
];

const SkillBar = ({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-foreground">{skill.name}</span>
      <span className="text-muted-foreground font-mono">{skill.level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
        style={{
          width: isVisible ? `${skill.level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl glass transition-all duration-700 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="text-lg font-semibold mb-5 text-foreground">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={catIdx * 150 + skillIdx * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
