import React from 'react';
import Image from 'next/image';
import joinOurCommunityImage from '@/assets/just.png'; // Replace with the actual path to your image

const JoinOurCommunity = () => {
  return (
    <div className="container mx-auto py-16 text-black "> {/* Container for whole section */}
      <div className="text-center mb-24 ">
        <h2 className="text-3xl font-bold">
          Join Our <span className="text-[#0EE20E]">ROS </span>Community
        </h2>
        <p className="text-lg">Unite with unified thinkers</p>
      </div>

      <div className="flex justify-between items-center">
        {/* Text Section */}
        <div className="w-1/2">
          <p className="mb-4 text-3xl">
             
            <span className='block'>Unite with unified thinkers:</span>
            <span className='block'>Join our <span className="text-[#0EE20E]">ROS Community</span>!</span>
          </p>
          <p className='text-2xl'>
             
            <span className='block'>Join our ROS Community at <span className="text-[#0EE20E]">Karthikesh Robotics!</span></span>
            <span className='block'>Connect & create projects with fellow enthusiasts, share</span>
            <span className='block'>knowledge, and collaborate on projects in robotics and</span>
            <span className='block'>AI. Be a beginner or a seasoned professional, our</span>
            <span className='block'>community offers a platform for growth, innovation, and </span>
            <span className='block'>making impactful contributions. Team up with us to play</span>
            <span className='block'>an inevitable role in the future of robotics!</span>
                
          </p>
          <div className="mt-6">
            <button className="bg-[#0EE20E] hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
              Join With Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 ml-60">
          <Image 
            src={joinOurCommunityImage} 
            alt="Join Our Community" 
            width={400} // Adjust width as needed
            height={400} // Adjust height to match the design
            className="object-cover" // Ensures the image fits within its container
          />
        </div>
      </div>
    </div>
  );
};

export default JoinOurCommunity;
