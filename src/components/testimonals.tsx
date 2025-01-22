import React from 'react';
import Image from 'next/image';
import jeremiahImage from '@/assets/jeremaih.png'; // Replace with the actual path to the image

const Testimonial = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#0EE20E]">
            <blockquote className="pl-4 mb-4">
              <div className="text-5xl text-black pb-10">““</div>
              <p className="text-2xl">
                <span className="block"><span className="text-[#0EE20E]">KKR Robotics</span> has revolutionized</span>
                <span className="block">our workflow with their state-of</span>
                <span className="block">- cutting-edge technology and</span>  
                <span className="block">innovative designs have</span>
                <span className="block">significantly increased our</span>
                <span className="block">efficiency and productivity.</span>
              </p>
            </blockquote>
            <div className="flex items-center">
              <Image 
                src={jeremiahImage} 
                alt="Jeremiah" 
                width={50} 
                height={50} 
                className="rounded-full mr-4" 
              />
              <div>
                <p className="font-semibold">Jeremiah</p>
                <p className="text-sm">Founder</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#0EE20E]">
            <blockquote className="pl-4 mb-4">
              <div className="text-5xl text-black pb-10">““</div>
              <p className="text-2xl">
                <span className="block"><span className="text-[#0EE20E]">KKR Robotics</span> has revolutionized</span>
                <span className="block">our workflow with their state-of</span>
                <span className="block">- cutting-edge technology and</span>  
                <span className="block">innovative designs have</span>
                <span className="block">significantly increased our</span>
                <span className="block">efficiency and productivity.</span>
              </p>
            </blockquote>
            <div className="flex items-center">
              <Image 
                src={jeremiahImage} 
                alt="Jeremiah" 
                width={50} 
                height={50} 
                className="rounded-full mr-4" 
              />
              <div>
                <p className="font-semibold">Jeremiah</p>
                <p className="text-sm">Founder</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#0EE20E]">
            <blockquote className="pl-4 mb-4">
              <div className="text-5xl text-black pb-10">““</div>
              <p className="text-2xl">
                <span className="block"><span className="text-[#0EE20E]">KKR Robotics</span> has revolutionized</span>
                <span className="block">our workflow with their state-of</span>
                <span className="block">- cutting-edge technology and</span>  
                <span className="block">innovative designs have</span>
                <span className="block">significantly increased our</span>
                <span className="block">efficiency and productivity.</span>
              </p>
            </blockquote>
            <div className="flex items-center">
              <Image 
                src={jeremiahImage} 
                alt="Jeremiah" 
                width={50} 
                height={50} 
                className="rounded-full mr-4" 
              />
              <div>
                <p className="font-semibold">Jeremiah</p>
                <p className="text-sm">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
