"use client";
import { motion, useInView, Variants } from "framer-motion";
import * as React from "react";

export default function TextTranslate({
  direction,
  children,
  className = "",
  staggerChildren = 0.2,
  delay = 0,
  disableAnimation = false,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
  disableAnimation?: boolean;
}) {
  if (disableAnimation) {
    return (
      <div className={className}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? (
            <div className="overflow-hidden py-2">{child}</div>
          ) : (
            child
          )
        )}
      </div>
    );
  }

  const FADE_DOWN: Variants = {
    show: {
      y: 0,
      transition: { type: "tween", duration: 0.5, ease: "easeOut" },
    },
    hidden: {
      y: direction === "down" ? "-140%" : "120%",
    },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <div className="overflow-hidden py-2">
            <motion.div variants={FADE_DOWN}>{child}</motion.div>
          </div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
