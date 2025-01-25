import React from 'react'
import Image from 'next/image'
import settings from "@/assets/settings.gif"

const whykrr=()=> {
  return (
    <>
    <section className="py-16 px-6 text-center w-full">
        <h2 className="text-3xl font-bold mb-6">
          Why Choose <span className="text-green-500">KKR</span>?
        </h2>
        <p className="text-gray-700 mb-12 mx-auto text-2xl">
          <span className="block">KarthikKesh Robotics Private Limited offers user-friendly robotic
          solutions designed to enhance safety, </span>
          <span className="block"> productivity, and efficiency.
          Join hands with us to push the boundaries of technology and elevate
          your</span>
          <span className="block">living and industrial standards.</span>
          
        </p>
      </section>
      <section className="px-8 py-10 text-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          <div className="bg-[#50D210] p-6 rounded-lg shadow-md text-center w-[365px] h-[480px]">
            <h3 className="text-3xl font-bold text-[#202020] mb-4 p-4 rounded-[25px] border-2 border-white/25 bg-white/20 shadow-md backdrop-blur-[9.6px]">
              Cost-Effective Robotics Solutions</h3>
            <p className="text-[#202020] text-2xl">
              <span className="block">Our budget-friendly</span>
              <span className="block">Autonomous robots and IoT</span>
              <span className="block">projects are tailored to meet</span>
              <span className="block">diverse needs, ensuring</span>
              <span className="block">accessibility without compromising quality across</span>
              <span className="block">various sectors.</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[343px] h-[80px]">
              <Image
                src={settings}
                alt="Robotics GIF"
                width={343}
                height={80}
                className="max-w-full h-auto rounded-full"/>
            </div>
          </div>
          <div className="bg-[#50D210] p-6 rounded-lg shadow-md text-center w-[365px] h-[480px]">
            <h3 className="text-3xl font-bold text-[#202020] mb-4 p-4 rounded-[25px] border-2 border-white/25 bg-white/20 shadow-md backdrop-blur-[9.6px]">
              Empowering Future Innovators
            </h3>
            <p className="text-[#202020] text-2xl">
              <span className="block">Committed to education and</span>
              <span className="block">innovation, we empower the</span>
              <span className="block">next generation through</span>
              <span className="block">specialized mentorship</span>
              <span className="block">programs like bootcamps & workshops.</span>
            </p>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default whykrr;