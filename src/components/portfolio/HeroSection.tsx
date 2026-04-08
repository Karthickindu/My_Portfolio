import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 animate-fade-up">
          Karthick R
        </h1>
        <p className="text-lg text-primary font-medium mb-6 animate-fade-up delay-100">
          Frontend Engineer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
          I build high-performance web applications with React. Currently at Orchestro AI, delivering enterprise logistics solutions.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 animate-fade-up delay-300"
        >
          View Projects
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
