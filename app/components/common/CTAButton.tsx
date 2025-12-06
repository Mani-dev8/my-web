"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
  inverse?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

function CTAButton({ title, inverse = false, onClick, type }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  // Color configuration based on inverse prop
  const colors = {
    bg: inverse ? "#FFFFFF" : "#000000",
    hoverBg: inverse ? "#000000" : "#FFFFFF",
    text: inverse ? "#000000" : "#FFFFFF",
    hoverText: inverse ? "#FFFFFF" : "#000000",
    iconCircleBg: inverse ? "#000000" : "#FFFFFF",
    iconCircleHoverBg: inverse ? "#FFFFFF" : "#000000",
    icon: inverse ? "#FFFFFF" : "#000000",
    iconHover: inverse ? "#000000" : "#FFFFFF",
  };

  return (
    <motion.button
      className="relative flex items-center justify-between pl-8 pr-1 py-1 sm:pr-2 md:py-2 rounded-full cursor-pointer overflow-hidden group border"
      style={{
        backgroundColor: colors.bg,
      }}
      type={type}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute top-0 bottom-0 right-0 rounded-full pointer-events-none"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 1,
        }}
        style={{
          zIndex: 0,
          backgroundColor: colors.hoverBg,
        }}
      />

      {/* Text Content */}
      <motion.span
        className="relative z-10 text-base md:text-lg font-medium tracking-wide pr-3"
        animate={{ color: isHovered ? colors.hoverText : colors.text }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.span>

      {/* Icon Container Circle */}
      <motion.div
        className="relative z-10 min-w-12 flex items-center justify-center rounded-full"
        style={{
          width: "48px",
          height: "48px",
        }}
        animate={{
          backgroundColor: isHovered
            ? colors.iconCircleHoverBg
            : colors.iconCircleBg,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon Animation */}
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="arrow-hover"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight
                size={24}
                color={colors.iconHover}
                strokeWidth={2.5}
              />
            </motion.div>
          ) : (
            <motion.div
              key="arrow-default"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={24} color={colors.icon} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}

export default CTAButton;
