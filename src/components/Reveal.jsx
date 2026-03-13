import { motion } from "framer-motion";

export function Reveal({ children }) {
  // Guardamos el componente en una variable con Mayúscula 
  // para que el linter entienda que es un Componente de React.
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}