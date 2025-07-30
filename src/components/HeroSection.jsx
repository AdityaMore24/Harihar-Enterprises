// import React from "react";

// const HeroSection = () => {
//   return (
//     <section data-aos="fade-up" className="px-4 sm:px-6 lg:px-24 py-12 font-dm bg-white">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Heading */}
//         <h1 className="text-[32px] sm:text-[40px] lg:text-[65px] font-semibold leading-[120%] tracking-normal mb-16 capitalize">
//           Shaping Products.<br />
//           Supporting Industries.
//         </h1>

//         {/* Content Row */}
//         <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-[55px]">
          
//           {/* 500+ Clients and image */}
//           <div className="flex flex-col items-center gap-6 sm:gap-[38px] w-full lg:w-1/5">
//             <img
//               src="/images/Group 1000004838.png"
//               alt="500+ Clients"
//               className="rounded-2xl object-cover w-[250px] sm:w-[296px] h-[88px]"
//             />
//             <img
//               src="/images/layers.png"
//               alt="Product Below Clients"
//               className="rounded-[25px] object-cover w-[250px] sm:w-[330px] h-[305px]"
//             />
//           </div>

//           {/* Product Images */}
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-[50px] items-center justify-center w-full lg:w-3/5">
//             <img
//               src="/images/pad1.png"
//               alt="Product 1"
//               className="rounded-[25px] object-cover w-[280px] sm:w-[345px] h-[400px] sm:h-[432px] rotate-180"
//             />
//             <img
//               src="/images/glass1.png"
//               alt="Product 2"
//               className="rounded-[25px] object-cover w-[280px] sm:w-[345px] h-[400px] sm:h-[432px] rotate-180"
//             />
//           </div>

//           {/* Description and Image */}
//           <div className="flex flex-col items-center gap-6 w-full lg:w-1/5">
//             <p className="text-[14px] sm:text-[14px] font-normal text-gray-600 text-center px-2 leading-[30px] tracking-[0.01em] capitalize">
//               From Glass To Gumming, Sheets<br />To Rolls — We Supply What<br />Shapes Industries
//             </p>
//             <img
//               src="/images/sheet1.png"
//               alt="Product 3"
//               className="rounded-[25px] object-cover w-[250px] sm:w-[330px] h-[315px] rotate-180"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";

const HeroSection = () => {
  return (
    <section data-aos="fade-up" className="px-4 sm:px-6 lg:px-24 py-12 font-dm bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-[32px] sm:text-[40px] lg:text-[63px] font-semibold leading-[120%] tracking-normal mb-10 sm:mb-16 capitalize">
        Your Trusted Partner for <br /> Wholesale Manufacturing
        </h1>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-[55px]">

          {/* 500+ Clients */}
          <div className="flex flex-col items-center gap-6 sm:gap-[38px] w-full lg:w-1/5">
            <img
              src="/images/Group 1000004838.png"
              alt="500+ Clients"
              className="rounded-2xl object-cover w-[220px] sm:w-[270px] lg:w-[296px] h-auto"
            />
            <img
              src="/images/layers.png"
              alt="Sanitary Napkins"
              className="rounded-[25px] object-cover w-[220px] sm:w-[300px] lg:w-[330px] h-auto hidden sm:block"
            />
          </div>

          {/* Main Product Images */}
          <div className="
            flex flex-row flex-wrap sm:flex-nowrap 
            justify-center items-center gap-6 sm:gap-[50px] 
            w-full lg:w-3/5
            lg:flex-nowrap
          ">
            <img
              src="/images/pad1.png"
              alt="Sanitary Pads Napkins"
              className="rounded-[25px] object-cover w-[160px] sm:w-[250px] lg:w-[345px] h-auto rotate-180"
            />
            <img
              src="/images/glass1.png"
              alt="Acrylic Glass Sheet"
              className="rounded-[25px] object-cover w-[160px] sm:w-[250px] lg:w-[345px] h-auto rotate-180"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-1/5">
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-600 text-center leading-[24px] sm:leading-[28px] lg:leading-[30px] capitalize">
              From Glass To Gumming,<br />Sheets To Rolls — We Manufacture What<br />Shapes Industries
            </p>
            <img
              src="/images/sheet1.png"
              alt="Blue Glass Sheets"
              className="rounded-[25px] object-cover w-[220px] sm:w-[300px] lg:w-[330px] h-auto hidden sm:block"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
