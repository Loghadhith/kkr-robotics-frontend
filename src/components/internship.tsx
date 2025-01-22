import React from 'react';
import workshop from '../assets/workshop.png';
import internship from "@/assets/internship.png";
import bg from '@/assets/dust.png';

const Internship = () => {
  return (
    <div className="w-full pt-20">
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
            <h2 className="text-4xl font-bold text-white text-center mb-12">Internship Programs</h2>
            <div className="flex items-center justify-between gap-4">
              {/* Text on the Left */}
              <div className="w-2/3 text-white text-left">
                <h3 className="text-4xl font-bold mb-4">
                  <span className="block"> Start Your<span className="text-[#0EE20E]">  Professional</span></span>
                 <span className='block text-[#0EE20E]'>Journey</span>
                </h3>
                <p className="text-gray-300 text-2xl mb-6">
                  <span className="block">Explore our diverse internship programs designed for both </span>
                  <span className="block"> students and industry experts. Gain valuable experience,</span>
                  <span className="block">enhance your skills, and work on exciting projects with our</span>
                  <span className="block">dedicated team. Apply now to take the first step towards a</span>
                  <span className="block">rewarding career.</span>
                </p>

                {/* Button */}
                <button
                  className="bg-[#0EE20E] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#0cc40c] focus:outline-none focus:ring-2 focus:ring-[#0EE20E]"
                >
                  Join Now
                </button>
              </div>

              {/* Image on the Right */}
              <div className="w-1/3 relative h-[300px] flex items-center justify-center">
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

export default Internship;
