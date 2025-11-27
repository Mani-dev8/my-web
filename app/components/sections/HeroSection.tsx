import React from "react";
import FadedCircle from "../common/FadedCircle";
import ElevatedIcon from "../common/ElevatedIcon";
import CTAButton from "../common/CTAButton";
import { CurlyLoopIcon, DoubleCurlyIcon, HeroStarIcon } from "../icons";
import Image from "next/image";
import Description from "../common/Description";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col space-y-4 items-center justify-center text-center">
      <h1 className="text-4xl font-semibold text-center max-w-md">
        Where <ElevatedIcon size={74} /> Design Meets Digital{" "}
        <span className="text-primary">Growth</span>.
      </h1>
      <Description text="We Craft Compelling Stories Through Stunning Visuals, Creative Design, and Engaging Content That Captivate Audiences and Inspire Action." />
      <CurlyLoopIcon className="top-[10%] left-[15%] absolute z-10 size-10 rotate-45" />
      <CurlyLoopIcon className="top-[20%] right-[15%] absolute z-10 size-16" />
      <DoubleCurlyIcon className="bottom-[20%] left-[15%] absolute z-10 size-16" />
      <DoubleCurlyIcon className="bottom-[15%] right-[15%] absolute z-10 size-16 -scale-x-100" />
      <HeroStarIcon className="absolute bottom-[10%] right-1/2" />
      <CTAButton title="Let’s Connect" />
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
        className="h-48 w-56 object-cover rotate-15 rounded-lg overflow-hidden border absolute -bottom-10 -left-10"
        src={"/home/hero1.png"}
      />
      <Image
        alt="hero1 image"
        height={90}
        width={180}
        className="h-48 w-56 object-cover -rotate-15 rounded-lg overflow-hidden border absolute -bottom-10 -right-10"
        src={"/home/hero2.png"}
      />
    </section>
  );
}

export default HeroSection;
