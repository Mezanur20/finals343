'use client';

import { useState } from 'react';

export default function Home() {
  const showBookingMessage = () => {
    alert("Thanks! We'll get back to you soon.");
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I get my carpets professionally cleaned?",
      answer: "We recommend every 12-18 months for most households, or every 6 months if you have pets or allergies."
    },
    {
      question: "How long does it take for carpets to dry after cleaning?",
      answer: "Typically 4-6 hours with our fast-drying methods. We use industrial fans to speed up the process."
    },
    {
      question: "Are your cleaning solutions pet-safe?",
      answer: "Yes! We use eco-friendly, non-toxic cleaners that are safe for pets and children."
    },
    {
      question: "Do you move furniture?",
      answer: "We'll move light furniture as part of our service. For heavy items, we recommend clearing the area beforehand."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#ffcccc] p-5">
      <div className="bg-white max-w-4xl mx-auto p-5 rounded-xl shadow-lg">
        {/* Added Final Exam Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Final Exam 343</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">Mezanur Rahman</h2>
          <h3 className="text-xl text-gray-600">Spring 2025</h3>
        </div>

        {/* Original Content */}
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Blessed Spaces Carpet Cleaners
        </h1>
        <p className="text-center text-gray-600 italic my-4">
          Making your carpets fresh, clean, and beautiful!
        </p>

        <nav className="text-center my-6">
          <a href="#services" className="mx-3 text-[#ff4d4d] font-bold hover:underline">
            Services
          </a>
          <a href="#about" className="mx-3 text-[#ff4d4d] font-bold hover:underline">
            About
          </a>
          <a href="#faq" className="mx-3 text-[#ff4d4d] font-bold hover:underline">
            FAQ
          </a>
          <a href="#contact" className="mx-3 text-[#ff4d4d] font-bold hover:underline">
            Contact
          </a>
        </nav>

        <section className="text-center bg-[#ffe6e6] p-6 rounded-xl mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Professional Carpet Cleaning
          </h2>
          <p className="text-gray-700 max-w-prose mx-auto mb-4">
            We remove stains, dirt, and odors from your carpets at affordable prices.
          </p>
          <button
            onClick={showBookingMessage}
            className="bg-[#ff6666] text-white px-5 py-2 rounded-md hover:bg-[#ff9999] transition-colors text-lg"
          >
            Book Today!
          </button>
        </section>

        <section id="services" className="bg-[#fff0f0] p-5 rounded-xl my-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Our Services
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deep Carpet Cleaning</li>
            <li>Pet Stain Removal</li>
            <li>Office Carpet Cleaning</li>
            <li>Fast Drying Service</li>
          </ul>
        </section>

        <section id="about" className="bg-[#fff0f0] p-5 rounded-xl my-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            About Us
          </h3>
          <p className="text-gray-700">
            We are a small cleaning business with over 2 years of experience. We care about quality and happy customers!
          </p>
        </section>

        <section id="faq" className="bg-[#fff0f0] p-5 rounded-xl my-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#ffcccc] rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-3 text-left bg-[#ffe6e6] focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#ff6666] transform transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#fff0f0] p-5 rounded-xl my-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
            Contact Us
          </h3>
          <p className="text-gray-700">Email: Blessedspace@gmail.com</p>
          <p className="text-gray-700">Phone: (347) 123-4567</p>
        </section>

        <footer className="text-center mt-6 p-3 bg-[#ff6666] text-white rounded-xl">
          <p>&copy; {new Date().getFullYear()} Blessed Spaces Carpet Cleaners</p>
        </footer>
      </div>
    </div>
  );
}