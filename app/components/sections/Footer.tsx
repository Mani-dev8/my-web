import CTAButton from "../common/CTAButton";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-20">
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
            <span className="font-semibold">Address:</span> Mumbai, Maharashtra
            India
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">QUICK LINK</h3>

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
          <h3 className="text-white font-semibold text-lg mb-4">NEWSLETTERS</h3>

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
  );
}
