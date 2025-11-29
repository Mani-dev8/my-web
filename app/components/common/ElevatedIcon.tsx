"use client";
import React, { ReactNode } from "react";
import { TrendingUp } from "lucide-react";

type ElevatedIconProps = {
  size?: number | string;
  icon?: ReactNode;
  className?: string;
  color?: string;
};

const toCssSize = (size?: number | string) =>
  typeof size === "number" ? `${size}px` : size ?? "94px";

const colorMap: Record<string, string> = {
  pink: "from-pink-400 via-pink-500 to-pink-600",
  blue: "from-blue-400 via-blue-500 to-blue-600",
  violet: "from-purple-400 via-purple-500 to-purple-600",
};

function ElevatedIcon({
  size,
  icon,
  className,
  color = "pink",
}: ElevatedIconProps) {
  const dimension = toCssSize(size);
  const bgColor = colorMap[color];
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        className ?? ""
      }`}
      style={{ width: dimension, height: dimension }}
    >
      <div
        className={`relative flex h-full w-full items-center justify-center rounded-[20px] bg-gradient-to-br ${bgColor} shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-6px_10px_rgba(0,0,0,0.15)] ring-1 ring-white/20`}
      >
        {/* 3. KEPT: Specular highlight (the white shine on top-left) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),rgba(255,255,255,0)_55%)]"
          aria-hidden
        />

        {/* 4. KEPT: Top linear sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_45%)] mix-blend-screen"
          aria-hidden
        />

        <div className="relative drop-shadow-sm">
          {icon ?? (
            <TrendingUp className="h-10 w-10 text-white" strokeWidth={3} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ElevatedIcon;
