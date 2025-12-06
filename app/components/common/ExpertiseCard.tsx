import clsx from "clsx";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageAlt: string;
  imgSrc: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
};

function ExpertiseCard({
  title,
  description,
  imageAlt,
  imgSrc,
  index,
  activeIndex,
  setActiveIndex,
}: Props) {
  const isActive = activeIndex === index;

  return (
    <div
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(0)} // RESET TO FIRST CARD
      className={clsx(
        "group relative w-full transition-all duration-500 overflow-hidden rounded-3xl shadow-xl",
        isActive ? "lg:w-120" : "lg:w-2/12"
      )}
    >
      <Image
        height={200}
        width={200}
        src={imgSrc}
        alt={imageAlt}
        className="h-72 w-full object-cover md:h-80 lg:h-120"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div
        className={`
          absolute inset-0 flex items-end p-6 md:p-8 
          transition-opacity duration-200 hover:duration-900
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExpertiseCard;
