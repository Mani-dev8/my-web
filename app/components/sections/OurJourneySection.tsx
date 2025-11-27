import React from "react";
import SectionTitle from "../common/SectionTitle";
import Heading from "../common/Heading";
import Description from "../common/Description";
import Image from "next/image";
import AnimatedCounter from "../common/AnimatedCounter";

type Props = {};

function OurJourneySection({ }: Props) {
    return (
        <section
            key="our-journey-section"
            className="flex flex-col items-center justify-center py-16 px-4"
        >
            <SectionTitle title="Our Journey" />
            <Heading className="mt-8">
                Turning Meaningful Moments Into Lasting Milestones
            </Heading>
            <Description
                text={
                    "From humble beginnings to impactful partnerships, our path has been defined by dedication, design, and the drive to make a difference."}
            />
            <Image
                alt="group meeting on desk"
                src={"/home/our_journey_banner.png"}
                width={300}
                height={200}
                className="w-full mt-4"
            />
            <div className="flex items-center justify-evenly mt-7 w-full">
                {statsData.map((item, index) =>
                    <AnimatedCounter key={`stat_${index}`} to={item.value} duration={2} label={item.label} />
                )}
            </div>
        </section>
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
