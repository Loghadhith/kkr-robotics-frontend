import React from 'react';
import contact from '@/assets/contact.png';

const Contact = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="relative pt-16 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-4">
            {/* Image - hidden on mobile */}
            <div className="hidden md:flex w-1/2 h-[500px] items-start justify-center">
              <img
                src={contact.src}
                alt="Workshop"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2 text-black text-center md:text-left flex flex-col justify-between md:mt-20">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="block">Unlock The Potential Of AI And</span>
                  <span className="block">Robotics With <span className="text-[#0EE20E]">KKR</span></span>
                </h3>
                <p className="text-black text-xl md:text-3xl pb-10">
                  <span className="block">We&apos;d love to hear from you! Whether you have a question about</span>
                  <span className="block">our services, pricing, need a demo, or anything else, our team is </span>
                  <span className="block">ready to answer all your questions.</span>
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <button className="bg-[#0EE20E] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#0cc40c] focus:outline-none focus:ring-2 focus:ring-[#0EE20E] w-[150px] mt-4">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;