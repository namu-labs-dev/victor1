// components/AnimatedComponent.tsx
import { useEffect, type ReactNode } from "react";
import { useAnimation, motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedComponentProps = {
  children: ReactNode;
  animation: Variants;
};

const AnimatedComponent = (props: AnimatedComponentProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedComponent;
