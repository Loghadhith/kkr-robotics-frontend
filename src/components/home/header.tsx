import React from 'react';
import vector from '@/assets/Logo/Vector.svg';
import bgImage from '@/assets/LooperBG.svg'; 
import Model from '@/components/model/model';

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center pb-10"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'fit',
        backgroundRepeat: "no-repeat",

      }}
    >
      <div className="container px-4 relative">
        <div className="flex items-center justify-center pb-14 gap-36">
          <div className="z-10 w-2/5">
            <h1 className="text-6xl font-bold leading-tight mb-8 text-black">
              Our Autonomous Robots<br />
              Will Simplify Your<br />
              Work !
            </h1>
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

        <div className="flex justify-between items-center mt-20 w-full">
          <div className="flex items-center gap-3 pr-6">
            <div className="text-left pr-7">
              <h3 className="text-4xl font-bold text-black">10+</h3>
              <p className="text-black uppercase text-xl tracking-wider">TEAM</p>
            </div>
            <img
              src={vector.src}
              alt="Team Icon"
              className="w-14 h-16"
            />
            <div className=' pl-36 text-6xl text-black'>|</div>
          </div>

          <div className="flex items-center gap-3 pr-6">
            <div className="text-left pr-7">
              <h3 className="text-4xl font-bold text-black">06+</h3>
              <p className="text-black uppercase text-xl tracking-wider">WORKSHOPS</p>
            </div>
            <img
              src={vector.src}
              alt="Workshops Icon"
              className="w-14 h-16"
            />
            <div className=' pl-36 text-6xl text-black'>|</div>
          </div>

          <div className="flex items-center gap-3 pr-6">
            <div className="text-left pr-7">
              <h3 className="text-4xl font-bold text-black">01+</h3>
              <p className="text-black uppercase tracking-wider text-xl">BOOTCAMPS</p>
            </div>
            <img
              src={vector.src}
              alt="Bootcamps Icon"
              className="w-14 h-16"
            />
            <div className=' pl-36 text-6xl text-black'>|</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-left pr-7">
              <h3 className="text-4xl font-bold text-black">571+</h3>
              <p className="text-black uppercase text-xl tracking-wider">STUDENTS</p>
            </div>
            <img
              src={vector.src}
              alt="Students Icon"
              className="w-14 h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
