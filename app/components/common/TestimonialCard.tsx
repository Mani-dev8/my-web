import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatarSrc: string;
};

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <figure className="first:ml-4 last:mr-4 min-w-96 max-w-sm rounded-2xl bg-zinc-200 p-8 sm:p-10">
      {/* Avatar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={avatarSrc}
            alt={name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Quote icon */}
      <div className="pt-14 -ml-4 text-[144px] text-gray-400 leading-0 font-mono">“</div>

      {/* Testimonial text */}
      <blockquote className="text-[15px] leading-relaxed text-gray-600 font-medium">
        {testimonial}
      </blockquote>

      {/* Name + role */}
      <figcaption className="mt-8">
        <div className="text-lg font-semibold text-black">{name}</div>
        <div className="text-base text-gray-500">
          {role} of {company}
        </div>
      </figcaption>
    </figure>
  );
}
