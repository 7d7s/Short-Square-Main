"use client";
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Banner from '@/components/common/banner';
import GetInTouch from '@/components/getInTouch';

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

  return (
    <div className="min-h-screen">
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
                      <p className="text-gray-600">contact@mkgraphy.com</p>
                      <p className="text-gray-600">bookings@mkgraphy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <FiPhone className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <FiMapPin className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700 mb-1">Studio Address</h3>
                      <p className="text-gray-600">123 Photography Lane</p>
                      <p className="text-gray-600">Creative District, Mumbai 400001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224569.58236164317!2d76.69473190572896!3d28.42228244899542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1744204065049!5m2!1sen!2sin" 
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
            <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
            <p className='lg:max-w-96'>Got questions? {"We’ve"} got answers to help you understand our process, pricing, and more.</p>
          </div>
          
          <div className="space-y-4 mt-10">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out">
                <details className="group">
                  <summary className="list-none p-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 ease-in-out transform origin-top scale-y-0 group-open:scale-y-100">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                </details>
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