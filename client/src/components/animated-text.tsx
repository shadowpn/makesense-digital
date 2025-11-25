import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  repeat?: boolean;
  initialDelay?: number;
}

export function AnimatedText({
  text,
  className = "",
  staggerDelay = 0.05,
  duration = 0.5,
  repeat = true,
  initialDelay = 0.3,
}: AnimatedTextProps) {
  const letters = text.split("");

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const child = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: duration,
      ease: [0.25, 0.46, 0.45, 0.94],
      repeat: repeat ? Infinity : 0,
      repeatDelay: repeat ? 300 : 0,
    },
  };

  return (
    <motion.div 
      variants={container} 
      initial="initial" 
      animate="animate"
      className={className}
    >
      {letters.map((letter, i) => (
        <motion.span 
          key={i} 
          variants={child} 
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}