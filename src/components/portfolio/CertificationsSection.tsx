import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, BookOpen, Database, Globe, Terminal } from "lucide-react";

const certifications = [
  { icon: Globe, title: "Frontend Development", issuer: "Meta", color: "text-primary" },
  { icon: BookOpen, title: "React Basics", issuer: "Coursera", color: "text-primary" },
  { icon: Database, title: "Oracle SQL", issuer: "Great Learning", color: "text-accent" },
  { icon: Terminal, title: "Python Programming", issuer: "Great Learning", color: "text-accent" },
  { icon: Terminal, title: "Crash Course on Python", issuer: "Google", color: "text-primary" },
];

const domainKnowledge = [
  "Supply Chain & Logistics Technology",
  "Enterprise SaaS Product Development",
  "Shipping Cost Optimization & Analytics",
  "Agile Product Delivery & Sprint Management",
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 section-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12">
            Certifications & <span className="text-gradient">Domain Knowledge</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Professional Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:glow-primary transition-all duration-300 hover:-translate-y-0.5"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <cert.icon size={20} className={cert.color} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <Award size={18} className="text-primary/50" />
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Domain Expertise</h3>
            <div className="p-6 rounded-xl glass">
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Beyond technical skills, I bring domain-specific understanding that enables me to build solutions aligned with real business needs — not just code.
              </p>
              <ul className="space-y-3">
                {domainKnowledge.map((domain) => (
                  <li key={domain} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
