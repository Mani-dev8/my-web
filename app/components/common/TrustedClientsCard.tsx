import React from "react";
import RichText from "./RichText";
import Image from "next/image";

type Props = {
  imgSrc:string;
  imgAlt:string;
};

function TrustedClientsCard({imgSrc,imgAlt}: Props) {
  return (
    <div className="px-4 py-12 flex flex-col items-center justify-center text-center">
      <Image src={imgSrc} alt={imgAlt} width={140} height={200} className="object-contain"/>
      <RichText MDText="Partnering with Aivory Studio, **we designed a next-gen AI photo editing platform UI UX Design** that blends smart technology with seamless user experience." />
    </div>
  );
}

export default TrustedClientsCard;
