// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/footer";
// import { AnimatePresence, motion } from "framer-motion";

// const products = [
//   // Sanitary Pad Raw Material
//   { title: "Hydrophilic Layer", category: "Sanitary Pad Raw Material", subtitle: "High absorption layer for sanitary pads", image: "/images/hydro.png", link: "#" },
//   { title: "Dry Net", category: "Sanitary Pad Raw Material", subtitle: "Soft breathable top layer", image: "/images/drynet.png", link: "#" },
//   { title: "Anion Chip", category: "Sanitary Pad Raw Material", subtitle: "Antibacterial protection layer", image: "/images/anion.png", link: "#" },
//   { title: "Airlaid Paper", category: "Sanitary Pad Raw Material", subtitle: "Premium airlaid material", image: "/images/airlaid.png", link: "#" },
//   { title: "SAP", category: "Sanitary Pad Raw Material", subtitle: "Super Absorbent Core", image: "/images/sap.png", link: "#" },
//   { title: "PE Film", category: "Sanitary Pad Raw Material", subtitle: "Soft backsheet PE film", image: "/images/pefilm.png", link: "#" },
//   { title: "Silicon Release Paper", category: "Sanitary Pad Raw Material", subtitle: "Easy peel release paper", image: "/images/silicon.png", link: "#" },
//   { title: "Body Tape", category: "Sanitary Pad Raw Material", subtitle: "High adhesion sanitary pad tapes", image: "/images/bodytape.png", link: "#" },
//   { title: "Hydrophobic Layer", category: "Sanitary Pad Raw Material", subtitle: "High adhesion sanitary pad tapes", image: "/images/hydrophobic.png", link: "#" },


//   // Glass Raw Material
//   { title: "Glass Colours", category: "Glass Raw Material", subtitle: "Rich vibrant glass colors", image: "/images/colors.png", link: "#" },
//   { title: "Glass Tools", category: "Glass Raw Material", subtitle: "Precision glass cutting tools", image: "/images/tools.png", link: "#" },
//   { title: "Glass Etching Sticker Rolls", category: "Glass Raw Material", subtitle: "Premium etching stickers", image: "/images/sticker.png", link: "#" },
// ];

// const ProductsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProducts = selectedCategory === "All"
//     ? products
//     : products.filter(item => item.category === selectedCategory);

//   const categories = ["All","Sanitary Pad Raw Material", "Glass Raw Material"];

//     return (
//     <>
//       <Header />

//       <main className="font-['DM Sans'] bg-[#f7f7f8]">
//         <section className="px-4 sm:px-6 lg:px-24 py-16 max-w-[1480px] mx-auto">

//           {/* Heading */}
//           <div className="text-center mb-12">
//             <h2 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold mb-6">
//                 Our Products
//             </h2>
//             <p className="text-gray-500 max-w-2xl mx-auto text-[18px] sm:text-[20px] lg:text-[22px] leading-8">
//                 Explore our premium range of sanitary pad and glass raw materials designed to power manufacturing excellence.
//             </p>
//             </div>

//           {/* Category Tabs */}
//           <div className="flex justify-center flex-wrap gap-4 mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-8 py-4 rounded-full text-base font-semibold transition-all ${
//                   selectedCategory === cat
//                     ? "bg-black text-white"
//                     : "bg-white text-black border border-gray-300 hover:bg-gray-100"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Animated Product Cards */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="flex flex-wrap justify-center gap-8"
//             >
//               {filteredProducts.map((product, index) => (
//                 <a
//                   key={index}
//                   href={product.link}
//                   className="group border border-gray-300 rounded-xl p-4 bg-white shadow-sm flex flex-col justify-between transform transition hover:scale-105 hover:shadow-lg"
//                   style={{ width: "286px", height: "434px" }}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="rounded-lg mb-4 w-full h-48 object-cover"
//                   />
//                   <h3 className="text-lg font-semibold mb-2 group-hover:text-black">{product.title}</h3>
//                   <p className="text-gray-500 text-sm mb-6">{product.subtitle}</p>
//                   <span className="text-gray-700 font-semibold text-sm group-hover:text-black flex items-center gap-1">
//                     Know More →
//                   </span>
//                 </a>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//         </section>
//       </main>

//       <Footer />
//     </>
// );
// }
// export default ProductsPage;

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { AnimatePresence, motion } from "framer-motion";
import ProductModal from "../components/productmodal"; // assuming you have ProductModal.jsx created
import { Helmet } from "react-helmet";


const products = [
  // Sanitary Pad Raw Material
  {
    title: "Hydrophilic Layer(Non-Woven)",
    category: "Sanitary Pad Raw Material",
    subtitle: "High absorption layer for sanitary pads",
    description: "Made from ultra-soft non-woven hydrophilic material (15–30 GSM), this premium liquid acquisition layer features a cotton-like topsheet that instantly channels menstrual flow away from skin. The advanced fiber structure provides fast liquid penetration and rapid absorption while anti-rewet properties keep the surface dry even under pressure.",
    image: "/images/hydro.png", alt: "hydrophilic nonwoven layer roll for liquid absorption in sanitary pads and diapers",



    link: "#",
  },
  {
    title: "Dry Net",
    category: "Sanitary Pad Raw Material",
    subtitle: "Soft breathable top layer",
    description: "Made from soft non-woven fabric with tiny holes, this perforated dry net layer quickly pulls menstrual fluid through while keeping the top surface dry and clean. The micro-perforated design prevents wetness and provides smooth, comfortable wear without irritation. Our breathable dry net offers excellent leak protection and maintains dryness throughout use for all-day comfort and freshness.",
    image: "/images/drynet.png", 
    alt: "dry net top sheet for sanitary pads with quick absorption and dryness",
    link: "#",
  },
  {
    title: "Anion Chip",
    category: "Sanitary Pad Raw Material",
    subtitle: "Antibacterial protection layer",
    description: "The anion chip is a small green or blue strip placed in the center of the pad that provides natural antibacterial and odor control benefits. This negative ion technology naturally eliminates harmful bacteria and neutralizes unpleasant odors, keeping you fresh and confident during periods. Our chemical-free anion strip works without harsh additives, preventing itching and irritation for safe daily use.",
    image: "/images/anion.png", alt: "anion chip inserts for sanitary napkins with antibacterial benefits",
    link: "#",
  },
  {
    title: "Airlaid Paper",
    category: "Sanitary Pad Raw Material",
    subtitle: "Premium airlaid material",
    description: "Airlaid paper features a soft cotton-like texture and serves as the primary absorbent core inside the sanitary pad. This ultra-absorbent airlaid material has a sponge-like structure that rapidly draws menstrual flow toward the center while keeping the top surface dry.",
    image: "/images/airlaid.png", alt: "airlaid paper roll for absorbent core in hygiene and medical products",
    link: "#",
  },
  {
    title: "SAP",
    category: "Sanitary Pad Raw Material",
    subtitle: "Super Absorbent Polymer",
    description: "SAP (Super Absorbent Polymer) is a soft, flat layer inside the pad filled with tiny absorbent beads that provide exceptional liquid retention. These super absorbent polymer beads instantly transform menstrual fluid into thick gel upon contact, locking fluid securely in place to prevent leakage and surface moisture. ",
    image: "/images/sap.png", alt: "Super absorbent polymer SAP material for feminine hygiene products",
    link: "#",
  },
  {
    title: "PE Film",
    category: "Sanitary Pad Raw Material",
    subtitle: "Soft backsheet PE film",
    description: "PE Film is a soft plastic sheet positioned at the bottom of the pad that serves as the primary waterproof barrier. This breathable PE backsheet completely prevents liquid penetration while allowing air circulation for optimal comfort and freshness. Our flexible polyethylene film is thin and durable, designed to block wetness while maintaining breathability.",
    image: "/images/pe gumming.png", alt: "Soft backsheet PE film material with printed pattern for sanitary pads",
    link: "#",
  },
  {
    title: "Silicon Release Paper",
    category: "Sanitary Pad Raw Material",
    subtitle: "Easy peel release paper",
    description: "Silicon Release Paper is a smooth, shiny sheet used to cover the adhesive portion of the pad, providing protective coverage until use. This silicone-coated release liner features a thin silicon layer on both sides that prevents sticking and ensures effortless peeling without residue. Our easy-peel release paper keeps the adhesive clean and maintains optimal sticking power while making the pad easy to handle and apply without mess.",
    image: "/images/silicon.png", alt: "White silicon release paper roll for easy peel adhesive backing",
    link: "#",
  },
  {
    title: "Body Tape",
    category: "Sanitary Pad Raw Material",
    subtitle: "Invisible support for backless and strapless outfits",
    description: "Body Tape is a specialized adhesive tape used by fashion designers to secure clothing directly onto the body for seamless styling. This double-sided silicon body tape features silicon coating on both sides that provides strong adhesion without skin damage. Our skin-safe fashion tape uses gentle, hypoallergenic adhesive that prevents itching and rashes.",
    image: "/images/bodytape.png", alt: "Skin-tone body tape strips for women's clothing and fashion needs",
    link: "#",
  },
  {
    title: "Hydrophobic Layer(Non-Woven)",
    category: "Sanitary Pad Raw Material",
    subtitle: "Prevents backflow of liquids",
    description: "The hydrophobic layer is a thin sheet within the pad designed to repel liquid and prevent surface absorption. This liquid-repelling barrier pushes menstrual fluid away from the top and guides it toward the absorbent core below. Our hydrophobic material prevents side leakage and maintains surface dryness while keeping clothes completely clean.",
    image: "/images/hydrophobic.png", alt: "White hydrophobic layer material preventing liquid backflow in hygiene products",
    link: "#", 
  },
  {
    title: "Silicon to Silicon Gumming",
    category: "Sanitary Pad Raw Material",
    subtitle: "Strong bonding for non-woven silicon layers",
    description: "Silicon to silicon gumming is a specialized adhesive technique used to bond two silicon-coated surfaces in hygiene products. This advanced silicon bonding method ensures secure adhesion without compromising flexibility or comfort.",
    image: "/images/silicon to silicon.png", alt: "Silicon gumming adhesive roll for strong bonding in non-woven materials",
    link: "#",
},
{
    title: "Collar Pad",
    category: "Sanitary Pad Raw Material",
    subtitle: "Supports shape and structural integrity",
    description: "The collar pad is a specialized insert used in shirt manufacturing to maintain collar shape and provide structured support. This collar reinforcement pad prevents collar deformation and maintains a crisp, professional appearance throughout wear. Our structured collar insert eliminates wrinkles and provides better collar positioning and stability.",
    image: "/images/collor pad.png", alt: "Shirt collar pad inserts for maintaining collar shape and structure",
    link: "#",
},
{
    title: "35-40 mm Strip Gumming",
    category: "Sanitary Pad Raw Material",
    subtitle: "Secure adhesion for pad positioning",
    description: "The 35-40 mm strip gumming is a pressure-sensitive adhesive strip applied to the back of sanitary pads to ensure firm attachment to underwear. This optimal-width adhesive strip provides balanced hold without compromising comfort or causing bunching during wear. ",
    image: "/images/35mm-40mm strip gumming.png", alt: "Purple strip gumming tape for secure pad positioning and adhesion",
    link: "#",
},





  // Glass Raw Material
  {
    title: "M4 Granite Marble Roll",
    category: "Glass Raw Material",
    subtitle: "Scratch-resistant roll for granite and marble handling",
    description: "The M4 Granite Marble Roll is a specialized protective layer designed for storage, transportation, and installation of granite and marble surfaces. This premium surface protection film prevents scratches, stains, and surface damage while ensuring materials retain their polished finish.",
    image: "/images/m4granite.png",
    link: "#",
},

{
    title: "Superspray Gun",
    category: "Glass Raw Material",
    subtitle: "High-efficiency spraying for uniform surface coating",
    description: "The Superspray Gun is a premium-quality tool designed for precise and consistent application of coatings, paints, and other liquids. This professional spray gun features adjustable pressure controls and a durable nozzle that ensures optimal fluid delivery and uniform coverage. Our high-performance coating applicator is suitable for automotive, construction, and manufacturing industries.",
    image: "/images/superspray gun.png",
    link: "#",
},

{
    title: "Heavy-Duty Plier",
    category: "Glass Raw Material",
    subtitle: "Versatile gripping and cutting tool for industrial use",
    description: "The Heavy-Duty Plier is an essential hand tool designed for gripping, bending, and cutting wires or metal components with superior strength. Made from high-carbon steel with anti-rust coating, this professional-grade plier provides exceptional leverage and long-lasting durability. Our heavy-duty grip tool features a non-slip ergonomic handle for comfortable operation during extended use.",
    image: "/images/plier.png",
    link: "#",
},





  {
    title: "Glass Colours",
    category: "Glass Raw Material",
    subtitle: "Rich vibrant glass colors",
    description: "Glass colours are specialized paints formulated for creating beautiful designs on glass surfaces including windows, bottles, mirrors, and decorative items. These high-quality glass paints are bright, shiny, and long-lasting, delivering vibrant color intensity that maintains brilliance over time. Our permanent glass colours feature superior adhesion that sticks well to glass and resists washing and fading.",
    image: "/images/colors.png",
    link: "#",
  },
  {
    title: "Green Oxide",
    category: "Glass Raw Material",
    subtitle: "High-quality pigment for flooring and surface finishes",
    description: "Green Oxide is a premium-grade pigment widely used in flooring, tiles, paver blocks, and colored cement applications for superior color performance. This high-quality iron oxide pigment provides a rich, consistent green tone with excellent color stability and uniform distribution. Our fade-resistant green oxide offers exceptional durability and weather resistance, ensuring long-lasting color retention under harsh conditions.",
    image: "/images/green oxide.png",
    link: "#",
},

  {
    title: "Sencan Machine Belt Sander",
    category: "Glass Raw Material",
    subtitle: "High-performance tool for smooth surface results",
    description: "The Sencan Belt Sander is a powerful tool designed for smoothing, leveling, and shaping wood, metal, and other surfaces with professional precision. This high-performance belt sander features a robust high-speed motor and adjustable sanding belt system suitable for both heavy-duty industrial work and fine finishing tasks. The ergonomic design ensures user comfort and precision during prolonged use while reducing fatigue.",
    image: "/images/sencan machine belt sander.png",
    link: "#",
  },

  {
    title: "Glass Tools",
    category: "Glass Raw Material",
    subtitle: "Precision glass cutting tools",
    description: "Glass tools are specialized instruments designed for creating patterns, names, or decorative designs on glass surfaces with professional precision. These glass engraving tools help scratch or mark glass gently without causing breakage, delivering clean and accurate results. Our durable glass marking tools are strong, easy to use, and perfect for decoration, personalization, or branding applications.",
    image: "/images/tools.png",
    link: "#",
  },
  {
    title: "Glass Etching Sticker Rolls",
    category: "Glass Raw Material",
    subtitle: "Premium etching stickers",
    description: "This glass etching stencil roll is a specialized sticky sheet for creating precise patterns on glass surfaces. Simply cut your shape, stick it on glass, and apply etching cream or sandblasting for clear, defined designs. Our adhesive stencil material provides clean finishing with sharp edges and works well on mirrors, windows, and glass doors.",
    image: "/images/sticker.png",
    link: "#",
  },
    {
    title: "Aluminium Suction Lifter",
    category: "Glass Raw Material",
    subtitle: "Safe and easy handling of smooth surfaces",
    description: "The aluminium suction lifter is a durable tool for lifting smooth surfaces like glass, tiles, and sheet metal. Made from lightweight yet strong aluminium construction, this professional suction lifter features powerful suction cups that create secure grip and reduce breakage risk. Our heavy-duty material lifter improves workplace safety during installation and transport operations.",
    image: "/images/aluminiumn-suction.png",
    link: "#",
 },
];


const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => setSelectedProduct(product);
  const handleCloseModal = () => setSelectedProduct(null);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(item => item.category === selectedCategory);

  const categories = ["All", "Sanitary Pad Raw Material", "Glass Raw Material"];

  return (
    <>
      <Header />

      <Helmet>
         <title>Products | Harihar Gummings</title>
      <meta
        name="description"
        content="Browse high-quality raw materials for sanitary pads and glass items. We offer cotton-like layers, absorbent sheets, SAP, and soft tissues for hygiene and manufacturing needs."
      />
      <meta
        name="keywords"
        content="sanitary pad raw materials, glass raw materials, nonwoven fabric, SAP, PE film, manufacturing materials"
      />
      <meta name="author" content="Harihar Enterprises" />
      <link rel="canonical" href="http://localhost:3000/products" />
      <meta property="og:title" content="Products | Harihar Enterprises" />
  <meta property="og:description" content="Browse premium sanitary pad layers, non-woven materials, and manufacturing solutions. Trusted quality from Harihar Enterprises." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Harihar Enterprises" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />

   <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Harihar Enterprises",
        "url": "https://www.example.com", 
        "logo": "https://www.example.com/logo.png",
        "description": "Leading manufacturer and wholesale supplier of industrial non-woven fabric, gumming materials, and hygiene solutions in India.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-959449902",
          "contactType": "Customer Support",
          "areaServed": "IN",
          "availableLanguage": "English"
        
      
      }
    `}
  </script>

      </Helmet>

      <main className="font-['DM Sans'] bg-[#f7f7f8]">

      <section className="px-4 sm:px-6 lg:px-24 py-16 max-w-[1480px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold mb-6 leading-tight">
            Our Products
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[16px] sm:text-[18px] lg:text-[22px] leading-7 sm:leading-8">
            Explore our premium range of sanitary pad and glass raw materials designed to power manufacturing excellence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6"

          >
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => handleOpenModal(product)}
                className="cursor-pointer group border border-gray-300 rounded-xl p-4 bg-white shadow-sm flex flex-col justify-between transform transition hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-black">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.subtitle}</p>
                <span className="text-gray-700 font-semibold text-sm group-hover:text-black flex items-center gap-1">
                  Know More →
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Product Modal */}
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={handleCloseModal}
          product={selectedProduct}
        />

      </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductsPage;
