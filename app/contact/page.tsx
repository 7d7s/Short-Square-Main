"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
    
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "How soon can I expect a response to my inquiry?",
      answer: "We typically respond to all inquiries within 24-48 hours during business days."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require at least 48 hours notice for cancellations. Late cancellations may incur a 50% fee."
    },
    {
      question: "Do you travel for photoshoots?",
      answer: "Yes, we offer location shoots with travel fees applicable beyond 25km from our studio."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, UPI payments, and cash."
    },
    {
      question: "How long does it take to receive the final photos?",
      answer: "Delivery time depends on the project scope, but typically 2-3 weeks after the shoot."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };


  return (
    <div className="container mx-auto">
      <Banner
        title="Contact Us"
        description="Ready to collaborate? Reach out today and let’s create something truly memorable together."
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744198088/d_pmkzwt.jpg"
      />

      {/* Contact Content */}
      <section className="py-16 px-4 bg-primary-brown rounded-2xl my-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-auto">
            {/* Contact Form */}
            <div className="border rounded-xl shadow-md p-8 h-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className='text-black'>
                <div className="mb-6 ">
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <FiMail className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700 mb-1">Email</h3>
                      <p className="text-gray-600">contact@shotsquare.com</p>
                      </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <FiPhone className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 8800007740</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <FiMapPin className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700 mb-1">Studio Address</h3>
                      <p className="text-gray-600">I-102, Second Floor, Block I,</p>
                      <p className="text-gray-600"> Kirti Nagar, Delhi, 110015</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/place/Vig+tower/@28.6513548,77.1441273,19z/data=!3m1!4b1!4m6!3m5!1s0x390d030331accc81:0xbb27ef270b1fb476!8m2!3d28.6513536!4d77.144771!16s%2Fg%2F11dxhcxg2g?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D" 
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-5 px-4">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className='mt-10'>
            <h2 className="text-3xl font-bold dark:text-white text-black mb-10">Frequently Asked Questions</h2>
            <p className='lg:max-w-96'>Got questions? {"We’ve"} got answers to help you understand our process, pricing, and more.</p>
          </div>
          
          <div className="space-y-4 mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`md:p-7 p-5 rounded-2xl dark:border-white border-black border ${activeIndex === index ? '' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex items-center space-x-6">
                  <h3 className="text-xl text-green-dark">{faq.question}</h3>
                </div>
                {activeIndex === index ? (
                  <IoIosArrowUp className="text-green-dark" size={25}/>
                ) : (
                  <IoIosArrowDown  className="text-green-dark" size={25}/>
                )}
              </div>
              <AnimatePresence>
                {activeIndex === index && faq.answer && (
                  <motion.p 
                    className="mt-2 dark:text-gray-300 text-balck"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
          </div>
        </div>
      </section>

    {/* CTA Section */}
       <GetInTouch
           title="Ready to Start Your Project?"
           subtitle="Get in touch with our team to discuss your ideas"
           buttonText="Contact us call"
          />
    </div>
  );
}
