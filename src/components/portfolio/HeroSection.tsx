import { useState, useEffect } from "react";
import { ArrowDown, FileText } from "lucide-react";

const roles = ["Frontend Engineer", "React Developer", "UI Specialist"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-16"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4 animate-fade-up">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-up">
          Karthick Ravichandran
        </h1>
        <div className="h-10 flex items-center justify-center mb-6 animate-fade-up delay-100">
          <span className="text-xl sm:text-2xl font-medium text-primary">
            {displayed}
          </span>
          <span className="w-0.5 h-7 bg-primary ml-1 animate-pulse" />
        </div>
        <p className="text-base text-muted-foreground max-w-lg mx-auto mb-8 animate-fade-up delay-200 leading-relaxed">
          Building high-performance web applications with React. Currently
          delivering enterprise logistics solutions at Orchestro AI.
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="/KARTHICK_R.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300"
          >
            <FileText size={18} />
            View Resume
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
