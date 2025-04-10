"use client";
import { FaCamera, FaLightbulb, FaRulerCombined, FaWifi, FaParking, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/common/featureCard'
import ImageCard from '@/components/common/imageCard';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch'
import PricingCard, { PricingCardProps } from "@/components/common/pricingCard";;

interface FeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

//Pricing Data
const pricingOptions: PricingCardProps[] = [
  {
    title: "Half Day",
    price: "$150",
    duration: "4 hours",
    features: [
      "Access to basic equipment",
      "1 backdrop setup",
      "Natural light only",
      "Lounge access",
    ],
  },
  {
    title: "Full Day",
    price: "$275",
    duration: "8 hours",
    features: [
      "Full equipment access",
      "3 backdrop setups",
      "Lighting equipment",
      "Assistant available",
      "Lounge access",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "$450",
    duration: "12 hours",
    features: [
      "Full equipment access",
      "Unlimited backdrops",
      "Professional lighting",
      "Dedicated assistant",
      "Priority scheduling",
      "Refreshments included",
    ],
  },
];

// Features Data 
const studioFeatures = [
    {
      icon: <FaCamera className="text-primary-gunmetal text-3xl" />,
      title: "Professional Equipment",
      description: "High-end cameras, lenses, and lighting equipment available for rent",
    },
    {
      icon: <FaLightbulb className="text-primary-gunmetal text-3xl" />,
      title: "Versatile Lighting",
      description: "Adjustable lighting setups for any style of photography",
    },
    {
      icon: <FaRulerCombined className="text-primary-gunmetal text-3xl" />,
      title: "Spacious Area",
      description: "1200 sq ft of open space with customizable backdrops",
    },
    {
      icon: <FaWifi className="text-primary-gunmetal text-3xl" />,
      title: "High-Speed WiFi",
      description: "Fast internet for instant photo reviews and uploads",
    },
    {
      icon: <FaParking className="text-primary-gunmetal text-3xl" />,
      title: "Free Parking",
      description: "Ample parking space for you and your team",
    },
    {
      icon: <FaCoffee className="text-primary-gunmetal text-3xl" />,
      title: "Refreshment Area",
      description: "Comfortable lounge with coffee and snacks",
    },
  ];

  // Sample studio images data
  const images = [
    { 
      id: 1,
      title: "Bride Portrait",
      client: "vijay",
      year: "2020",
      category: "Wedding",
      url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/wedding_i0mth4.jpg",
    },
    {
      id: 2,
      title: "Fashion Shoot",
      client: "rahulk",
      year: "2021",
      category: "Fashion",
      url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion_zs20r0.avif",
    },
    {
      id: 3,
      title: "Architecture Marvel",
      client: "vibha",
      year: "2022",
      category: "Architecture",
      url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/a_wkz3id.jpg",
    },
    {
      id: 4,
      title: "Urban Documentary",
      client: "nk",
      year: "2023",
      category: "Documentary",
      url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/camera4_ituqwy.jpg",
    },
    {
      id: 5,
      title: "Classic Commercial",
      client: "ram",
      year: "2021",
      category: "Commercial",
      url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg",
    },
    {
      id: 6,
      title: "Portrait Perfection",
      client: "vijay",
      year: "2025",
      category: "Portrait",
      url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/fasion2_mc2vh9.jpg",
    },  
    // Add more...
  ];

export default function StudioPage() {

  return (
    <div className="container mx-auto min-h-screen overflow-x-hidden">
          {/* Banner Section */}
          <Banner
      title="Our Creative Space"
      description="A professional photography studio designed to bring your vision to life"
      imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg"
    />

      {/* Studio Features with stagger animation */}
      <section  className="py-16 rounded-2xl my-10 px-4 md:px-8 bg-primary-brown">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Studio Features</h2>
          <p className="max-w-2xl mx-auto">
            Our studio is equipped with top-notch facilities to ensure your shoot goes smoothly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studioFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      </section>

      {/* Gallery Section with scroll-triggered animations */}
      <section className="py-16  px-4 rounded-2xl">
        <div className="">
          <motion.h2 
            className="text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Studio Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
        <ImageCard key={img.id} img={img} />
      ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 my-10 px-4 rounded-2xl bg-primary-brown">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Pricing Options
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingOptions.map((option, idx) => (
          <motion.div key={idx} className="pricing-card" whileHover={{ y: -10 }}>
            <PricingCard {...option} />
          </motion.div>
        ))}
      </div>
    </section>

      {/* CTA Section with parallax effect */}
      <GetInTouch
          title="Ready to Start Your Project?"
          subtitle="Get in touch with our team to discuss your ideas"
          buttonText="Contact us call"
         />
    </div>
  );
}


