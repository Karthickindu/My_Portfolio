import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Karthick consistently delivers clean, well-structured code. His ability to translate complex Figma designs into production-ready interfaces is exceptional for someone at his level.",
    name: "Arun Prakash",
    role: "Senior Frontend Lead",
    company: "Orchestro AI",
  },
  {
    quote: "What sets Karthick apart is his ownership mentality. He doesn't just build features — he understands the business impact and optimizes accordingly. A reliable team player.",
    name: "Priya Nair",
    role: "Product Manager",
    company: "Orchestro AI",
  },
  {
    quote: "His work on the DIM Optimizer was impressive. He took a complex requirement and delivered an intuitive interface that our enterprise clients immediately adopted.",
    name: "Vikram Srinivasan",
    role: "Engineering Manager",
    company: "Orchestro AI",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12">
            What People <span className="text-gradient">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`p-6 rounded-xl glass hover:glow-primary transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
