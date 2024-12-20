"use client";

import React, { useState } from "react";
import AshwinSantiago from "@/assets/images/ashwin-santiago.jpg";
import AlecWhitten from "@/assets/images/alec-whitten.jpg";
import ReneWells from "@/assets/images/rene-wells.jpg";
import MollieHall from "@/assets/images/mollie-hall.jpg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "./SectionContent";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export const testimonials = [
  {
    quote:
      "Company has completely transformed the way we collaborate. The AI chatbot's ability to automate tasks and provide insightful recommendations has saved us hours each week. It's now an indispensable part of our workflow.",
    name: "Member 1",
    title: "Full stack web",
    image: AshwinSantiago,
  },
  {
    quote:
      "Company integrates effortlessly with our existing tools, and the AI chatbot feels like a natural extension of our team. The responses are impressively accurate, and it's always learning from our interactions.",
    name: "Member 2",
    title: "Backend Developer",
    image: AlecWhitten,
  },
  {
    quote:
      "Company's AI has elevated our customer service to a whole new level. Its real-time responses and personalized recommendations help us address client needs faster than ever. I can't imagine our support team without it.",
    name: "Member 3",
    title: "Full stack dev",
    image: ReneWells,
  },
  {
    quote:
      "I've never seen a tool like Company. It's intuitive, responsive, and has helped us streamline projects that would normally take days. The AI capabilities are unmatched in terms of accuracy and speed.",
    name: "Member 4",
    title: "Full Stack dev",
    image: MollieHall,
  },
];

export const Testimonials = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section id="devs">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <LayoutGroup>
              <motion.div
                className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex flex-col md:flex-row gap-12 md:mx-10 lg:mx-20"
                layout
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"
                />
                <AnimatePresence mode="wait" initial={false}>
                  {testimonials.map((testimonial, index) =>
                    testimonialIndex === index ? (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.5 }}
                        key={testimonial.name}
                        layout
                        className="flex flex-col lg:flex-row gap-12"
                      >
                        <p className="text-xl md:text-2xl font-medium">
                          {testimonial.quote}
                        </p>
                        <cite className="not-italic lg:text-right">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-xl size-28 max-w-none"
                          />
                          <div className="font-bold mt-4">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-2">
                            {testimonial.title}
                          </div>
                        </cite>
                      </motion.blockquote>
                    ) : null
                  )}
                </AnimatePresence>
                <motion.div
                  className="flex gap-2 md:flex-col"
                  layout="position"
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className="size-6 relative isolate inline-flex items-center justify-center"
                      onClick={() => setTestimonialIndex(index)}
                    >
                      {testimonialIndex === index && (
                        <motion.div
                          className="absolute border-gradient size-full rounded-full -z-10"
                          layoutId="testimonial-dot"
                        ></motion.div>
                      )}
                      <div className="size-1.5 bg-gray-200 rounded-full"></div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;

// La prop layout indica a Framer Motion que controle automáticamente las transiciones de posición y tamaño del elemento
// cuando cambian sus propiedades de diseño

// Cita individual (motion.blockquote): Aquí, layout asegura que, además de la animación personalizada de entrada y salida (initial, animate, y exit),
// los cambios en el diseño del bloque de cita (como tamaño o posición) se manejen automáticamente.

// Navegación de puntos (motion.div): Usar layout="position" limita la animación al cambio de posición de este contenedor.
// Esto es útil para evitar recalcular otros cambios (como tamaño).

// Indicador activo (motion.div): Aquí se utiliza layoutId en combinación con LayoutGroup. Esto permite que el indicador de puntos (el "dot" activo)
// transicione suavemente entre posiciones al cambiar de testimonial
