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
import TextFade from "../common/TextFade";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type RenderSectionProps = {
  prefixText: string;
  suffixText: string;
  Icon: React.ReactNode;
  color: string;
  primaryText: string;
  description: string;
};

const RenderSection = ({
  prefixText,
  suffixText,
  Icon,
  primaryText,
  color,
  description,
}: RenderSectionProps) => {
  return (
    <TextFade
      direction="up"
      className="space-y-2 md:space-y-4 lg:space-y-8 mb-4 md:mb-4 lg:mb-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[82px] md:leading-18 font-semibold md:font-medium text-center max-w-md lg:max-w-6xl">
        {prefixText} {Icon}&nbsp;
        {suffixText} <span className={`${color}`}>{primaryText}</span>.
      </h1>
      <Description className="mx-auto md:text-center" text={description} />
    </TextFade>
  );
};

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <SectionWrapper className="overflow-hidden max-w-none relative h-screen min-h-200 text-center lg:items-center">
      <AnimatePresence mode="wait">
        <RenderSection key={currentIndex} {...heroData[currentIndex]} />
      </AnimatePresence>
      <CurlyLoopIcon className="top-[10%] left-[15%] absolute z-10 size-10 rotate-45" />
      <CurlyLoopIcon className="top-[20%] right-[15%] absolute z-10 size-16" />
      <DoubleCurlyIcon className="bottom-[20%] left-[15%] absolute z-10 size-16" />
      <DoubleCurlyIcon className="bottom-[15%] right-[15%] absolute z-10 size-16 -scale-x-100" />
      <HeroStarIcon className="absolute bottom-[10%] right-1/2" />
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
      <FadedCircle position={{ top: "-5%", left: "10%" }} size={200} />
      <FadedCircle
        position={{ bottom: "-10%", right: "-20%" }}
        size={500}
        color={{
          from: "rgba(114, 39, 219, 0.6)",
          to: "rgba(114, 39, 219, 0.2)",
        }}
      />
      <Image
        alt="hero1 image"
        height={90}
        width={180}
        className="h-48 w-56 md:h-[14.4rem] md:w-[16.8rem] lg:h-[17.28rem] lg:w-[20.16rem] object-cover rotate-15 rounded-lg  md:rounded-2xl lg:rounded-3xl overflow-hidden border absolute -bottom-10 lg:-bottom-20 -left-10 lg:left-1/5"
        src={"/home/hero1.png"}
      />
      <Image
        alt="hero1 image"
        height={90}
        width={180}
        className="h-48 w-56 md:h-[14.4rem] md:w-[16.8rem] lg:h-[17.28rem] lg:w-[20.16rem] object-cover -rotate-15 rounded-lg  md:rounded-2xl lg:rounded-3xl overflow-hidden border absolute -bottom-10 lg:-bottom-20 -right-10 lg:right-1/5"
        src={"/home/hero2.png"}
      />
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
    Icon: <ElevatedIcon icon={<CogAutomationIcon />} color="violet" />,
    primaryText: "Inspire",
    color: "text-violet-500",
    description:
      "Helping brands rise above the noise, we combine creative design, compelling visuals, and strategic marketing to elevate your presence with clarity, precision, and measurable results.",
  },
  {
    prefixText: "Accelerating brands",
    suffixText: "Through",
    Icon: (
      <ElevatedIcon icon={<RocketIcon className="size-5" />} color="blue" />
    ),
    primaryText: "Innovations",
    color: "text-blue-500",
    description:
      "Helping brands rise above the noise, we combine creative design, compelling visuals, and strategic marketing to elevate your presence with clarity, precision, and measurable results.",
  },
];
