import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "infinity_hair_cookie_consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-secondary border border-cream/20 rounded-xl shadow-elegant p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-cream mb-2">
                  Política de Cookies
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, 
                  analizar el tráfico del sitio y personalizar contenido. Al hacer clic en "Aceptar", 
                  consientes el uso de todas las cookies. Puedes gestionar tus preferencias o rechazarlas. 
                  Consulta nuestra{" "}
                  <a href="/privacidad" className="text-gold hover:underline">
                    Política de Privacidad
                  </a>{" "}
                  para más información.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={handleAccept}
                    className="px-6"
                  >
                    Aceptar todas
                  </Button>
                  <Button
                    variant="outline-gold"
                    size="sm"
                    onClick={handleReject}
                    className="px-6"
                  >
                    Solo esenciales
                  </Button>
                </div>
              </div>

              <button
                onClick={handleReject}
                className="flex-shrink-0 text-cream/40 hover:text-cream transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
