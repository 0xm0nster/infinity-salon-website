import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const schedule = [
  { day: "Martes - Miércoles", hours: "14:00 - 21:00" },
  { day: "Jueves", hours: "9:00 - 13:00 / 15:00 - 19:00" },
  { day: "Viernes", hours: "9:00 - 19:00" },
  { day: "Sábado", hours: "8:00 - 15:00" },
  { day: "Domingo - Lunes", hours: "Cerrado" },
];

export function ContactSection({
  onBookingClick,
}: {
  onBookingClick: () => void;
}) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-cream mt-4 mb-6">
              Encuéntranos en{" "}
              <span className="italic text-gold-light">Granollers</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-1">
                    Dirección
                  </h3>
                  <p className="text-cream/70">
                    C/ Emili Botey i Alsina, 9<br />
                    08402 Granollers, Barcelona
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-1">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+34938000000"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    +34 938 00 00 00
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@infinityhair.es"
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    info@infinityhair.es
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="gold"
                size="xl"
                onClick={onBookingClick}
                className="mt-6"
              >
                Reservar Cita Ahora
              </Button>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal/50 border border-cream/10 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="font-display text-xl font-semibold text-cream">
                  Horario de Apertura
                </h3>
              </div>
              <div className="space-y-4">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-3 border-b border-cream/10 last:border-b-0"
                  >
                    <span className="text-cream/80 font-medium">{item.day}</span>
                    <span
                      className={`text-sm ${
                        item.hours === "Cerrado"
                          ? "text-cream/40"
                          : "text-gold"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 h-80 rounded-lg overflow-hidden border border-cream/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.2!2d2.2870!3d41.6050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c8c0d0c0c0c0%3A0x0!2sCarrer%20d&#39;Emili%20Botey%20i%20Alsina%2C%209%2C%2008402%20Granollers%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Infinity Hair Granollers"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
