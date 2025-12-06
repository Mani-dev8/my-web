"use client";
import Image from "next/image";
import CTAButton from "../common/CTAButton";
import Description from "../common/Description";
import ElevatedIcon from "../common/ElevatedIcon";
import FadedCircle from "../common/FadedCircle";
import SectionWrapper from "../common/SectionWrapper";
import {
  CogAutomationIcon,
  CurlyLoopIcon,
  DoubleCurlyIcon,
  HeroStarIcon,
  RocketIcon,
} from "../icons";
import TextTranslate from "../common/TextTranslate";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RenderSectionProps = {
  prefixText: string;
  suffixText: string;
  Icon: React.ReactNode;
  color: string;
  primaryText: string;
  description: string;
  delay?: number;
  disableAnimation?: boolean;
};

const RenderSection = ({
  prefixText,
  suffixText,
  Icon,
  primaryText,
  color,
  description,
  delay = 0,
  disableAnimation = false,
}: RenderSectionProps) => {
  return (
    <TextTranslate
      direction="up"
      className="space-y-2 mb-4 md:mb-4 lg:mb-8"
      delay={delay}
      disableAnimation={disableAnimation}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:leading-18 xl:text-[82px] xl:leading-18 font-semibold md:font-medium text-center max-w-md lg:max-w-6xl pb-3">
        {prefixText} {Icon}&nbsp;
        {suffixText} <span className={`${color}`}>{primaryText}</span>.
      </h1>
      <Description className="mx-auto md:text-center" text={description} />
    </TextTranslate>
  );
};

const fadeAnimationOption = (type: "up" | "down" | "static") => {
  return {
    initial: {
      y: type === "static" ? 0 : type === "down" ? -80 : 80,
      opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
};

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMounted = useRef(false);
  const hasLoopedOnce = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % heroData.length;
        if (next === 0 && prev !== 0) {
          hasLoopedOnce.current = true;
        }
        return next;
      });
    }, 4000);
    hasMounted.current = true;

    return () => clearInterval(interval);
  }, []);

  const heroTextDelay = hasMounted.current ? 0 : 0.8;
  const skipFirstHeroAnimation = currentIndex === 0 && !hasLoopedOnce.current;
  return (
    <SectionWrapper className="overflow-hidden max-w-none relative h-screen min-h-200 text-center lg:items-center">
      <motion.div
        {...fadeAnimationOption("down")}
        className="flex flex-col space-y-4 items-center justify-center"
      >
        {/* Main Content Start*/}
        <AnimatePresence mode="wait">
          <RenderSection
            key={currentIndex}
            delay={heroTextDelay}
            disableAnimation={skipFirstHeroAnimation}
            {...heroData[currentIndex]}
          />
        </AnimatePresence>

        <CTAButton
          title="Let’s Connect"
          onClick={() => {
            const target = document.getElementById("get-in-touch");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          type="button"
        />
        {/* Main Content End */}
      </motion.div>

      <motion.div
        {...fadeAnimationOption("static")}
        className="absolute top-0 w-full h-full"
      >
        {/* Static Elements */}
        <CurlyLoopIcon className="top-[10%] left-[15%] absolute z-10 size-10 rotate-45" />
        <CurlyLoopIcon className="top-[20%] right-[15%] absolute z-10 size-16" />
        <DoubleCurlyIcon className="bottom-[20%] left-[15%] absolute z-10 size-16" />
        <DoubleCurlyIcon className="bottom-[15%] right-[15%] absolute z-10 size-16 -scale-x-100" />
        <HeroStarIcon className="absolute bottom-[10%] right-1/2" />
      </motion.div>

      <FadedCircle position={{ top: "-5%", left: "10%" }} size={200} />
      <FadedCircle
        position={{ bottom: "-10%", right: "-20%" }}
        size={500}
        color={{
          from: "rgba(114, 39, 219, 0.6)",
          to: "rgba(114, 39, 219, 0.2)",
        }}
      />
      <motion.div
        {...fadeAnimationOption("up")}
        className="w-full absolute bottom-0"
      >
        <Image
          alt="hero1 image"
          height={90}
          width={180}
          className="h-40 w-46 sm:h-48 sm:w-56 md:h-[14.4rem] md:w-[16.8rem] lg:h-[17.28rem] lg:w-[20.16rem] object-cover rotate-15 rounded-lg  md:rounded-2xl lg:rounded-3xl overflow-hidden border absolute -bottom-10 lg:-bottom-20 -left-10 lg:left-1/5"
          src={"/home/hero1.png"}
        />
        <Image
          alt="hero1 image"
          height={90}
          width={180}
          className="h-40 w-46 sm:h-48 sm:w-56 md:h-[14.4rem] md:w-[16.8rem] lg:h-[17.28rem] lg:w-[20.16rem] object-cover -rotate-15 rounded-lg  md:rounded-2xl lg:rounded-3xl overflow-hidden border absolute -bottom-10 lg:-bottom-20 -right-10 lg:right-1/5"
          src={"/home/hero2.png"}
        />
      </motion.div>
    </SectionWrapper>
  );
}

export default HeroSection;

const heroData = [
  {
    prefixText: "Where",
    suffixText: "Design Meets Digital",
    Icon: <ElevatedIcon />,
    primaryText: "Growth",
    color: "text-pink-500",
    description:
      "We Craft Compelling Stories Through Stunning Visuals, Creative Design, and Engaging Content That Captivate Audiences and Inspire Action.",
  },
  {
    prefixText: "Crafting",
    suffixText: "Digital Experiences That",
    Icon: <ElevatedIcon icon={<CogAutomationIcon className="size-4 md:size-7" />} color="violet" />,
    primaryText: "Inspire",
    color: "text-violet-500",
    description:
      "Helping brands rise above the noise, we combine creative design, compelling visuals, and strategic marketing to elevate your presence with clarity, precision, and measurable results.",
  },
  {
    prefixText: "Accelerating brands",
    suffixText: "Through",
    Icon: (
      <ElevatedIcon icon={<RocketIcon className="size-3 md:size-5" />} color="blue" />
    ),
    primaryText: "Innovations",
    color: "text-blue-500",
    description:
      "Helping brands rise above the noise, we combine creative design, compelling visuals, and strategic marketing to elevate your presence with clarity, precision, and measurable results.",
  },
];
