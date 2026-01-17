import { motion } from "framer-motion";
import { Scissors, Palette, Droplets, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    title: "Corte Mujer / Hombre",
    description:
      "Cortes personalizados que realzan tu estilo y personalidad. Técnicas modernas para looks contemporáneos.",
    price: "Desde 15€",
  },
  {
    icon: Palette,
    title: "Coloración y Mechas",
    description:
      "Balayage, highlights, tintes completos. Transformamos tu color con productos de alta calidad.",
    price: "Desde 35€",
  },
  {
    icon: Droplets,
    title: "Tratamientos Capilares",
    description:
      "Hidratación, keratina, reparación profunda. Devuelve la vida y el brillo a tu cabello.",
    price: "Desde 25€",
  },
  {
    icon: Crown,
    title: "Peinados y Estilismo",
    description:
      "Peinados para eventos especiales, bodas, y ocasiones únicas. Crea el look perfecto.",
    price: "Desde 30€",
  },
];

export function ServicesSection({
  onBookingClick,
}: {
  onBookingClick: () => void;
}) {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
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
              Nuestros Servicios
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-cream mt-4 mb-6">
              Servicios{" "}
              <span className="italic text-gold-light">Profesionales</span>
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios para cuidar y transformar tu cabello
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-charcoal/50 border border-cream/10 rounded-lg p-8 hover:bg-charcoal/80 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold text-cream group-hover:text-gold-light transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-gold font-semibold text-sm">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="gold" size="xl" onClick={onBookingClick}>
              Reservar Cita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
