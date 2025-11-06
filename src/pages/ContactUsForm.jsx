// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/footer";

// const ContactUs = () => {
//   return (
//     <section className="relative font-['DM Sans'] bg-white">
//       {/* Top black section */}
//       <div className="bg-[#121212] text-white px-4 sm:px-6 lg:px-24 relative z-20">
//         <div className="flex flex-col lg:flex-row justify-between items-start min-h-[742px] py-24 gap-20">
//           {/* Left: Text */}
//           <div className="lg:w-2/3">
//             <h2 className="text-3xl sm:text-5xl font-semibold mb-10">Get in touch</h2>
//             <p className="text-gray-300 max-w-md text-[20px]">
//               Have A Question, Need Product Information, Or Want To Discuss A Custom Requirement? We’re Here To Help.
//             </p>
//           </div>

//           {/* Right: Contact Info */}
//           <div className="lg:w-1/3 flex flex-col gap-10">
//             <div className="flex items-start gap-6">
//               <span className="text-white text-xl">📧</span>
//               <div>
//                 <p className="text-xl text-gray-400 mb-5">Email</p>
//                 <p className="text-xl font-semibold">infoHarihar@gmail.com</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-6">
//               <span className="text-white text-xl">📞</span>
//               <div>
//                 <p className="text-xl text-gray-400 mb-5">Phone</p>
//                 <p className="text-xl font-semibold">+91 95944 49902</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* White Card: Overlapping Form */}
//       <div className="relative z-30 px-4 sm:px-6 lg:px-24 -mt-[400px] mb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden">
//           {/* Form */}
//           <div className="p-8 md:p-12 ">
//             <h3 className="text-4xl  font-semibold mb-10 mt-8">Send Us a Message</h3>
//             <form className="space-y-8">
//             {/* Name + Email */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
//                 <div>
//                 <label className="block text-xl text-gray-500 mb-6">Name</label>
//                 <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                 />
//                 </div>
//                 <div>
//                 <label className="block text-xl text-gray-500 mb-6">Email</label>
//                 <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                 />
//                 </div>
//             </div>

//             {/* Phone + Company */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
//                 <div>
//                 <label className="block text-xl text-gray-500 mb-6">Phone</label>
//                 <input
//                     type="text"
//                     placeholder="Phone#"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                 />
//                 </div>
//                 <div>
//                 <label className="block text-xl text-gray-500 mb-6">Company</label>
//                 <input
//                     type="text"
//                     placeholder="Company Name"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                 />
//                 </div>
//             </div>

//             {/* Message */}
//             <div>
//                 <label className="block text-xl text-gray-500 mb-6">Message</label>
//                 <textarea
//                 placeholder="Write A Message"
//                 className="w-full border-b border-gray-300 focus:border-black p-2 outline-none h-12 resize-none text-gray-700"
//                 />
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit "
//                 className="px-12 py-6  rounded-full border border-black hover:bg-black hover:text-white transition"
//             >
//                 Send message
//             </button>
//             </form>

//           </div>

//           {/* Right Side Image */}
//           <div className="hidden lg:block">
//             <img
//               src="/images/call.png"
//               alt="Contact Illustration"
//               className="w-[745px] h-[720px] object-cover transform -scale-x-100"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React from 'react';
import ContactForm from '../components/Contactus';
import Header from '../components/Header';
import Footer from '../components/footer';
import { Helmet } from "react-helmet";


const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Contact Us | Harihar Gummings</title>
      <meta
        name="description"
        content="Get in touch with Harihar Enterprises for business inquiries, support, and product information. We're here to help you with all your manufacturing material needs."

      />
      <meta
        name="keywords"
        content="Contact Harihar Enterprises, manufacturing support, sanitary pad raw materials, hygiene product suppliers"
      />
      <meta name="author" content="Harihar Enterprises" />
      <link rel="canonical" href="http://localhost:3000/contact" />
      <meta property="og:title" content="Contact | Harihar Enterprises" />
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
        "name": "Harihar Gummings",
        "url": "https://www.hariharbusiness.com",
        "logo": "https://www.hariharbusiness.com/public/images/logo.png",
        "description": "Harihar Gummings is a leading manufacturer and wholesale supplier of sanitary pad raw materials including nonwoven fabrics, SAP, PE film, release paper, and gumming sheets for hygiene product manufacturing.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9594449902",
          "contactType": "Customer Support",
          "areaServed": "IN",
          "availableLanguage": "English"
        
        }
      }
    `}
  </script>
      </Helmet>
      {/* Header */}
      <Header />

      
        <ContactForm />
      

      {/* Footer */}
      <Footer />
    </div>
  );
  
};

export default ContactUs;
