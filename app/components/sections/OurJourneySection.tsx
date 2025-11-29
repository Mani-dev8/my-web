import React from "react";
import SectionTitle from "../common/SectionTitle";
import Heading from "../common/Heading";
import Description from "../common/Description";
import Image from "next/image";
import AnimatedCounter from "../common/AnimatedCounter";
import SectionWrapper from "../common/SectionWrapper";

type Props = {};

function OurJourneySection({}: Props) {
  return (
    <SectionWrapper key="our-journey-section">
      <SectionTitle title="Our Journey" />
      <Heading className="mt-5">
        Turning Meaningful Moments Into Lasting Milestones
      </Heading>
      <Description
        text={
          "From humble beginnings to impactful partnerships, our path has been defined by dedication, design, and the drive to make a difference."
        }
      />
      <div className="flex flex-col md:flex-row w-full">
        <Image
          alt="group meeting on desk"
          src={"/home/our_journey_banner.png"}
          width={300}
          height={200}
          className="w-full mt-4"
        />
        <div className="flex md:flex-col md:w-60 md:text-end items-center justify-evenly mt-7 w-full">
          {statsData.map((item, index) => (
            <AnimatedCounter
              key={`stat_${index}`}
              to={item.value}
              duration={2}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default OurJourneySection;

const statsData = [
  {
    label: "Happy Client",
    value: 10,
  },
  {
    label: "Projects",
    value: 20,
  },
  {
    label: "Experience",
    value: 4,
  },
];
