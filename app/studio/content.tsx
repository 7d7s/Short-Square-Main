"use client";
import { FaCamera, FaLightbulb, FaRulerCombined, FaWifi, FaParking, FaCoffee } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ImageCard from '@/components/common/GalleryCard';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch'

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

const images = [
    {
        id: 1,
        title: "Bride Portrait",
        client: "Vijay Weds Seema",
        year: "2020",
        category: "Wedding",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png",
    },
    {
        id: 2,
        title: "Fashion Shoot",
        client: "Chattisgarh",
        year: "2021",
        category: "Fashion",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744789303/fashio_exfcmi.avif",
    },
    {
        id: 3,
        title: "Architecture Marvel",
        client: "Vinayk",
        year: "2022",
        category: "Architecture",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/a_wkz3id.jpg",
    },
    {
        id: 4,
        title: "Street ",
        client: "nk",
        year: "2023",
        category: "Travel",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744791051/street_Photography_xz99dw.avif",
    },
    {
        id: 5,
        title: "Nature",
        client: "ram",
        year: "2021",
        category: "Nature",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744791310/sun_jgovbq.png",
    },
    {
        id: 6,
        title: "Portrait Perfection",
        client: "Tajmahal",
        year: "2025",
        category: "Portrait",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744798263/tajmahal_tl1hwc.avif",
    },
    {
        id: 7,
        title: "Portrait Perfection",
        client: "Framed",
        year: "2025",
        category: "Portrait",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744717887/Framed_in_Portraits_bsoncf.avif",
    },
    {
        id: 8,
        title: "Nature Loving",
        client: "Nature",
        year: "2025",
        category: "Nature",
        url: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744794923/sunset_wsbvva.avif",
    },
];

export default function StudioContent() {

    return (
        <div className="container mx-auto overflow-x-hidden">
            {/* Banner Section */}
            <Banner
                title="Our Creative Space"
                description="A professional photography studio designed to bring your vision to life"
                imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198089/d3_ourkxr.jpg"
            />

            {/* Studio Features */}
            <section className="py-10 rounded-3xl my-6 px-6 md:px-12 lg:px-20 text-white bg-primary-brown relative overflow-hidden">
                <motion.div
                    className="text-center mb-16 relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c8b390]">Features</span>
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-white/80 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Our studio is equipped with top-notch facilities to ensure your shoot goes smoothly.
                    </motion.p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                        },
                    }}
                >
                    {studioFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500"
                        >
                            <div className="flex items-center mb-5">
                                <motion.div
                                    initial={{ rotate: -10, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c8b390] to-[#9a8368] flex items-center justify-center text-2xl shadow-sm"
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-white/70 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <style jsx>{`
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.1); }
    }
    .animate-pulse-slow {
      animation: pulse-slow 10s ease-in-out infinite;
    }
  `}</style>
            </section>


            {/* Gallery Section */}
            <section className="py-6 rounded-xl">
                <div className="">
                    <motion.div
                        className="text-center mb-16 relative z-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#c8b390]">Gallery</span>
                        </motion.h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {images.map((img) => (
                            <ImageCard key={img.id} img={img} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <GetInTouch
                title="Ready to Start Your Project?"
                subtitle="Get in touch with our team to discuss your ideas"
                buttonText="Contact us call"
            />
        </div>
    );
}
