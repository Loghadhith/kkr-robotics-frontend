import React from 'react';
import logo from '@/assets/logo.png';
import bg from "@/assets/dust.png"


const AboutServices = () => {
  const services = [
    {
      title: "AUTONOMOUS ROBOT",
      description: "Autonomous robots represents the cutting edge of modern technology, designed to operate independently without human intervention"
    },
    {
      title: "IOT SOLUTIONS",
      description: "By connecting everyday objects to the internet and enabling them to communicate and share lot solution offer unprecedented levels of insights, efficiency and convenience"
    },
    {
      title: "MENTORSHIP PROGRAM",
      description: "In this mentorship program mentors typically provide guidance, advice and feedback to mentees based on their own experiences and expertise"
    }
  ];

  return (
    <div className="w-full py-20">
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
            <h2 className="text-3xl font-bold text-white text-center mb-12">About Us</h2>
            <div className="flex items-center justify-between gap-8">
              <div className="w-1/3 relative h-[300px] flex items-center justify-center">
                <img 
                  src={logo.src}
                  alt="KKR Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-2/3 text-white">
                <h3 className="text-3xl font-bold mb-4">We are here to Change the Future</h3>
                <p className="text-2xl mb-4">
                  <span className="text-green-500">I</span>magine - 
                  <span className="text-green-500">I</span>nnovate - 
                  <span className="text-green-500">I</span>mplement
                </p>
                <p className="text-gray-300 text-2xl">
                  KarthiKesh Robotics, established on March 22, 2024, integrates
                  robotics and AI into society. Our autonomous robots streamline
                  industrial material handling using advanced sensors and navigation
                  software. We also offer IoT solutions, e-commerce services for
                  robotic components, and educational programs in robotics and AI
                  to empower future talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative p-8 rounded-lg shadow-lg bg-white">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-xl">{service.description}</p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded ">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;