import { motion, AnimatePresence } from "framer-motion";
import { X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-cream rounded-xl shadow-elegant z-50 overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-secondary px-6 py-5 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-gold" />
                <h2 className="font-display text-xl font-semibold text-cream">
                  Política de Privacidad
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-cream/60 hover:text-cream transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="prose prose-sm max-w-none text-secondary">
                <p className="text-muted-foreground text-sm mb-4">
                  Última actualización: Enero 2026
                </p>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  1. Responsable del Tratamiento
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Infinity Hair Granollers</strong><br />
                  C/ Emili Botey i Alsina, 9<br />
                  08402 Granollers, Barcelona<br />
                  Email: info@infinityhair.es
                </p>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  2. Datos que Recopilamos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Recopilamos los siguientes datos personales cuando realizas una reserva:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-1">
                  <li>Nombre completo</li>
                  <li>Número de teléfono</li>
                  <li>Preferencias de servicio y horario</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  3. Finalidad del Tratamiento
                </h3>
                <p className="text-muted-foreground mb-4">
                  Utilizamos tus datos para:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-1">
                  <li>Gestionar y confirmar tus citas</li>
                  <li>Contactarte para recordatorios de citas</li>
                  <li>Mejorar nuestros servicios</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  4. Base Legal
                </h3>
                <p className="text-muted-foreground mb-4">
                  El tratamiento de tus datos se basa en:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-1">
                  <li>Tu consentimiento expreso al realizar una reserva</li>
                  <li>La ejecución del contrato de prestación de servicios</li>
                  <li>El cumplimiento de obligaciones legales</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  5. Conservación de Datos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Conservamos tus datos personales durante el tiempo necesario para la prestación 
                  del servicio y posteriormente durante los plazos legales establecidos.
                </p>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  6. Tus Derechos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Conforme al RGPD, tienes derecho a:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-1">
                  <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                  <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                  <li><strong>Limitación:</strong> Restringir el tratamiento en ciertos casos</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en formato electrónico</li>
                  <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Para ejercer estos derechos, contacta con nosotros en info@infinityhair.es
                </p>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  7. Cookies
                </h3>
                <p className="text-muted-foreground mb-4">
                  Utilizamos cookies técnicas y de análisis para mejorar tu experiencia. 
                  Puedes gestionar las preferencias de cookies en cualquier momento desde 
                  nuestro banner de cookies.
                </p>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  8. Seguridad
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas técnicas y organizativas adecuadas para proteger 
                  tus datos personales contra acceso no autorizado, pérdida o destrucción.
                </p>

                <h3 className="font-display text-lg font-semibold text-secondary mt-6 mb-3">
                  9. Autoridad de Control
                </h3>
                <p className="text-muted-foreground mb-4">
                  Si consideras que tus derechos no han sido atendidos correctamente, 
                  puedes presentar una reclamación ante la Agencia Española de Protección 
                  de Datos (AEPD) en www.aepd.es
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border flex-shrink-0">
              <Button
                variant="gold"
                onClick={onClose}
                className="w-full"
              >
                Entendido
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
