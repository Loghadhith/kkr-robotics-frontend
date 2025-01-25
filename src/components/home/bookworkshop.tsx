import React from 'react';
import workshop from '@/assets/workshop.png';
import bg from "@/assets/dust.png";

const Bookworkshops = () => {
  return (
    <div className="w-full py-20">
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1
          }}
        />

        {/* Content */}
        <div className="relative py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Book Workshop Now!</h2>
            <div className="flex items-center justify-between gap-4">
              {/* Image on the Left */}
              <div className="w-1/3 relative h-[300px] flex items-center justify-center">
                <img
                  src={workshop.src}
                  alt="Workshop"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Text on the Right */}
              <div className="w-2/3 text-white text-right">
                <h3 className="text-4xl font-bold mb-4">
                  <span className="block">Wanna Conduct <span className="text-[#0EE20E]">Workshops</span></span> in Your Institute!
                </h3>
                <p className="text-gray-300 text-2xl pb-10">
                  <span className="block">Unlock the future with our exclusive robotics and AI</span>
                  <span className="block">workshops. Limited availability – Book your spot now. Join us and be part of</span>
                  <span className="block">the next technological breakthrough!</span>
                </p>
                <button
                  className="bg-[#0EE20E] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#0cc40c] focus:outline-none focus:ring-2 focus:ring-[#0EE20E]"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookworkshops;
