import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Corte elegante cabello oscuro", span: "col-span-1 row-span-2" },
  { src: gallery2, alt: "Balayage rubio profesional", span: "col-span-1 row-span-1" },
  { src: gallery3, alt: "Corte masculino moderno", span: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Peinado de novia elegante", span: "col-span-1 row-span-2" },
  { src: gallery5, alt: "Coloración cobriza vibrante", span: "col-span-1 row-span-1" },
  { src: gallery6, alt: "Rizos naturales definidos", span: "col-span-1 row-span-1" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
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
              Nuestra Galería
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-secondary mt-4 mb-6">
              Trabajos{" "}
              <span className="italic text-gold-dark">Destacados</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre algunos de nuestros trabajos más recientes
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${image.span} relative overflow-hidden rounded-lg group cursor-pointer`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-cream font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
