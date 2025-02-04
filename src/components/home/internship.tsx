import React from 'react';
import internship from "@/assets/internship.png";
import bg from '@/assets/dust.png';

const Internship = () => {
  return (
    <div className="w-full pt-10 md:pt-20">
      <div className="relative">
        <div
          className="absolute inset-0 bg-black"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1
          }}
        />

        <div className="relative py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
              Internship Programs
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4">
              <div className="w-full md:w-2/3 text-white text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-4">
                  <span className="block">Start Your <span className="text-[#0EE20E]">Professional</span></span>
                  <span className="block text-[#0EE20E]">Journey</span>
                </h3>
                <p className="text-gray-300 text-xl md:text-2xl mb-8 md:mb-6">
                  <span className="block">Explore our diverse internship programs designed for both</span>
                  <span className="block">students and industry experts. Gain valuable experience,</span>
                  <span className="block">enhance your skills, and work on exciting projects with our</span>
                  <span className="block">dedicated team. Apply now to take the first step towards a</span>
                  <span className="block">rewarding career.</span>
                </p>

                <button className="bg-[#0EE20E] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#0cc40c] focus:outline-none focus:ring-2 focus:ring-[#0EE20E]">
                  Join Now
                </button>
              </div>

              <div className="w-full md:w-1/3 relative h-[200px] md:h-[300px] flex items-center justify-center">
                <img
                  src={internship.src}
                  alt="Internship"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Internship;  // Export the component