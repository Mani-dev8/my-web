import CTAButton from "../common/CTAButton";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-black text-white pt-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 md:grid md:grid-cols-3 lg:grid-cols-4 not-last:">
          {/* CONTACT SECTION */}
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span>{" "}
              suyashshirsat521@gmail.com
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Phone:</span> +91 9167575889
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Address:</span> Mumbai,
              Maharashtra India
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              QUICK LINK
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* EXPERTISE */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              OUR EXPERTISE
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>UI/UX & Digital Experience</li>
              <li>Brand Identity & Creative Design</li>
              <li>Web & App Development</li>
              <li>Motion Graphic</li>
              <li>3D Visual Design</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="">
            <h3 className="text-white font-semibold text-lg mb-4">
              NEWSLETTERS
            </h3>

            <div className="space-y-4 flex flex-col items-end">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-gray-500 text-gray-300 py-2 outline-none"
              />

              {/* Submit Button */}
              <CTAButton title="Submit" inverse />
            </div>
          </div>
        </div>

        {/* LINE SEPARATOR */}
        <div className="mt-12 border-t border-gray-700"></div>
      </footer>
      <div className="h-auto w-full pt-12 bg-black px-4 md:px-0">
        <svg
          viewBox="0 0 385 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 0.5V68.5H43.0659L10.3182 18.6289H9.72051V68.5H0V0.5H8.99697L41.7762 50.4375H42.3739V0.5H52Z"
            fill="white"
            fill-opacity="0.5"
          />
          <rect
            x="70"
            y="1.40039"
            width="57"
            height="10"
            fill="white"
            fill-opacity="0.5"
          />
          <rect
            x="70"
            y="29.5"
            width="57"
            height="10"
            fill="white"
            fill-opacity="0.5"
          />
          <rect
            x="70"
            y="57.5996"
            width="57"
            height="10"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            d="M163.948 68.5L145 0.5H155.842L169.152 53.1602H169.785L183.629 6.34641H194.371L208.215 53.1934H208.848L222.125 0.5H233L214.019 68.5H203.644L189.267 17.5664H188.733L174.356 68.5H163.948Z"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            d="M262.465 68.5H251L276.761 0.5H289.239L315 68.5H303.535L283.297 12.8516H282.738L262.465 68.5Z"
            fill="white"
            fill-opacity="0.5"
          />
          <path
            d="M333 9.33203V0.5H385V9.33203H364.036V68.5H353.931V9.33203H333Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
      </div>
    </>
  );
}
