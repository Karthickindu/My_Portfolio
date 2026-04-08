import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Building maintainable, scalable codebases with component-driven design patterns.",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Optimizing load times and runtime efficiency for exceptional user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Translating complex business requirements into intuitive, elegant solutions.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating cross-functionally with design, product, and backend teams.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
            Crafting Digital Experiences{" "}
            <span className="text-gradient">That Matter</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-5 transition-all duration-700 delay-200 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a frontend engineer with a passion for building interfaces that don't just look great — they perform. At <strong className="text-foreground">Orchestro AI</strong>, I've been instrumental in developing and shipping production-grade applications that optimize logistics operations for enterprise clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines deep technical expertise in the React ecosystem with a keen eye for design fidelity. I specialize in transforming Figma mockups into pixel-perfect, accessible, and performant UIs — working closely with cross-functional teams to deliver features that directly impact business KPIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's architecting scalable state management with Redux Toolkit, implementing complex data visualizations, or refactoring codebases for maintainability — I take ownership and deliver results.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="group p-5 rounded-xl glass hover:glow-primary transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <item.icon className="text-primary mb-3" size={24} />
                <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
