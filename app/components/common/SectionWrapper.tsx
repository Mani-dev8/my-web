import { cn } from "@/lib/cn";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  showBg?: boolean;
};

function SectionWrapper({ children, showBg, className }: Props) {
  return (
    <section className={`${showBg ? "bg-zinc-100" : "bg-white"}`}>
      <div
        className={cn(
          `max-w-7xl relative mx-auto py-16 flex flex-col space-y-4 items-center justify-center lg:items-start px-2 md:px-8 ${className}`
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
