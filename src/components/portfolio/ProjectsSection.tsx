import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, Package, Search, Truck, UtensilsCrossed } from "lucide-react";

const projects = [
  {
    icon: Search,
    title: "Refund Finder",
    tagline: "Enterprise Refund Intelligence Dashboard",
    problem: "Logistics companies were losing significant revenue due to undetected carrier billing errors and missed refund opportunities across thousands of daily shipments.",
    solution: "Built an interactive analytics dashboard with dynamic data transformations, enabling users to identify, track, and recover refunds through visual insights and automated detection.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Recharts", "REST APIs"],
    impact: "Enabled clients to recover previously undetected refund opportunities, improving revenue recovery workflows significantly.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    icon: Package,
    title: "DIM Optimizer",
    tagline: "Multi-Carrier Shipping Cost Optimizer",
    problem: "Shippers struggled with selecting optimal box sizes for products, leading to inflated dimensional weight charges across multiple carriers.",
    solution: "Developed an intuitive UI for product selection, box size comparison, and real time cost optimization across carriers, streamlining the packaging decision process.",
    tech: ["React.js", "Chakra UI", "Redux Toolkit", "REST APIs"],
    impact: "Reduced manual shipping cost calculations by ~40%, enabling faster and more cost-effective packaging decisions.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    icon: Truck,
    title: "Parcel Intercept",
    tagline: "In-Transit Parcel Rerouting System",
    problem: "Enterprise shippers lacked the ability to modify delivery destinations for parcels already in transit, resulting in failed deliveries and customer dissatisfaction.",
    solution: "Built a feature-rich interface for rerouting parcels mid-shipment with real-time status tracking and carrier integration.",
    tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    impact: "Improved operational flexibility for enterprise shippers, reducing failed delivery rates and enhancing end-customer satisfaction.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    icon: Search,
    title: "Job Portal",
    tagline: "Modern Job Discovery Platform",
    problem: "Job seekers needed a streamlined platform to discover, filter, and apply to relevant opportunities without navigating cluttered interfaces.",
    solution: "Developed a responsive job portal with advanced search, filtering, resume upload, and application tracking, delivering a clean, user friendly experience.",
    tech: ["React.js", "CSS Modules", "React Router"],
    impact: "Implemented intuitive search and filter functionality, significantly improving job discovery efficiency and user engagement.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    icon: UtensilsCrossed,
    title: "Hungry Hub",
    tagline: "Food Ordering & Cart Management App",
    problem: "Users needed a fast, intuitive way to browse restaurant menus, customize orders, and manage their cart with real-time pricing.",
    solution: "Built a responsive food ordering application with menu browsing, dynamic cart management, and real-time total price calculation.",
    tech: ["React.js", "CSS3", "React Hooks"],
    impact: "Delivered smooth UX across devices with reusable component architecture, improving interaction speed and order completion rates.",
    github: "#",
    demo: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A selection of projects I've built — from enterprise logistics platforms to consumer-facing applications.
          </p>
        </div>

        <div className="space-y-8">
          {projects.filter((p) => p.featured).map((project, idx) => (
            <div
              key={project.title}
              className={`group grid md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl glass hover:glow-primary transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <project.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.tagline}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Challenge</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Solution</span>
                    <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Impact</span>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">{project.impact}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg glass hover:bg-secondary/80 text-foreground transition-colors"
                  >
                    <Github size={16} /> Source Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.filter((p) => !p.featured).map((project, idx) => (
            <div
              key={project.title}
              className={`group p-6 rounded-xl glass hover:glow-primary transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(idx + 2) * 200}ms` }}
            >
              <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4">
                <project.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{project.tagline}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.solution}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
