import React from 'react';
import vector from '@/assets/Logo/Vector.svg';
import bgImage from '@/assets/LooperBG.svg'; 
import Model from '@/components/model/model';

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center z-10 relative"
    >
      <div className="absolute inset-0 w-full h-full sm:hidden">
        <img
          src={bgImage.src}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div 
        className="hidden sm:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'fit',
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <div className="container px-2 relative mt-16">
        <div className="flex items-center justify-center pb-14 sm:gap-36">
          <div className="z-10 w-full sm:w-1/2">
            <h1 
              className="text-4xl leading-tight sm:text-7xl sm:leading-snug font-bold mb-8 text-black sm:-mx-12" 
              dangerouslySetInnerHTML={{
                __html:"Our Autonomous Robots<br/> Will Simplify Your<br />Work !"
              }}
            />
            <button className="bg-green-500 text-black px-8 py-3 rounded-lg text-lg">
              EXPLORE
            </button>
          </div>

          <div className="w-3/5 hidden items-center justify-center overflow-visible md:block sm:blocks -mr-96 -mt-28">
            <div className="bg-transparent">
              <Model />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:flex sm:justify-between sm:items-center mt-10 w-full">
          <div className="sm:flex sm:items-center sm:gap-3 sm:pr-6">
            <div className="text-center sm:text-left sm:pr-7">
              <h3 className="text-3xl sm:text-4xl font-bold text-black">10+</h3>
              <p className="text-black uppercase text-lg sm:text-2xl tracking-wider">TEAM</p>
            </div>
            <img
              src={vector.src}
              alt="Team Icon"
              className="hidden sm:block w-14 h-16"
            />
            <div className='hidden sm:block pl-36 text-6xl text-black'>|</div>
          </div>

          <div className="sm:flex sm:items-center sm:gap-3 sm:pr-6">
            <div className="text-center sm:text-left sm:pr-7">
              <h3 className="text-3xl sm:text-4xl font-bold text-black">06+</h3>
              <p className="text-black uppercase text-lg sm:text-2xl tracking-wider">WORKSHOPS</p>
            </div>
            <img
              src={vector.src}
              alt="Workshops Icon"
              className="hidden sm:block w-14 h-16"
            />
            <div className='hidden sm:block pl-36 text-6xl text-black'>|</div>
          </div>

          <div className="sm:flex sm:items-center sm:gap-3 sm:pr-6">
            <div className="text-center sm:text-left sm:pr-7">
              <h3 className="text-3xl sm:text-4xl font-bold text-black">01+</h3>
              <p className="text-black uppercase text-lg sm:text-2xl tracking-wider">BOOTCAMPS</p>
            </div>
            <img
              src={vector.src}
              alt="Bootcamps Icon"
              className="hidden sm:block w-14 h-16"
            />
            <div className='hidden sm:block pl-36 text-6xl text-black'>|</div>
          </div>

          <div className="sm:flex sm:items-center sm:gap-3">
            <div className="text-center sm:text-left sm:pr-7">
              <h3 className="text-3xl sm:text-4xl font-bold text-black">571+</h3>
              <p className="text-black uppercase text-lg sm:text-2xl tracking-wider">STUDENTS</p>
            </div>
            <img
              src={vector.src}
              alt="Students Icon"
              className="hidden sm:block w-14 h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;