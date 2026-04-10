import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1];

function PageTransition({ children }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
