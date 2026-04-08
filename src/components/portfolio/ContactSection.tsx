import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-10 section-alt">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:karthickravi0311@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg glass text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} className="shrink-0" />
              <span className="text-sm">karthickravi0311@gmail.com</span>
            </a>
            <a
              href="tel:+916380241393"
              className="flex items-center gap-3 p-4 rounded-lg glass text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="shrink-0" />
              <span className="text-sm">+91 6380241393</span>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-lg glass text-muted-foreground">
              <MapPin size={18} className="shrink-0" />
              <span className="text-sm">Ooty, The Nilgiris, India</span>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/karthick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/karthick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:karthickravi0311@gmail.com"
              className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
