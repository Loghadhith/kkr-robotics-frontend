import React from 'react';
import joinOurCommunityImage from '@/assets/just.png'; // Replace with the actual path to your image
import pattern from "@/assets/Pattern.svg"

const JoinOurCommunity = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center pb-10" 
      style={{
        backgroundImage: `url(${pattern.src})`,
        backgroundSize: 'contain', // Keeps the image at its original size without stretching
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        backgroundPosition: 'top left', // Positions the image in the top-left corner
      }}
    >
      {/* Container for whole section */}
      <div className="relative text-black px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Our <span className="text-[#0EE20E]">ROS </span>Community
        </h2>
        <p className="text-lg mb-8">Unite with unified thinkers</p>

        <div className="flex justify-between items-center max-w-full">
          {/* Text Section */}
          <div className="w-1/2">
            <p className="mb-4 text-3xl">
              <span className="block">Unite with unified thinkers:</span>
              <span className="block">Join our <span className="text-[#0EE20E]">ROS Community</span>!</span>
            </p>
            <p className="text-2xl">
              <span className="block">Join our ROS Community at <span className="text-[#0EE20E]">Karthikesh Robotics!</span></span>
              <span className="block">Connect & create projects with fellow enthusiasts, share</span>
              <span className="block">knowledge, and collaborate on projects in robotics and</span>
              <span className="block">AI. Be a beginner or a seasoned professional, our</span>
              <span className="block">community offers a platform for growth, innovation, and</span>
              <span className="block">making impactful contributions. Team up with us to play</span>
              <span className="block">an inevitable role in the future of robotics!</span>
            </p>
            <div className="mt-6">
              <a href="/community" className="bg-[#0EE20E] hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full">
                Join With Us
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 ml-60">
            <img 
              src={joinOurCommunityImage.src} 
              alt="Join Our Community" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
