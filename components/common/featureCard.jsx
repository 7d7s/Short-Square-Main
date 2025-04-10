import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="feature-item"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="p-4 bg-white h-full py-10 text-black rounded-lg shadow hover:shadow-lg transition">
        <div className="mb-4 text-primary-gunmetal">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
