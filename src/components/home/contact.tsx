import React from 'react';
import contact from '@/assets/contact.png';


const Contact = () => {
  return (
    <div className="w-full bg-[#FAFAFA] pt-[70px]">
      <div className="relative py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="w-full text-black text-center md:text-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="block">Unlock The Potential Of AI And</span>
                <span className="block">Robotics With <span className="text-[#0EE20E]">KKR</span></span>
              </h3>
              <p className="text-black text-xl md:text-2xl pb-6 md:pb-10">
                <span className="block">We'd love to hear from you! Whether you have a question about</span>
                <span className="block">our services, pricing, need a demo, or anything else, our team is</span>
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
  );
};

export default Contact ;