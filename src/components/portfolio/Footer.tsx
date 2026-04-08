import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Karthick R. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Built with <Heart size={14} className="text-primary" /> using React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
