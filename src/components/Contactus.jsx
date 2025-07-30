// import React from "react";

// const ContactUs = () => {
//   return (
//     <section className="relative font-['DM Sans'] bg-white">
//       {/* Top black section */}
//       <div className="bg-[#121212] text-white px-4 sm:px-6 lg:px-24 relative z-20">
//       <div className="
//         max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start
//         min-h-[500px] sm:min-h-[600px] lg:min-h-[742px]
//         py-24 sm:py-20 lg:py-24 gap-10 sm:gap-16 lg:gap-20
//       ">

          
//           {/* Left Text */}
//           <div className="w-full lg:w-2/3">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-10">
//               Get in touch
//             </h2>
//             <p className="text-gray-300 max-w-md text-base sm:text-lg lg:text-xl">
//               Have a question, need product information, or want to discuss a custom requirement? We’re here to help.
//             </p>
//           </div>

//           {/* Right Contact Info */}
//         <div className="w-full lg:w-1/3 flex flex-col gap-8 sm:gap-10">
//           {/* Email */}
//           <div className="flex items-start gap-4 sm:gap-6">
//             <img src="/images/phone.png" alt="Phone Icon" className="w-4 h-4 sm:w-9 sm:h-7" />
//             <div>
//               <p className="text-base sm:text-lg font-medium text-gray-400 mb-1 sm:mb-2">Phone</p>
//               <a
//                 href="tel:+919594449902"
//                 className="inline-block text-lg sm:text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"
//               >
//                 +91 95944 49902
//               </a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4 sm:gap-6">
//             <img src="/images/email.png" alt="Mail Icon" className="w-4 h-4 sm:w-9 sm:h-7" />
//             <div>
//               <p className="text-base sm:text-lg font-medium text-gray-400 mb-1 sm:mb-2">Email</p>
//               <a
//                 href="mailto:infoHarihar@gmail.com"
//                 className="inline-block text-lg sm:text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"
//               >
//                 infoHarihar@gmail.com
//               </a>
//             </div>
//           </div>

//         </div>


//         </div>
//       </div>

//       {/* White Card Overlap */}
//       <div className="
//           relative z-30 px-4 sm:px-6 lg:px-24 
//           -mt-16 sm:-mt-40 lg:-mt-[400px] 
//           mb-12 sm:mb-20 lg:mb-24
//         ">

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden">
          
//           {/* Contact Form */}
//           <div className="p-6 sm:p-8 md:p-12">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-10 mt-4 sm:mt-8">Send Us a Message</h3>
//             <form className="space-y-6 sm:space-y-8">
              
//               {/* Name + Email */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <label className="block text-sm sm:text-base lg:text-lg text-gray-500 mb-2">Name</label>
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm sm:text-base lg:text-lg text-gray-500 mb-2">Email</label>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                   />
//                 </div>
//               </div>

//               {/* Phone + Company */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//                 <div>
//                   <label className="block text-sm sm:text-base lg:text-lg text-gray-500 mb-2">Phone</label>
//                   <input
//                     type="text"
//                     placeholder="Phone#"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm sm:text-base lg:text-lg text-gray-500 mb-2">Company</label>
//                   <input
//                     type="text"
//                     placeholder="Company Name"
//                     className="w-full border-b border-gray-300 focus:border-black p-2 outline-none text-gray-700"
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm sm:text-base lg:text-lg text-gray-500 mb-2">Message</label>
//                 <textarea
//                   placeholder="Write a message"
//                   className="w-full border-b border-gray-300 focus:border-black p-2 outline-none h-20 resize-none text-gray-700"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full border border-black hover:bg-black hover:text-white transition"
//               >
//                 Send message
//               </button>
//             </form>
//           </div>

//           {/* Image */}
//           <div className="hidden lg:block">
//             <img
//               src="/images/call.png"
//               alt="Contact Illustration"
//               className="w-full h-full object-cover transform -scale-x-100"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzunq69bwwpXQNxwRTOYOq_prNlHlrAYpoCGdP-mTXJg9Pa_VFQJgNMThZhRCn18nccqA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section className="relative font-['DM Sans'] bg-white">
      {/* Top black section */}
      <div className="bg-[#1D1D1D] text-white px-4 sm:px-6 lg:px-24 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start min-h-[500px] sm:min-h-[600px] lg:min-h-[742px] py-24 sm:py-20 lg:py-24 gap-10 sm:gap-16 lg:gap-20">
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-10">Get in touch</h2>
            <p className="text-gray-300 max-w-md text-base sm:text-lg lg:text-xl">
              Have a question, need product information, or want to discuss a custom requirement? We’re here to help.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8 sm:gap-10">
            <div className="flex items-start gap-4 sm:gap-6">
              <img src="/images/phone.png" alt="Phone Icon" className="w-4 h-4 sm:w-9 sm:h-7" />
              <div>
                <p className="text-base sm:text-lg font-medium text-gray-400 mb-1 sm:mb-2">Phone</p>
                <a href="tel:+919594449902" className="inline-block text-lg sm:text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  +91 95944 49902
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <img src="/images/email.png" alt="Mail Icon" className="w-4 h-4 sm:w-9 sm:h-7" />
              <div>
                <p className="text-base sm:text-lg font-medium text-gray-400 mb-1 sm:mb-2">Email</p>
                <a href="mailto:harihar.enterprises2001@gmail.com" className="inline-block text-lg sm:text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  harihar.enterprises2001@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Card Overlap */}
      <div className="relative z-30 px-4 sm:px-6 lg:px-24 -mt-16 sm:-mt-40 lg:-mt-[400px] mb-12 sm:mb-20 lg:mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-10 mt-4 sm:mt-8">Send Us a Message</h3>
           <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[15px] leading-[22.5px] text-gray-500 mb-6">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border-b border-gray-600 focus:border-black p-0 pb-3 outline-none text-gray-700 placeholder:text-[20px] placeholder:leading-[30px]  placeholder:text-gray-700"
          />
        </div>

        <div>
          <label className="block text-[15px] leading-[22.5px] text-gray-500 mb-6">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border-b border-gray-600 focus:border-black p-0 pb-3 outline-none text-gray-700 placeholder:text-[20px] placeholder:leading-[30px]  placeholder:text-gray-700"
          />
        </div>
      </div>

      {/* Phone and Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[15px] leading-[22.5px] text-gray-500 mb-6">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone#"
            required
            className="w-full border-b border-gray-600 focus:border-black p-0 pb-3 outline-none text-gray-700 placeholder:text-[20px] placeholder:leading-[30px]  placeholder:text-gray-700"
          />
        </div>

        <div>
          <label className="block text-[15px] leading-[22.5px] text-gray-500 mb-6">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border-b border-gray-600 focus:border-black p-0 pb-3 outline-none text-gray-900 placeholder:text-[20px] placeholder:leading-[30px]  placeholder:text-gray-700"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[15px] leading-[22.5px] text-gray-500 mb-6">Message*</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write a message"
          required
          className="w-full border-b border-gray-600 focus:border-black p-0 pb-1 outline-none h-24 resize-none text-gray-900 placeholder:text-[20px] placeholder:leading-[30px] placeholder:text-gray-700"
        />
      </div>


      {/* Submit Button */}
      <button
        type="submit"
        className="mt-8 w-fit px-8 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition"
      >
        Send message
      </button>
    </form>
          </div>

          <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5406037309285!2d72.927324!3d19.1277993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c78c374b2c5d%3A0x4895a054251b7c5!2sOmkar%20Hiranandani%20Industrial%20Estate%2C%20Laxmi%20Udyog%20Nagar%2C%20Kanjurmarg%20West%2C%20Bhandup%20West%2C%20Mumbai%2C%20Maharashtra%20400078!5e0!3m2!1sen!2sin!4v1752852825504!5m2!1sen!2sin"   style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[300px] sm:h-[450px] lg:h-[742px] rounded-xl"></iframe>
      </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
