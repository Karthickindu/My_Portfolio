import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-primary mb-6">
            Frontend Engineer
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up delay-100">
          Building Scalable Solutions{" "}
          <span className="text-gradient">with Precision</span>{" "}
          & Performance
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
          I engineer high-performance user interfaces that drive business outcomes.
          Specializing in React ecosystems, I transform complex requirements into
          seamless digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105"
          >
            <ExternalLink size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass font-medium text-foreground hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>
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
