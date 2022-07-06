import { ReactNode } from 'react'
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import { styled } from "../theme.config"

const variants = {
  in: {
    scale: 0.9,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.3
    }
  },
  center: {
    x: 0,
    scale: 0.9,
    transformOrigin: "top",
    transition: {
      duration: 0.3
    }
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.4
    }
  },
  scaleDown: {
    scale: 0.9,
    y: 100,
    transition: {
      duration: 0.3
    }
  },
  out: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.3,
      delay: 0.4
    }
  }
};


const TransitionWrapper = styled("div", {
  zIndex: 1,

  height: "100vh",
  "&:after": {
    content: "",
    display: "block",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(
        135deg,
        $colors$primary 0%,
        $colors$secondary 100%
    )`,
    zIndex: "-1",
  }
})

export const PageTransition = ({ children }): ReactNode => {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <TransitionWrapper>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : null}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionWrapper>
  );
};
