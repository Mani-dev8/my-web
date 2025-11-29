import Image from 'next/image'

type Props = {
    title: string;
    description: string;
    imageAlt: string;
    imgSrc: string;
}

function ExpertiseCard({ title, description, imageAlt, imgSrc }: Props) {
    return (
        <div className="group relative w-full lg:w-2/12 lg:hover:w-120 transition-all max-w-3xl overflow-hidden rounded-3xl shadow-xl">
            {/* Background image */}
            <Image
                height={200}
                width={200}
                src={imgSrc}
                alt="Developer working at a computer"
                className="h-72 w-full object-cover md:h-80 lg:h-120"
            />

            {/* Dark gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text content */}
            <div className="absolute inset-0 flex items-end p-6 md:p-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:duration-500 lg:group-hover:transition-opacity">
                <div className="max-w-xl">
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">
                        {title}
                    </h2>
                    <p className="mt-3 text-sm text-white/80 md:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard