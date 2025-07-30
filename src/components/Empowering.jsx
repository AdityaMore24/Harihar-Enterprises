
// import React from 'react';

// const EmpowerSection = () => {
//   return (
//     <section id="empowering" data-aos="fade-up" className="px-4 sm:px-6 lg:px-24 py-16 font-['DM Sans'] bg-white">

//       {/* Heading + Description */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">
//         <div className="flex-1 max-w-xl">
//           <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-tight text-gray-900 mb-6">
//             Empowering <br />
//             Manufacturing With <br />
//             Quality Raw Materials
//           </h2>
//         </div>
//         <div className="flex-1 max-w-xl text-gray-600 text-[16px] sm:text-[19px] leading-7">
//           <p className="mb-4">
//             We specialize in supplying high-grade materials for sanitary pad production and glass-based applications.<br />
//             With our years of industry expertise, we ensure your production stays efficient, hygienic, and innovative.<br />
//             We ensure your production stays efficient, hygienic, and innovative.
//           </p>
//         </div>
//       </div>

//       {/* GRID STARTS */}
//       <div className="max-w-7xl mx-auto flex flex-col gap-8">

//         {/* First Row */}
//         <div className="flex flex-wrap gap-8 justify-center">
//           {/* Feminine Hygiene Box */}
//           <div className="bg-[#1C1C1C] text-white rounded-[30px] w-[575px] h-[295px] p-8 flex flex-col justify-between">
//             <h3 className="text-2xl font-semibold mb-2">Trusted Materials for Feminine Hygiene</h3>
//             <p>
//               We offer high-quality materials essential for modern hygiene product manufacturing, including both hydrophilic and hydrophobic nonwoven fabrics for superior fluid management, ultra-absorbent SAP gel sheets for enhanced absorption capacity, anion chips known for their antibacterial.
//             </p>
//           </div>

//           {/* Glass Image */}
//           <img
//             src="/images/GlassEmp.png"
//             alt="Glass Materials"
//             className="rounded-[30px] w-[672px] h-[292px] object-cover"
//           />
//         </div>

//         {/* Second Row */}
//         <div className="flex flex-wrap gap-8 justify-center">
//           {/* Trusted Materials Box */}
//           <div className="border border-dotted border-gray-400 rounded-[30px] w-[340px] h-[292px] p-8 flex flex-col justify-between">
//             <h3 className="text-2xl font-semibold mb-4">Trusted Materials</h3>
//             <p>
//               We offer a comprehensive range of premium-quality raw materials tailored for sanitary pad production, including soft hydrophilic nonwovens for comfort, highly absorbent SAP gels for superior liquid retention, anion chips for enhanced hygiene benefits.
//             </p>
//           </div>

//           {/* Pads Image */}
//           <img
//             src="/images/PadsEmp.png"
//             alt="Pads"
//             className="rounded-[30px] w-[407px] h-[292px] object-cover opacity-80"
//           />

//           {/* Premium Etching Sticker Box */}
//           <div className="bg-[#E0DFFF] text-black rounded-[30px] w-[428px] h-[292px] p-8 flex flex-col justify-between">
//             <h3 className="text-2xl font-semibold mb-4">Premium Etching Sticker Rolls</h3>
//             <p>
//               We supply high-performance etching sticker rolls designed to deliver precise, clean finishes for both decorative and functional glass applications. Our rolls ensure consistent adhesion, easy application, and excellent durability, making them ideal for creating elegant patterns.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmpowerSection;
import React from 'react';

const EmpowerSection = () => {
  return (
    <section id="empowering" data-aos="fade-up" className="px-4 sm:px-6 lg:px-24 py-16 font-['DM Sans'] bg-white">

      {/* Heading + Description */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">
        <div className="flex-1 max-w-xl">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[48px] font-semibold leading-tight text-gray-900 mb-6">
            Empowering <br />
            Manufacturing With <br />
            Quality Raw Materials
          </h2>
        </div>
        <div className="flex-1 max-w-xl text-gray-700 text-[15px] sm:text-[18px] lg:text-[19px] leading-8">
          <p className="mb-4">
            We specialize in providing high-quality materials for sanitary pad manufacturing and glass-based applications. Backed by years of industry expertise, we help ensure your production remains efficient, hygienic, and forward-thinking.


          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* First Row */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Feminine Hygiene Box */}
          <div className="bg-[#1C1C1C] text-white rounded-[30px] w-full sm:w-[90%] lg:w-[575px] min-h-[280px] p-6 sm:p-8 flex flex-col justify-between">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2 leading-7">
              Trusted Materials for <br />Feminine Hygiene
            </h3>
            <p className="text-[15px] sm:text-[15px]">
              We offer high-quality materials essential for modern hygiene product manufacturing, including both hydrophilic and hydrophobic nonwoven fabrics for superior fluid management, ultra-absorbent SAP gel sheets, and anion chips known for their antibacterial properties.
            </p>
          </div>

          {/* Glass Image */}
          <img
            src="/images/GlassEmp.png"
            alt="Glass Materials"
            className="rounded-[30px] w-full sm:w-[90%] lg:w-[672px] object-cover"
            loading = "lazy"
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap gap-6 justify-center">

          {/* Trusted Materials Box */}
          <div className="border border-dotted border-gray-400 rounded-[30px] w-full sm:w-[80%] lg:w-[340px] min-h-[250px] p-6 sm:p-8 flex flex-col justify-between">
            <h3 className="text-xl sm:text-3xl font-medium mb-3">Reliable Raw Materials You Can Trust</h3>
            <p className="text-[15px] sm:text-[15px]">
              We supply a diverse selection of premium raw materials specifically engineered for sanitary pad production. 
            </p>
          </div>

          {/* Pads Image */}
          <img
            src="/images/PadsEmp.png"
            alt="Sanitary Pads"
            className="rounded-[30px] w-full sm:w-[80%] lg:w-[407px] object-cover opacity-80"
            loading = "lazy"
          />

          {/* Premium Etching Sticker Box */}
          <div className="bg-[#E0DFFF] text-black rounded-[30px] w-full sm:w-[90%] lg:w-[428px] min-h-[250px] p-6 sm:p-8 flex flex-col justify-between">
            <h3 className="text-xl sm:text-3xl font-medium mb-3 leading-7">Premium Glass <br/>Etching Rolls & Tools</h3>
            <p className="text-[15px] sm:text-[15px]">
              We supply high-performance etching sticker rolls designed for precise, clean finishes for decorative and functional glass applications, with consistent adhesion and excellent durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
