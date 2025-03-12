import React, { useEffect, useRef, createElement } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  el?: string;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el = 'p',
  className,
  once = true,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: once });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');
        }, repeatDelay);
        timeoutRef.current = timeout;
      }
    };

    if (inView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (timeout) clearTimeout(timeout);
    };
  }, [controls, inView, repeatDelay]);

  return createElement(
    el,
    { className },
    <>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden="true"
      >
        {textArray.map((line: string, lineIndex: number) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word: string, wordIndex: number) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split('').map((char: string, charIndex: number) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </>
  );
};

export default AnimatedText;