import React from 'react';
import joinOurCommunityImage from '@/assets/just.png';
import pattern from "@/assets/Pattern.svg"
import line from "@/assets/Line 10.svg"
import Image from 'next/image';

const JoinOurCommunity = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center pb-10"
      style={{
        backgroundImage: `url(${pattern.src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
      }}
    >
      {/* Container for the whole section */}
      <div className="relative text-black pt-8 md:pt-16 text-center w-full px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Join Our <span className="text-[#0EE20E]">ROS </span>Community
        </h2>
        <p className="text-xl md:text-2xl mb-8 md:mb-14">Unite with unified thinkers</p>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full">
          {/* Text Section */}
          <div className="w-full md:w-3/5 px-4 md:pl-40 md:pr-16 text-center md:text-left">
            <Image
              src={line}
              alt="Hands Image"
              className="hidden md:block -ml-10 absolute"
            />
            <p className="mb-8 md:mb-14 text-3xl md:text-5xl font-bold">
              <span className="block">Unite with unified thinkers:</span>
              <span className="block">Join our <span className="text-[#0EE20E]">ROS Community</span>!</span>
            </p>
            <p className="text-xl md:text-3xl leading-relaxed"  >
              <span className="block">Join our ROS Community at</span>
              <span className="block text-[#0EE20E]">Karthikesh Robotics!</span>
              <span className="block">Connect & create projects with fellow</span>
              <span className="block">enthusiasts, share knowledge, and</span>
              <span className="block">collaborate on projects in robotics and</span>
              <span className="block">AI. Be a beginner or a seasoned</span>
              <span className="block">professional, our community offers a</span>
              <span className="block">platform for growth, innovation, and</span>
              <span className="block">making impactful contributions.</span>
              <span className="block">Team up with us to play an inevitable</span>
              <span className="block">role in the future of robotics!</span>
            </p>
            <div className="mt-8 md:mt-10">
              <a 
                href="/community" 
                className="inline-block bg-[#0EE20E] hover:bg-[#0EE20E] text-black font-bold py-3 md:py-4 px-8 rounded-xl text-lg md:text-xl"
              >
                Join With Us
              </a>
            </div>
          </div>

          {/* Image Section - Hidden on mobile */}
          <div className="hidden md:block w-2/5 -ml-32">
            <img
              src={joinOurCommunityImage.src}
              alt="Join Our Community"
              className="object-cover w-[550px] h-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;