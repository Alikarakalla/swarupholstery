import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import styles from './Shine.module.css';

function Shine({
  children,
  className = '',
  color = 'currentColor',
  delay = 0,
  deg = -15,
  duration = 1200,
  enable = true,
  enableOnHover = false,
  enableOnTap = false,
  loop = false,
  loopDelay = 0,
  opacity = 0.3,
  style,
  ...props
}) {
  const reducedMotion = useReducedMotion();
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    if (!enable || reducedMotion || enableOnHover || enableOnTap || loop) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setBurstKey(1);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [delay, enable, enableOnHover, enableOnTap, loop, reducedMotion]);

  const triggerBurst = () => {
    if (!enable || reducedMotion) {
      return;
    }

    setBurstKey((current) => current + 1);
  };

  const mergedStyle = {
    '--shine-color': color,
    '--shine-opacity': opacity,
    '--shine-rotation': `${deg}deg`,
    ...style,
  };

  return (
    <span
      className={`${styles.root} ${className}`.trim()}
      onMouseEnter={enableOnHover ? triggerBurst : undefined}
      onPointerDown={enableOnTap ? triggerBurst : undefined}
      style={mergedStyle}
      {...props}
    >
      <span className={styles.content}>{children}</span>

      {enable && !reducedMotion ? (
        loop && !enableOnHover && !enableOnTap ? (
          <motion.span
            animate={{ x: ['-170%', '170%'] }}
            className={styles.sheen}
            transition={{
              delay: delay / 1000,
              duration: duration / 1000,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: loopDelay / 1000,
            }}
          />
        ) : burstKey > 0 ? (
          <motion.span
            animate={{ x: '170%' }}
            className={styles.sheen}
            initial={{ x: '-170%' }}
            key={burstKey}
            transition={{
              duration: duration / 1000,
              ease: 'easeInOut',
            }}
          />
        ) : null
      ) : null}
    </span>
  );
}

export default Shine;
