import React from 'react';
import workshop from '@/assets/workshop.png';
import bg from "@/assets/dust.png";

const Bookworkshops = () => {
  return (
    <div className="w-full py-10 md:py-20">
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

        <div className="relative pt-10 md:pt-20 pb-10 md:pb-20">
          <div className="container mx-auto px-4 md:mx-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-8 md:mb-16 md:ml-52">
              Book Workshops Now!
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between md:gap-20">
              {/* Image section - Hidden on small screens */}
              <div className="w-full md:w-2/5 relative h-[300px] md:h-[800px] flex items-center justify-center mb-8 md:mb-0 md:-ml-30">
                <img
                  src={workshop.src}
                  alt="Workshop Image"
                  className="w-full md:w-[800px] h-[300px] md:h-[800px] object-contain relative"
                />
              </div>

              {/* Text section */}
              <div className="w-full md:w-3/5 text-white text-center md:text-right md:-mr-32">
                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className='block'>Wanna conduct <span className='text-[#0EE20E]'>Workshops</span></span>
                  <span className='block'>in Your Institute?</span>
                </h3>
                <p className="text-gray-300 mb-10 md:mb-20 text-xl md:text-3xl px-4 md:px-0">
                  Unlock the future with our exclusive robotics and AI workshops. Limited availability – Book your spot now Join us and be part of the next technological breakthrough!
                </p>
                <a 
                  href="/community" 
                  className="inline-block bg-[#0EE20E] hover:bg-[#0EE20E] text-black font-bold py-3 md:py-4 px-8 rounded-xl text-lg md:text-xl"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookworkshops;