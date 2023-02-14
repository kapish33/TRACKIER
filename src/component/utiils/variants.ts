import { Variants } from 'framer-motion';

type SLIDE_TYPE = 'left' | 'right' | 'up' | 'down' | 'fadeIn' | 'fadeOut';

type AnimateConfigType = {
  [key in SLIDE_TYPE]: Record<string, number>;
};

const animationConfig: AnimateConfigType = {
  up: {
    x: 0,
    y: 40,
  },
  down: {
    x: 0,
    y: -40,
  },
  left: {
    x: -40,
    y: 0,
  },
  right: {
    x: 40,
    y: 0,
  },
  fadeIn: {
    x: 0,
    y: 0,
    initialOpacity: 0,
    animateOpactiy: 1,
  },
  fadeOut: {
    x: 0,
    y: 0,
    initialOpacity: 1,
    animateOpactiy: 0,
  },
};

type IS_HOVER_ANIMATION = 'yes' | 'no';
type HoverAnimationConfig = {
  [key in IS_HOVER_ANIMATION]: Record<string, number>;
};

const hoverAnimationConfig: HoverAnimationConfig = {
  yes: {
    scale: 1.06,
  },
  no: {
    scale: 1,
  },
};

export const whileInViewAnimation = ({
  type = 'up',
  duration = 0.8,
  isHover = false,
}: {
  type: SLIDE_TYPE;
  duration?: number;
  isHover?: boolean;
}): Variants => {
  const {
    x,
    y,
    initialOpacity = 0,
    animateOpactiy = 1,
  } = animationConfig[type];
  return {
    initial: {
      x,
      y,
      opacity: initialOpacity,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: animateOpactiy,
      transition: {
        duration,
        ease: 'easeInOut',
      },
    },
    whileHover: {
      ...hoverAnimationConfig[isHover ? 'yes' : 'no'],
    },
  };
};
