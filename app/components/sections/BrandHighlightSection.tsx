import Heading from "../common/Heading"

type Props = {}

function BrandHighlightSection({ }: Props) {
    return (
        <section className="max-w-6xl w-full mx-auto py-16 px-4 text-center mt-20">
            {/* Main Heading */}
            <Heading>
                Proven Success, Trusted By <br className="hidden md:block" />
                Brands Worldwide
            </Heading>

            {/* Content Paragraph with Inline Capsules */}
            <div className="max-w-4xl  mx-auto text-base md:text-2xl text-gray-500 leading-12 font-medium">
                <p>
                    We help brands grow through

                    {/* Capsule 1: Phone/App Interface */}
                    <span className="inline-flex  mx-3 align-middle">
                        <span className="h-12 w-24 md:h-14 md:w-28 bg-white border flex flex-col border-gray-200 rounded-full shadow-[inset_0px_2px_6px_0px_rgba(0,_0,_0,_0.2)] overflow-hidden px-1 relative top-[-2px] transition-transform hover:scale-105 duration-300">
                            <img
                                src="/home/astro_app.png"
                                alt="App Interface"
                                className="h-full w-1/2 object-contain mx-auto mt-3"
                            />
                        </span>
                    </span>

                    creativity, strategy, and design excellence. Every project we deliver is focused on results, innovation,

                    {/* Capsule 2: Robot Icon (Blue Background) */}
                    <span className="inline-flex items-center justify-center mx-3 align-middle">
                        <span className="h-12 w-24 md:h-14 md:w-24 bg-blue-600 border border-blue-600 rounded-full flex items-center justify-center shadow-[inset_0px_2px_6px_0px_rgba(255,_255,_255,_0.4)] relative top-[-2px] transition-transform hover:scale-105 duration-300 group">
                            <img
                                src="/home/robot.png"
                                alt="Robot Icon"
                                className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-lg"
                            />
                        </span>
                    </span>

                    and building lasting client relationships. Join the

                    {/* Capsule 3: Sliders/Timeline */}
                    <span className="inline-flex items-center justify-center mx-3 align-middle">
                        <span className="h-12 w-24 md:h-14 md:w-28 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm px-3 relative top-[-2px] transition-transform hover:scale-105 duration-300">
                            <img
                                src="/home/milestone.png"
                                alt="Timeline Icon"
                                className="h-6 w-full md:h-8 object-contain"
                            />
                        </span>
                    </span>

                    companies that trust us to transform their digital presence.
                </p>
            </div>
        </section>
    )
}

export default BrandHighlightSection