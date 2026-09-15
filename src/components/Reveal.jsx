import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({
  as: Tag = "div",
  className = "",
  delay = 0,
  style,
  children,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={`reveal ${className}`}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut", delay: shouldReduceMotion ? 0 : delay / 1000 }}
      style={style}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
