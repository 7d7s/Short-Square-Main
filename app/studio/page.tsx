"use client";
import { FaCamera, FaLightbulb, FaRulerCombined, FaWifi, FaParking, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/common/featureCard'
import ImageCard from '@/components/common/imageCard';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';

interface FeatureCard {
    icon: React.ReactNode;
    title: string;
    description: string;
  }

interface PricingCardProps {
    title: string;
    price: string;
    duration: string;
    features: string[];
    popular?: boolean;
  }
  
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
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pricing Options
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <motion.div className=" pricing-card" whileHover={{ y: -10 }}>
            <PricingCard 
              title="Half Day"
              price="$150"
              duration="4 hours"
              features={[
                'Access to basic equipment',
                '1 backdrop setup',
                'Natural light only',
                'Lounge access'
              ]}
            />
          </motion.div>
          <motion.div className="pricing-card" whileHover={{ y: -10 }}>
            <PricingCard 
              title="Full Day"
              price="$275"
              duration="8 hours"
              features={[
                'Full equipment access',
                '3 backdrop setups',
                'Lighting equipment',
                'Assistant available',
                'Lounge access'
              ]}
              popular
            />
          </motion.div>
          <motion.div className="pricing-card" whileHover={{ y: -10 }}>
            <PricingCard 
              title="Premium"
              price="$450"
              duration="12 hours"
              features={[
                'Full equipment access',
                'Unlimited backdrops',
                'Professional lighting',
                'Dedicated assistant',
                'Priority scheduling',
                'Refreshments included'
              ]}
            />
          </motion.div>
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


function PricingCard({ title, price, duration, features, popular = false }: PricingCardProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg h-full ${popular ? 'border-2 border-amber-400' : 'border border-white'}`}>
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
              <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <motion.button 
          className={`w-full py-3 rounded-lg font-semibold mt-auto ${popular ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition duration-300`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
}