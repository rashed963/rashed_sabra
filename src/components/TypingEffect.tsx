import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  texts: string[];
  className?: string;
  speed?: number;
  pauseMs?: number;
  prefix?: string;
}

const TypingEffect = ({
  texts,
  className = "",
  speed = 60,
  pauseMs = 2000,
  prefix = "",
}: TypingEffectProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseMs);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      const timer = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      return () => clearTimeout(timer);
    }

    if (charIndex === currentText.length) {
      setIsPaused(true);
      return;
    }

    const timer = setTimeout(() => setCharIndex((c) => c + 1), speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, currentText, texts.length, speed, pauseMs]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {prefix && <span className="text-primary/50">{prefix}</span>}
      <span>{currentText.slice(0, charIndex)}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-primary/60 align-middle mr-0.5"
      />
    </motion.div>
  );
};

export default TypingEffect;
