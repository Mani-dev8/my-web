import React from "react";
import SectionTitle from "../common/SectionTitle";
import Heading from "../common/Heading";
import Description from "../common/Description";
import TrustedClientsCard from "../common/TrustedClientsCard";
import TestimonialCard from "../common/TestimonialCard";
import SectionWrapper from "../common/SectionWrapper";

type Props = {};

function OurTrustedClientSection({}: Props) {
  return (
    <SectionWrapper key="our-trusted-client" showBg>
      <SectionTitle title="Our Trusted Client" />
      <Heading className="mt-7">
        Long-Term Relationships Fueled by Trust & Creativity
      </Heading>
      <Description text="We’ve partnered with visionary brands over the years, delivering creative solutions built on trust, consistency, and shared success." />
      <div className="w-full md:flex">
        {clientsData.map((item) => (
          <TrustedClientsCard
            key={item.id}
            imgAlt={item.imgAlt}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
      <div className="flex w-full justify-start items-start gap-x-4 overflow-x-auto">
        {testimonialData.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            role={item.role}
            company={item.company}
            testimonial={item.testimonial}
            avatarSrc={item.avatarSrc}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default OurTrustedClientSection;

const clientsData = [
  {
    id: "1",
    imgSrc: "/home/our-trusted-client/aivory_studio.png",
    imgAlt: "aivory studio brand logo",
    mdText:
      "Partnering with Aivory Studio, **we designed a next-gen AI photo editing platform UI UX Design** that blends smart technology with seamless user experience.",
  },
  {
    id: "2",
    imgSrc: "/home/our-trusted-client/plann_eat.png",
    imgAlt: "plann eat brand logo",
    mdText:
      "We’ve been proudly collaborating with PlannEat for over **2 years**, delivering impactful **Mobile App Design** and **brand identity design** that bring their vision to life.",
  },
  {
    id: "3",
    imgSrc: "/home/our-trusted-client/torso_peak.png",
    imgAlt: "torso peak brand logo",
    mdText:
      "**Empowering the brand’s** online presence through **strategic social media design** and content that reflects strength, passion, and progress.",
  },
];

const testimonialData = [
  {
    id: "testimonial_1",
    name: "Saurabh",
    role: "Founder",
    company: "Torso Peak",
    testimonial:
      '"Working with this team has been a game-changer for Torso Peak. Their creative vision, consistency, and deep understanding of our brand helped us elevate our social media presence and connect better with our audience. Truly a reliable and passionate partner!"',
    avatarSrc: "/home/testimonial_1.png",
  },
  {
    id: "testimonial_2",
    name: "Saurabh",
    role: "Founder",
    company: "Torso Peak",
    testimonial:
      '"Working with this team has been a game-changer for Torso Peak. Their creative vision, consistency, and deep understanding of our brand helped us elevate our social media presence and connect better with our audience. Truly a reliable and passionate partner!"',
    avatarSrc: "/home/testimonial_1.png",
  },
  {
    id: "testimonial_3",
    name: "Saurabh",
    role: "Founder",
    company: "Torso Peak",
    testimonial:
      '"Working with this team has been a game-changer for Torso Peak. Their creative vision, consistency, and deep understanding of our brand helped us elevate our social media presence and connect better with our audience. Truly a reliable and passionate partner!"',
    avatarSrc: "/home/testimonial_1.png",
  },
];
