import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award } from "lucide-react";

const certifications = [
  { title: "Frontend Development", issuer: "Meta" },
  { title: "React Basics", issuer: "Coursera" },
  { title: "Oracle SQL", issuer: "Great Learning" },
  { title: "Python Programming", issuer: "Great Learning" },
  { title: "Crash Course on Python", issuer: "Google" },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-16 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className={`flex items-center gap-3 p-3.5 rounded-lg glass hover:-translate-y-0.5 transition-all duration-300 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <Award size={16} className="text-primary shrink-0" />
                <div>
                  <span className="text-sm font-medium text-foreground block">{cert.title}</span>
                  <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
