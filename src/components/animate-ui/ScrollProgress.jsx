import { createContext, useContext } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import styles from './ScrollProgress.module.css';

const ScrollProgressContext = createContext(null);

function ScrollProgressProvider({ children, global = false, transition }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 40,
    bounce: 0,
    ...transition,
  });

  return (
    <ScrollProgressContext.Provider value={{ global, progress }}>
      {children}
    </ScrollProgressContext.Provider>
  );
}

function ScrollProgress() {
  const context = useContext(ScrollProgressContext);

  if (!context) {
    throw new Error('ScrollProgress must be used within ScrollProgressProvider.');
  }

  return (
    <div className={styles.track} aria-hidden="true">
      <motion.div className={styles.indicator} style={{ scaleX: context.progress }} />
    </div>
  );
}

export { ScrollProgress, ScrollProgressProvider };
