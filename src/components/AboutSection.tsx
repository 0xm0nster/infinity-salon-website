import { motion } from "framer-motion";
import { Sparkles, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Excelencia",
    description: "Técnicas avanzadas y productos premium para resultados excepcionales.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Cada cliente es único. Personalizamos cada servicio a tus necesidades.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "Años de experiencia transformando estilos en Granollers.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
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
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-secondary mt-4 mb-6">
              Más que un salón,{" "}
              <span className="italic text-gold-dark">una experiencia</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              En <strong>Infinity Hair</strong>, combinamos arte y técnica para realzar tu belleza natural. 
              Ubicados en el corazón de Granollers, somos tu destino para un cabello saludable y un estilo impecable.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold shadow-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-32 h-0.5 bg-gradient-gold mx-auto mt-16"
          />
        </div>
      </div>
    </section>
  );
}
