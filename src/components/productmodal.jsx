import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProductModal = ({ isOpen, onClose, product }) => {
  const navigate = useNavigate();

  const handleInterestedClick = () => {
    onClose(); // Close modal
    navigate('/contact'); // Navigate to contact page
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4 py-6 overflow-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-xl relative flex flex-col md:flex-row gap-6 max-w-[1165px] w-full md:h-[636px] max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black text-3xl font-bold"
            >
              ×
            </button>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.alt || product.title}
              className="w-full md:w-1/2 rounded-lg object-cover max-h-[300px] md:max-h-full"
            />

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="mt-4 md:mt-0">
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-[16px] sm:text-[18px] mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <button
                onClick={handleInterestedClick}
                className="bg-black text-white text-[16px] sm:text-[18px] px-6 py-4 rounded-full hover:bg-gray-800 font-semibold mt-4 md:mt-0"
              >
                Yes, I’m Interested
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
