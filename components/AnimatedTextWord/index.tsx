import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedTextWordProps = {
  text: string;
  className?: string;
};

const AnimatedTextWord: React.FC<AnimatedTextWordProps> = ({ text, className }) => {
  const words = text.split(" ");
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: -12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={ className || "flex flex-wrap justify-center"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "10px" }}
          key={index}
        >
          {word} 
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
