import { cn } from "@/lib/cn";
import React from "react";

type Props = {
  text: string;
  className?: string;
};

function Description({ text, className }: Props) {
  return (
    <p
      className={cn(
        `text-zinc-500 text-sm max-w-96 lg:text-base lg:max-w-160 lg:text-start text-center leading-tight ${className}`
      )}
    >
      {text}
    </p>
  );
}

export default Description;
