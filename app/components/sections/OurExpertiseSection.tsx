"use client";
import Description from "../common/Description";
import Heading from "../common/Heading";
import ExpertiseCard from "../common/ExpertiseCard";
import SectionTitle from "../common/SectionTitle";
import SectionWrapper from "../common/SectionWrapper";
import { useState } from "react";

type Props = {};

function OurExpertiseSection({}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <SectionWrapper showBg={true}>
      <SectionTitle title="Our Expertise" />
      <Heading className="mt-5">
        Building Digital Experiences That Inspire Growth
      </Heading>
      <Description text="We specialize in blending creativity, technology, and storytelling delivering design solutions that not only look stunning but perform seamlessly." />

      <div className="space-y-4 lg:space-y-0 mt-4 mx-4 lg:flex lg:space-x-2">
        {services.map((item, index) => (
          <ExpertiseCard
            key={`expertise_card_${index}`}
            {...item}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default OurExpertiseSection;

const services = [
  {
    title: "Digital Experience Design",
    description:
      "Crafting seamless, user-centered interfaces that turn ideas into intuitive digital experiences.",
    imageAlt: "Person wearing VR headset working on holographic UI designs",
    imgSrc: "/home/expertise1.png",
  },
  {
    title: "Brand Solution",
    description:
      "Transforming ideas into memorable brand experiences that resonate with your audience.",
    imageAlt: "Hands holding red and yellow puzzle pieces connecting together",
    imgSrc: "/home/expertise2.png",
  },
  {
    title: "Web & Tech Solutions",
    description:
      "Delivering end-to-end digital solutions that combine functionality, performance, and design.",
    imageAlt: "Developer working on multiple screens with code and designs",
    imgSrc: "/home/expertise3.png",
  },
  {
    title: "Media Solution",
    description:
      "Transforming ideas into impactful media experiences across digital and traditional platforms.",
    imageAlt: "Person viewing multiple video and image thumbnails on screen",
    imgSrc: "/home/expertise4.png",
  },
  {
    title: "Driving Strategic Impact",
    description:
      "Guiding brands with smart, research-backed strategies that deliver impact.",
    imageAlt:
      "Person looking at whiteboard covered with sticky notes and sketches",
    imgSrc: "/home/expertise5.png",
  },
  {
    title: "Immersive 3D Visuals",
    description:
      "Crafting realistic and captivating 3D designs that bring ideas to life.",
    imageAlt:
      "3D rendered modern chair displayed on a digital screen with 'Successfully Connected' text",
    imgSrc: "/home/expertise6.png",
  },
];
