import { Children, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const motionTags = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  footer: motion.footer,
  form: motion.form,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  header: motion.header,
  li: motion.li,
  main: motion.main,
  nav: motion.nav,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
};

const ease = [0.22, 1, 0.36, 1];

function resolveSlideOffset(slide) {
  if (!slide) {
    return {};
  }

  if (slide === true || slide === 'up') {
    return { y: 28 };
  }

  if (slide === 'down') {
    return { y: -28 };
  }

  if (slide === 'left') {
    return { x: 28 };
  }

  if (slide === 'right') {
    return { x: -28 };
  }

  if (typeof slide === 'object') {
    return slide;
  }

  return {};
}

function resolveZoomScale(zoom) {
  if (!zoom) {
    return undefined;
  }

  if (zoom === true) {
    return 0.94;
  }

  if (typeof zoom === 'number') {
    return zoom;
  }

  return 0.94;
}

function resolveBlurValue(blur) {
  if (!blur) {
    return undefined;
  }

  if (blur === true) {
    return '10px';
  }

  if (typeof blur === 'number') {
    return `${blur}px`;
  }

  return blur;
}

function buildStates({ blur, fade, initialOpacity, opacity, reducedMotion, slide, zoom }) {
  const initial = {};
  const animate = {};

  if (fade !== false) {
    initial.opacity = initialOpacity;
    animate.opacity = opacity;
  }

  if (!reducedMotion) {
    const slideOffset = resolveSlideOffset(slide);
    const zoomScale = resolveZoomScale(zoom);
    const blurValue = resolveBlurValue(blur);

    if (slideOffset.x !== undefined) {
      initial.x = slideOffset.x;
      animate.x = 0;
    }

    if (slideOffset.y !== undefined) {
      initial.y = slideOffset.y;
      animate.y = 0;
    }

    if (zoomScale !== undefined) {
      initial.scale = zoomScale;
      animate.scale = 1;
    }

    if (blurValue) {
      initial.filter = `blur(${blurValue})`;
      animate.filter = 'blur(0px)';
    }
  }

  return { animate, initial };
}

export function Effect({
  animateWhenInView = false,
  as = 'div',
  blur = false,
  children,
  className,
  delay = 0,
  duration = 0.7,
  fade = true,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  initialOpacity = 0,
  opacity = 1,
  slide = false,
  style,
  zoom = false,
  ...props
}) {
  const Component = motionTags[as] || motion.div;
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    margin: inViewMargin,
    once: inViewOnce,
  });

  const shouldWaitForView = inView || animateWhenInView;
  const { animate, initial } = buildStates({
    blur,
    fade,
    initialOpacity,
    opacity,
    reducedMotion,
    slide,
    zoom,
  });

  return (
    <Component
      className={className}
      initial={initial}
      animate={shouldWaitForView ? (isInView ? animate : initial) : animate}
      ref={ref}
      style={style}
      transition={{
        delay,
        duration: reducedMotion ? 0.01 : duration,
        ease,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Effects({ children, holdDelay = 0, step = 0.1, ...props }) {
  return Children.map(children, (child, index) => {
    if (child === null || child === undefined) {
      return child;
    }

    return (
      <Effect delay={holdDelay + index * step} key={child.key ?? `effect-${index}`} {...props}>
        {child}
      </Effect>
    );
  });
}

export function Fade(props) {
  return <Effect fade {...props} />;
}

export function Slide(props) {
  return <Effect fade slide="up" {...props} />;
}

export function Blur(props) {
  return <Effect blur fade {...props} />;
}

export function Zoom(props) {
  return <Effect fade zoom {...props} />;
}

