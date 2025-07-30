// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ProductModal from "./productmodal";

// const ProductsIntro = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const products = [
//   {
//     title: "Hydrophilic Layer",
//     subtitle: "High absorption layer for sanitary pads",
//     description:
//       "Our hydrophilic non-woven layer offers excellent absorption and distribution of fluid, keeping the surface dry and providing maximum comfort during use. Perfect for premium sanitary pad manufacturing.",
//     image: "/images/hydro.png",
//   },
//   {
//     title: "Dry Net",
//     subtitle: "Soft, breathable top sheets for comfort",
//     description:
//       "Dry Net sheets are designed to offer a soft touch while allowing fluid to pass through quickly, keeping the surface dry and breathable. Highly suitable for sanitary products where comfort and hygiene are priorities.",
//     image: "/images/drynet.png",
//   },
//   {
//     title: "Anion Chip",
//     subtitle: "Antibacterial layers enhancing hygiene",
//     description:
//       "Our Anion Chips are known for their antibacterial and deodorizing properties, promoting freshness and reducing the risk of infection in sanitary napkins. They are easy to integrate into various hygiene products.",
//     image: "/images/anion.png",
//   },
//   {
//     title: "Airlaid Paper",
//     subtitle: "Superior absorption material",
//     description:
//       "Airlaid Paper provides excellent liquid retention while maintaining softness and flexibility. Ideal for absorbent cores in sanitary pads and other hygiene products, ensuring leakage prevention and durability.",
//     image: "/images/airlaid.png",
//   },
//   {
//     title: "Glass Colours",
//     subtitle: "Durable, vibrant colors for glass applications",
//     description:
//       "Our glass colors are specially formulated to produce bright, long-lasting finishes on glass surfaces, suitable for decorative items, architectural glass, and custom designs with high durability against fading.",
//     image: "/images/colors.png",
//   },
//   {
//     title: "Glass Tools",
//     subtitle: "Precision tools for glass processing",
//     description:
//       "We supply premium quality glass tools including cutters, pliers, and finishing tools, ensuring precision and efficiency for both industrial and artisanal glass applications.",
//     image: "/images/tools.png",
//   },
//   {
//     title: "Glass Etching Sticker Rolls",
//     subtitle: "Premium sticker rolls for decorative glass etching",
//     description:
//       "Our glass etching sticker rolls offer easy application with clean finishes, making them ideal for decorative frosted glass effects in residential, commercial, or artistic installations.",
//     image: "/images/sticker.png",
//   },
// ];


//   const handleOpenModal = (product) => setSelectedProduct(product);
//   const handleCloseModal = () => setSelectedProduct(null);

//   return (
//     <section id="products" data-aos="fade-up" className="px-4 sm:px-6 lg:px-24 py-16 font-['DM Sans'] bg-[#f7f7f8]">

//       {/* Intro Section */}
//       <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-7xl mx-auto mb-16">
//         <div className="flex-1 max-w-xl">
//           <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-tight text-[#1C1C1C] mb-6">
//             Our <br /> Products
//           </h2>
//         </div>
//         <div className="flex-1 max-w-xl text-[#333333] text-[16px] sm:text-[18px] leading-7">
//           <p>
//             We offer a diverse portfolio of high-quality materials, including sanitary pad components, gumming products, and specialized glass tools and colors.
//           </p>
//         </div>
//       </div>

//       {/* Product Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             onClick={() => handleOpenModal(product)}
//             className="cursor-pointer group border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="rounded-lg mb-4 w-full h-48 object-cover"
//             />
//             <h3 className="text-lg font-semibold mb-2 group-hover:text-black transition">{product.title}</h3>
//             <p className="text-gray-500 text-sm mb-6">{product.subtitle}</p>
//             <span className="text-gray-500 font-semibold text-sm flex items-center gap-1 group-hover:text-black transition">
//               Know More →
//             </span>
//           </div>
//         ))}

//         {/* View All Products Button */}
//         <Link
//           to="/Products"
//           onClick={() => window.scrollTo(0, 0)}
//           className="group border rounded-xl flex justify-center items-center hover:shadow-lg transform transition duration-300 hover:scale-105 bg-white"
//         >
//           <span className="text-black font-semibold text-lg flex items-center gap-2 group-hover:text-blue-600 transition">
//             View All →
//           </span>
//         </Link>
//       </div>

//       {/* Modal Component */}
//       <ProductModal
//         isOpen={!!selectedProduct}
//         onClose={handleCloseModal}
//         product={selectedProduct}
//       />
//     </section>
//   );
// };

// export default ProductsIntro;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./productmodal";

const ProductsIntro = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Hydrophilic Layer(Non-Woven)",
      subtitle: "High absorption layer for sanitary pads",
      description: "Made from ultra-soft non-woven hydrophilic material (15–30 GSM), this premium liquid acquisition layer features a cotton-like topsheet that instantly channels menstrual flow away from skin. The advanced fiber structure provides fast liquid penetration and rapid absorption while anti-rewet properties keep the surface dry even under pressure.",
      image: "/images/hydro.png", alt:"Hydrophilic layer for sanitary pads made from ultra-soft non-woven material" 
    },
    {
      title: "Dry Net",
      subtitle: "Soft, breathable top sheets for comfort",
      description:
        "Made from soft non-woven fabric with tiny holes, this perforated dry net layer quickly pulls menstrual fluid through while keeping the top surface dry and clean. The micro-perforated design prevents wetness and provides smooth, comfortable wear without irritation. Our breathable dry net offers excellent leak protection and maintains dryness throughout use for all-day comfort and freshness.",
      image: "/images/drynet.png", alt: "Soft, breathable top sheets for sanitary pads, perfect for sensitive skin."
    },
    {
      title: "Anion Chip",
      subtitle: "Antibacterial layers enhancing hygiene",
      description:
        "The anion chip is a small green or blue strip placed in the center of the pad that provides natural antibacterial and odor control benefits. This negative ion technology naturally eliminates harmful bacteria and neutralizes unpleasant odors, keeping you fresh and confident during periods. Our chemical-free anion strip works without harsh additives, preventing itching and irritation for safe daily use.",
      image: "/images/anion.png", alt: "Antibacterial Anion Layer for Hygiene Products"
    },
    {
      title: "Airlaid Paper",
      subtitle: "Superior absorption material",
      description:
        "Airlaid paper features a soft cotton-like texture and serves as the primary absorbent core inside the sanitary pad. This ultra-absorbent airlaid material has a sponge-like structure that rapidly draws menstrual flow toward the center while keeping the top surface dry. Our high-capacity airlaid core prevents side leakage through superior liquid distribution and spreads fluid evenly for maximum absorption.",
      image: "/images/airlaid.png", alt : "Superior absorption material for pads and diapers, eco-friendly."
    },
    {
      title: "Glass Colours",
      subtitle: "Vibrant colors for glass applications",
      description:
        "Glass colours are specialized paints formulated for creating beautiful designs on glass surfaces including windows, bottles, mirrors, and decorative items. These high-quality glass paints are bright, shiny, and long-lasting, delivering vibrant color intensity that maintains brilliance over time. Our permanent glass colours feature superior adhesion that sticks well to glass and resists washing and fading.",
      image: "/images/colors.png", alt : "Vibrant Glass Coloring Sheets"
    },
    {
      title: "Glass Tools",
      subtitle: "Precision tools for glass processing",
      description:
        "Glass tools are specialized instruments designed for creating patterns, names, or decorative designs on glass surfaces with professional precision. These glass engraving tools help scratch or mark glass gently without causing breakage, delivering clean and accurate results. Our durable glass marking tools are strong, easy to use, and perfect for decoration, personalization, or branding applications. ",
      image: "/images/tools.png", alt : "Essential Glass Cutting and Shaping Tools"
    },
    {
      title: "Glass Etching Sticker Rolls",
      subtitle: "Premium sticker rolls for decorative glass etching",
      description:
        "Glass tools are specialized instruments designed for creating patterns, names, or decorative designs on glass surfaces with professional precision. These glass engraving tools help scratch or mark glass gently without causing breakage, delivering clean and accurate results. Our durable glass marking tools are strong, easy to use, and perfect for decoration, personalization, or branding applications.",
      image: "/images/sticker.png", alt : "Durable Glass Etching Sticker Roll"
    },
    {
      title: "Silicon Release Paper",
      subtitle: "Easy peel release paper",
      description: "Silicon Release Paper is a smooth, shiny sheet used to cover the adhesive portion of the pad, providing protective coverage until use. This silicone-coated release liner features a thin silicon layer on both sides that prevents sticking and ensures effortless peeling without residue. Our easy-peel release paper keeps the adhesive clean and maintains optimal sticking power while making the pad easy to handle and apply without mess.",
      image: "/images/silicon.png", alt : "High-Quality Silicon Coated Release Paper"
    },
  ];

  const handleOpenModal = (product) => setSelectedProduct(product);
  const handleCloseModal = () => setSelectedProduct(null);

  // Limit products to 5 for mobile, show all for larger screens
  const limitedProducts =
    window.innerWidth < 640 ? products.slice(0, 5) : products;

return (
  <section
    id="products"
    data-aos="fade-up"
    className="px-4 sm:px-6 lg:px-24 py-16 font-['DM Sans'] bg-[#f7f7f8]"
  >
    {/* Intro Section */}
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-7xl mx-auto mb-16">
      <div className="flex-1 max-w-xl">
        <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-semibold leading-tight text-[#1C1C1C] mb-6">
          Our <br /> Products
        </h2>
      </div>
      <div className="flex-1 max-w-xl text-[#333333] text-[16px] sm:text-[18px] leading-7">
        <p>
          We offer a diverse portfolio of high-quality materials, including sanitary pad components, gumming products, and specialized glass tools and colors. Each product is carefully sourced and supplied to meet the evolving needs of manufacturers across various industries.
        </p>
      </div>
    </div>

    {/* Product Cards */}
    <div className="
      flex overflow-x-auto gap-6 no-scrollbar pb-4 max-w-7xl mx-auto
      sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible
    ">
      {limitedProducts.map((product, index) => (
        <div
          key={index}
          onClick={() => handleOpenModal(product)}
          className="cursor-pointer flex-shrink-0 sm:flex-shrink group border rounded-xl p-4 shadow-sm flex flex-col justify-between bg-white transform transition duration-300 hover:scale-105 hover:shadow-lg min-w-[250px]"
        >
          <img
            src={product.image}
           alt={product.alt || product.title}
            className="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-lg font-semibold mb-2 group-hover:text-black transition">
            {product.title}
          </h3>
          <p className="text-gray-500 text-sm mb-6">{product.subtitle}</p>
          <span className="text-gray-500 font-semibold text-sm flex items-center gap-1 group-hover:text-black transition">
            Know More →
          </span>
        </div>
      ))}
    </div>

    {/* View All Button */}
<div className="flex justify-center mt-10 max-w-7xl mx-auto">
  <Link
    to="/Products"
    onClick={() => window.scrollTo(0, 0)}
    className="
      px-6 py-3 bg-black text-white font-semibold rounded-full
      transition-transform duration-300 ease-in-out
      hover:scale-105 hover:shadow-lg
    "
  >
    View All Products →
  </Link>
</div>


    {/* Modal Component */}
    <ProductModal
      isOpen={!!selectedProduct}
      onClose={handleCloseModal}
      product={selectedProduct}
    />
  </section>
);

};

export default ProductsIntro;
