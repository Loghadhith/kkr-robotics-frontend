import React from 'react';
import robotics from "@/assets/robotics.png"
const RookiesCommunityCTA: React.FC = () => {
    return (
        <>
        <div className="bg-black text-white py-12 px-6 sm:px-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Let&apos;s Create Rookies Community!!!</h1>
            <p className="mb-8">
                Join Our Robotics & E-Commerce Community For The Latest Technologies, Expert Discussions, And Convenient Shopping.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-4">
                    <img src="/ros.svg" alt="ROS" className="h-8 w-8" />
                    <span>ROS</span>
                </div>
                
                <div className="flex items-center space-x-4">
                    <img src={robotics.src} alt="Robotics" className="h-8 w-8" />
                    <span>Robotics</span>
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/arduino.svg" alt="Arduino" className="h-8 w-8" />
                    <span>Arduino</span>
                </div>
            </div>

            <a href="https://karthikeya.robotics.com"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md inline-block mt-8">
            Join Now
            </a>
        </div>
        </>
    
  );
};

export default RookiesCommunityCTA;
