import { motion } from "framer-motion";
import React from "react";

export interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  duration,
  features,
  popular = false,
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg h-full ${
        popular ? "border-2 border-amber-400" : "border border-white"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-8 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-4xl font-bold text-amber-600 mb-1">{price}</p>
        <p className="text-gray-500 mb-6">{duration}</p>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-amber-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <motion.button
          className={`w-full py-3 rounded-lg font-semibold mt-auto ${
            popular
              ? "bg-amber-500 hover:bg-amber-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          } transition duration-300`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
};

export default PricingCard;
