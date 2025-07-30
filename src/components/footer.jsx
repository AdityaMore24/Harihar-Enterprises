import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white font-['DM Sans'] pt-12 pb-6">
      <div className="w-full px-4 sm:px-6 lg:px-[205px]">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/logo.png"
            alt="Harihar Logo"
            className="w-[200px] sm:w-[240px] lg:w-[280px] h-auto object-contain"
          />
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-between border-t border-gray-700 pt-10 pb-10 gap-10">

          {/* Left */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-8">
            <h3 className="font-medium text-4xl sm:text-5xl lg:text-[64px] leading-[130%] max-w-[733px] mx-auto lg:mx-0">
              Grow Your Business <br /> with Quality Materials
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:harihar.enterprises2001@gmail.com"
                className="flex-1 flex justify-center items-center gap-2 border border-gray-600 rounded-full py-4 px-6 hover:bg-white hover:text-black hover:border-white text-sm sm:text-base"
              >
                harihar.enterprises2001@gmail.com <img src="/images/arrow-right.png" alt="Arrow Up" className="w-[22px] h-[22px]" />
              </a>
              <a
                href="tel:+91 95944 49902"
                className="flex-1 flex justify-center items-center gap-2 border border-gray-600 rounded-full py-4 px-6 hover:bg-white hover:text-black hover:border-white text-sm sm:text-base"
              >
                +91 95944 49902 <img src="/images/arrow-right.png" alt="Arrow Up" className="w-[22px] h-[22px]" />
              </a>
            </div>

            <div className="text-center lg:text-left px-4 lg:px-0">
              <h4 className="font-semibold text-xl sm:text-2xl mt-4">Address</h4>
               <a
                href="https://www.google.com/maps/place/Omkar+Hiranandani+Industrial+Estate,+Laxmi+Udyog+Nagar,+Kanjurmarg+West,+Bhandup+West,+Mumbai,+Maharashtra+400078/@19.1277993,72.9247491,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c78c374b2c5d:0x4895a054251b7c5!8m2!3d19.1277993!4d72.927324!16s%2Fg%2F1ptw1_2_k?entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xl mt-4 block hover:text-white transition"
              >
                Gala No 242, 2nd Floor,
                Hiranandani Industrial Estate,
                Huma Mall, Kanjurmarg West,
                Mumbai-400078
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-12 lg:pl-12 text-center sm:text-left">

            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h4>
              <ul className="text-[#C0C0C0] flex flex-col gap-3 text-base sm:text-lg">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="#aboutus" className="hover:text-white">About Us</a></li>
                <li><a href="/products" className="hover:text-white">Product</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4">Services</h4>
              <ul className="text-[#C0C0C0] flex flex-col gap-3 text-base sm:text-lg">
                <li><a href="#" className="hover:text-white">Gumming</a></li>
                <li><a href="#" className="hover:text-white">Manufacturing</a></li>
                <li><a href="#" className="hover:text-white">Raw Material Supply</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 text-center pt-6 text-sm text-gray-400">
          © 2025 Harihar Enterprises. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     <footer data-aos="fade-up" className="bg-[#121212] text-white font-['DM Sans'] pt-12 pb-6">
      
//       {/* Container for margins */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

//         {/* Top Logo Row */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="/images/logo.png"
//             alt="Harihar Logo"
//             className="w-[280px] h-[95px] object-contain"
//           />
//         </div>

//         {/* Main Grid */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-gray-600 pt-10 pb-10 gap-20">
          
//           {/* Left: Call to Action */}
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <h3 className="font-['DM Sans'] font-semibold text-[50px] leading-[130%] tracking-[0] mb-10">
//                 Grow Your Business <br /> with Quality Materials
//               </h3>


//             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
//               <a
//                 href="mailto:infoHarihar@gmail.com"
//                 className="w-[323px] h-[69px] flex justify-center items-center bg-transparent border border-gray-500 rounded-full gap-2 hover:border-white transition text-lg"
//               >
//                 hariharhub@gmail.com <span className="text-xl">↑</span>
//               </a>
//              <a
//                 href="tel:9594449902"
//                 className="w-[323px] h-[69px] flex justify-center items-center bg-transparent border border-gray-500 rounded-full gap-2 hover:border-white transition text-lg"
//               >
//                 +91 95944 49902 <span className="text-xl">↑</span>
//               </a>

//             </div>
//           </div>

//           {/* Right: Links */}
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-12 w-full sm:w-auto border-l border-gray-600 pl-12">
            
//             {/* Quick Links */}
//             <div>
//               <h4 className="text-2xl font-semibold mb-4 text-white">Quick Links</h4>
//               <ul className="text-gray-300 space-y-3 text-lg">
//                 <li><a href="#" className="hover:text-white">Home</a></li>
//                 <li><a href="#aboutus" className="hover:text-white">About Us</a></li>
//                 <li><a href="/products" className="hover:text-white">Product</a></li>
//                 <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div>
//               <h4 className="text-2xl font-semibold mb-4 text-white">Services</h4>
//               <ul className="text-gray-300 space-y-3 text-lg">
//                 <li><a href="#" className="hover:text-white">Gumming</a></li>
//                 <li><a href="#" className="hover:text-white">Manufacturing</a></li>
//                 <li><a href="#" className="hover:text-white">Raw Material Supply</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
//           © Copyright 2024. Harihar Enterprises All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
