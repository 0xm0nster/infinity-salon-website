import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal border-t border-cream/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="font-display text-2xl font-semibold text-cream">
              Infinity<span className="text-gradient-gold"> Hair</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-cream/40 text-sm">
              © {currentYear} Infinity Hair Granollers. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
