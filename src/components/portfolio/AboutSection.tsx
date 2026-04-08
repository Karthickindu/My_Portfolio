import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-10 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            I am a frontend engineer at Orchestro AI, where I build production-grade applications for enterprise logistics clients. I specialize in React, Redux Toolkit, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I focus on writing clean, maintainable code and translating design mockups into responsive, performant interfaces. I enjoy working in cross-functional teams and delivering features that create real business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
