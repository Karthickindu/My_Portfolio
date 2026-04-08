import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Job Portal",
    description: "Job discovery platform with search, filtering, and application tracking.",
    tech: ["React.js", "CSS Modules", "React Router"],
    github: "#",
    demo: "#",
  },
  {
    title: "Refund Finder",
    description: "Analytics dashboard that helps logistics companies identify and recover refunds from carrier billing errors.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Recharts"],
    github: "#",
    demo: "#",
  },
  {
    title: "DIM Optimizer",
    description: "Shipping cost optimizer for comparing box sizes and carrier rates in real time.",
    tech: ["React.js", "Chakra UI", "Redux Toolkit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Parcel Intercept",
    description: "In-transit parcel rerouting system with real-time status tracking.",
    tech: ["React.js", "Tailwind CSS", "Redux Toolkit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Hungry Hub",
    description: "Food ordering app with menu browsing, cart management, and real-time pricing.",
    tech: ["React.js", "CSS3", "React Hooks"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`p-5 rounded-xl glass transition-all duration-500 hover:glow-primary hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                <div className="flex gap-2 shrink-0 ml-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                  </a>
                  <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded-md bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
