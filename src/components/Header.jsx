// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

// return (
//   <header className="sticky top-0 z-40 bg-white shadow-sm font-['DM Sans'] w-full">
//     <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
      
//       {/* Logo Section */}
//       <div className="flex items-center gap-5 flex-1">
//         <Link to="/" className="flex items-center gap-5">
//           <img
//             src="/images/icon.jpg"
//             alt="Harihar Logo"
//             className="w-[154px] h-[52px] object-contain"
//           />
//         </Link>

//         <div className="hidden lg:flex items-center gap-2 text-xs">
//           <img src="/images/Gstn.png" alt="verified" className="w-4 h-4" />
//           <span className="text-[#738297] font-medium">
//             GSTIN: <span className="text-[#1D1D1D]">27AMKPM9210E1Z2</span>
//           </span>
//           <span className="mx-1 text-[#9CA3AF]">|</span>
//           <a
//             href="/files/ISO-Certificate.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#2563EB] font-medium hover:underline"
//           >
//             ISO Certificate
//           </a>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="hidden md:flex items-center gap-10 bg-[#F7F8FC] px-8 py-3 rounded-full text-base font-semibold">
//         <Link to="/" className="hover:text-blue-600">Home</Link>
//         <Link to="/products" className="hover:text-blue-600">Products</Link>
//         <a href="#aboutus" className="hover:text-blue-600">About Us</a>
//       </nav>

//       {/* Contact Button */}
//       <div className="hidden md:flex">
//         <Link to="/contact">
//           <button className="border border-black text-base font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
//             Contact Us
//           </button>
//         </Link>
//       </div>

//       {/* Mobile Menu Icon */}
//       <button className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>
//     </div>

//     {/* Mobile Menu */}
//     {menuOpen && (
//       <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50 md:hidden text-base font-semibold">
//         <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
//         <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Products</Link>
//         <a href="#aboutus" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About Us</a>
//         <Link to="/contact" onClick={() => setMenuOpen(false)}>
//           <button className="border border-black text-base font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
//             Contact Us
//           </button>
//         </Link>
//       </div>
//     )}
//   </header>
// );
// };

// export default Header;
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm font-['DM Sans'] relative w-full">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6">
        
        {/* Logo + Company Info */}
        <div className="flex flex-col gap-1">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src="/images/icon.jpg"
            alt="Harihar Enterprises"
            className="w-[154px] h-[52px] object-contain mb-3 mt-"
          />
        </Link>

        {/* GST and ISO Certificate */}
          <div className="flex items-center gap-2 mt-1 text-xs">
            <img src="/images/Gstn.png" alt="verified ISO Certificate " className="w-4 h-4" />
            <span className="text-[#738297] font-medium">GSTIN: <span className="text-[#1D1D1D]">27AMKPM9210E1Z2</span></span>
            <span className="mx-1 text-[#9CA3AF]">|</span>
            <a
              href="/files/ISO-Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] font-medium hover:underline"
            >
              ISO Certificate
            </a>
          </div>
      </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 bg-[#F7F8FC] px-8 py-3 rounded-full text-base font-semibold">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <a href="/#aboutus" className="hover:text-blue-600">About Us</a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="border border-black text-base font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50 md:hidden text-base font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Products</Link>
          <a href="/#aboutus" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About Us</a>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="border border-black text-base font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
