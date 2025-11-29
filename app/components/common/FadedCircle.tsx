"use client";
import { motion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";

type FadedCircleProps = {
  size?: number | string;
  position?: Partial<Pick<CSSProperties, "top" | "left" | "right" | "bottom">>;
  color?: {
    from?: string;
    to?: string;
  };
  className?: string;
};

const DEFAULT_SIZE = "24rem";
const DEFAULT_POSITION: CSSProperties = {
  top: "20%",
  left: "30%",
};
const DEFAULT_COLORS = {
  from: "rgba(236, 72, 153, 0.6)",
  to: "rgba(236, 72, 153, 0.2)",
};

const getResolvedPosition = (
  position?: FadedCircleProps["position"]
): CSSProperties => {
  // Avoid conflicting top/bottom or left/right when custom positions are provided.
  const hasCustomTop = position?.top !== undefined;
  const hasCustomBottom = position?.bottom !== undefined;
  const hasCustomLeft = position?.left !== undefined;
  const hasCustomRight = position?.right !== undefined;

  return {
    top: hasCustomTop
      ? position?.top
      : !hasCustomBottom
      ? DEFAULT_POSITION.top
      : undefined,
    bottom: hasCustomBottom ? position?.bottom : undefined,
    left: hasCustomLeft
      ? position?.left
      : !hasCustomRight
      ? DEFAULT_POSITION.left
      : undefined,
    right: hasCustomRight ? position?.right : undefined,
  };
};

function formatSize(size?: number | string) {
  if (typeof size === "number") {
    return `${size}px`;
  }
  return size ?? DEFAULT_SIZE;
}

function FadedCircle({ size, position, color, className }: FadedCircleProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCircle = () => {
      setOffset({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      });
    };

    const interval = setInterval(moveCircle, 4000);
    return () => clearInterval(interval);
  }, []);

  const startColor = color?.from ?? DEFAULT_COLORS.from;
  const middleColor = color?.to ?? color?.from ?? DEFAULT_COLORS.to;

  const circleStyle: CSSProperties = {
    width: formatSize(size),
    height: formatSize(size),
    background: `radial-gradient(circle, ${startColor} 0%, ${middleColor} 50%, transparent 100%)`,
    ...getResolvedPosition(position),
  };

  return (
    <motion.div
      className={`absolute rounded-full opacity-40 blur-3xl pointer-events-none${
        className ? ` ${className}` : ""
      }`}
      style={circleStyle}
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
      }}
    />
  );
}

export default FadedCircle;
