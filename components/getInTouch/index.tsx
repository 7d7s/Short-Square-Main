"use client";
import { motion } from "framer-motion";
import DynamicButton from "@/components/common/button"; // Adjust the import path as needed

interface ReadyToCreateProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

function GetInTouch({
  title = "Ready to Create Something Amazing?",
  subtitle = "Book our studio today and bring your creative vision to life",
  buttonText = "Contact us call",
}: ReadyToCreateProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <motion.section
          className="py-20 bg-primary-gunmetal text-white relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-[url('/texture.png')] opacity-10"
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 8 }}
          />
          <div className="max-w-5xl mx-auto flex items-center justify-center flex-col text-center px-4 relative z-10">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-amber-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
            <DynamicButton
              textD={buttonText}
              textColor="text-white"
              bgColor="bg-transparent border border-white/50"
              hoverTextColor="group-hover:text-black"
              hoverBgColor="bg-white"
            />
          </div>
        </motion.section>
      </div>
    </section>
  );
}

export default GetInTouch;
