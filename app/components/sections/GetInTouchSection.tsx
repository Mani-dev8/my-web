import React from "react";
import SectionTitle from "../common/SectionTitle";
import Heading from "../common/Heading";
import Description from "../common/Description";
import CTAButton from "../common/CTAButton";

type Props = {};

function GetInTouchSection({}: Props) {
  return (
    <section
      id="get-in-touch"
      className="flex flex-col items-center justify-center py-16"
    >
      <SectionTitle title="Get In Touch" />
      <Heading className="mt-7">Contact Us</Heading>
      <Description text="Have a vision? Don’t overthink it connect with us right now and watch your ideas take shape with speed, creativity, and precision." />
      <form className="mt-12 max-w-2xl bg-white border border-zinc-200 rounded-3xl shadow-sm px-6 py-8 md:px-10 md:py-12 space-y-8 mx-4">
        <div className="space-y-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full border-b border-zinc-950 bg-transparent pb-3 text-base text-zinc-800 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full border-b border-zinc-950 bg-transparent pb-3 text-base text-zinc-800 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact No"
            className="w-full border-b border-zinc-950 bg-transparent pb-3 text-base text-zinc-800 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
          />
          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            className="w-full border-b border-zinc-950 bg-transparent pb-3 text-base text-zinc-800 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
          />
          <input
            type="text"
            name="service"
            placeholder="Service"
            className="w-full border-b border-zinc-950 bg-transparent pb-3 text-base text-zinc-800 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            className="w-full border-b border-zinc-950 bg-transparent pb-3 text-base text-zinc-800 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none resize-none"
          />
        </div>
        <CTAButton title="Submit" />
      </form>
    </section>
  );
}

export default GetInTouchSection;
