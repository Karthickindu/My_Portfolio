import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section id="certifications" className="py-20 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center justify-between p-4 rounded-lg glass"
              >
                <span className="font-medium text-foreground text-sm">{cert.title}</span>
                <span className="text-xs text-muted-foreground">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
