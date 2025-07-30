import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      data-aos="fade-up"
      className="px-4 sm:px-6 lg:px-24 py-16 font-['DM Sans'] bg-white"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-7xl mx-auto relative">

        {/* Text Content */}
        <div className="flex-1 max-w-xl z-10">
          <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-3 mt-14">About Us</h4>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-tight mb-6">
            Delivering Clean And <br /> Quality Products
          </h2>
          <p className="text-gray-900 text-[15px] sm:text-[18px] leading-7 mb-8">
            At Harihar Enterprises, we are trusted wholesale suppliers of a wide range of manufacturing materials — from sanitary pad components and gumming products to glass tools and color solutions. With over 10+ years of industry presence, we support manufacturers across India with quality, reliability, and consistent supply.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            <p className="flex items-center gap-2 font-semibold text-gray-800">✅ Wide Product Range</p>
            <p className="flex items-center gap-2 font-semibold text-gray-800">✅ Industry-Grade Quality</p>
            <p className="flex items-center gap-2 font-semibold text-gray-800">✅ Trusted Nationwide</p>
            <p className="flex items-center gap-2 font-semibold text-gray-800">✅ Consistent Supply Support</p>
          </div>
        </div>

        {/* Desktop Image Layout */}
        <div className="hidden lg:block flex-1 relative w-full max-w-[679px] h-[617px] mx-auto lg:mx-0">
          <img
            src="/images/experience.png"
            alt="Manufacturing process showcasing paper rolls, material cutting, and glass handling with 10+ years of experience."
            className="w-full h-full object-cover rounded-[36px]"
          />
        </div>


        {/* Mobile & Tablet Layout (Reduced Images) */}
        <div className="block lg:hidden w-full flex flex-col items-center gap-6 mt-8">
          <img
            src="/images/experience.png"
            alt="Manufacturing process showcasing paper rolls, material cutting, and glass handling with 10+ years of experience."
            className="w-[500px] sm:w-[500px] object-contain"
            loading = "lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
