import React from 'react';
import contact from '../assets/contact.png';

const Contact = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Content */}
      <div className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4"> {/* Ensures both items are aligned at the top */}
            {/* Image on the Left */}
            <div className="w-1/2 h-[500px] flex items-start justify-center"> {/* Aligns the image to the top */}
              <img
                src={contact.src}
                alt="Workshop"
                className="max-w-full max-h-full object-contain" 
              />
            </div>

            {/* Text on the Right */}
            <div className="w-1/2 text-black text-left flex flex-col justify-between mt-20">
              <div>
                <h3 className="text-4xl font-bold mb-6"> {/* Adjusted margin bottom for spacing */}
                  <span className="block">Unlock The Potential Of AI And</span>
                  <span className="block">Robotics With <span className="text-[#0EE20E]">KKR</span></span>
                </h3>
                <p className="text-black text-2xl pb-10">
                  <span className="block">We’d love to hear from you! Whether you have a question about</span>
                  <span className="block">our services, pricing, need a demo, or anything else, our team is </span>
                  <span className="block">ready to answer all your questions.</span>
                </p>
              </div>
              <button
                className="bg-[#0EE20E] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#0cc40c] focus:outline-none focus:ring-2 focus:ring-[#0EE20E] w-[150px] mt-4"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
