import React from 'react';
import logo from '@/assets/logo.png';
import bg from "@/assets/dust.png";

const AboutServices = () => {
  return (
    <div className="w-full py-20">
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

        <div className="relative pt-20 pb-80">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-white text-center mb-40">About Us</h2>
            <div className="flex items-center justify-between gap-20">
              <div className="w-1/3 relative h-[500px] flex items-center justify-center -ml-10">
                <img
                  src={logo.src}
                  alt="KKR Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-2/3 text-white pl-32">
                <h3 className="text-5xl font-bold mb-4 text-center">We are here to Change the Future</h3>
                <p className="text-5xl mb-20 text-center">
                  <span className="text-green-500">I</span>magine -
                  <span className="text-green-500">I</span>nnovate -
                  <span className="text-green-500">I</span>mplement
                </p>
                <p className="text-gray-300 text-3xl text-center">
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
        <div className="container max-w-full px-[30px]">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-3 gap-40 px-16">
            {/* Service 1 */}
            <div className="relative p-10 rounded-2xl shadow-lg">
              <div className="flex h-[500px] rounded-2xl overflow-hidden">
                <div className="w-1/2 bg-[#222121]"></div>
                <div className="w-1/2 bg-[#444444]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white relative">
                    <div className="text-gray-300 text-[150px] font-bold absolute -top-[60px] left-36 opacity-30">
                      01
                    </div>
                    <h3 className="text-4xl font-bold mb-4 " dangerouslySetInnerHTML={{
                        __html:"AUTONOMOUS <br/>ROBOT"}}></h3>
                    <p
                      className="text-gray-300 mb-4 text-2xl max-w-[500px] mx-auto break-words"
                      dangerouslySetInnerHTML={{
                        __html: "Autonomous robots <br /> represents the <br />cutting edge of <br /> modern technology,<br /> designed to operate <br />independently <br />without human <br />intervention"
                      }}
                    />
  
                  </div>
                </div>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 ml-32  rounded ">
                      Read More
                    </button>
            </div>

            {/* Service 2 */}
            <div className="relative p-10 rounded-2xl shadow-lg">
              <div className="flex h-[500px] rounded-2xl overflow-hidden">
                <div className="w-1/2 bg-[#222121]"></div>
                <div className="w-1/2 bg-[#444444]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white relative">
                    <div className="text-gray-300 text-[147px] font-bold absolute -top-[60px] left-[140px] opacity-30">
                      02
                    </div>
                    <h3 className="text-4xl font-bold mb-4 " dangerouslySetInnerHTML={{
                        __html:"IOT <br/>SOLUTION"}}></h3>
                    <p
                      className="text-gray-300 mb-4 text-2xl max-w-[500px] mx-auto break-words"
                      dangerouslySetInnerHTML={{
                        __html: "By connecting everyday <br /> objects to the internet <br />and enabling them to <br />communicate and share <br /> lot solution offer <br />unprecedented levels of <br /> insights, efficiency and <br />convenience"
                      }}
                    />
                    
                  </div>
                </div>
                
              </div>
              <button className="bg-green-500 text-white px-4 py-2 ml-32  rounded ">
                      Read More
                    </button>
            </div>

            {/* Service 3 */}
            <div className="relative p-10 rounded-2xl shadow-lg">
              <div className="flex h-[500px] rounded-2xl overflow-hidden">
                <div className="w-1/2 bg-[#222121]"></div>
                <div className="w-1/2 bg-[#444444]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white relative">
                    <div className="text-gray-300 text-[147px] font-bold absolute -top-[80px] left-[120px] opacity-30">
                      03
                    </div>
                    <h3 className="text-4xl font-bold mb-4 " dangerouslySetInnerHTML={{
                        __html:"MENTORSHIP <br/>PROGRAM"}}></h3>                    <p
                      className="text-gray-300 mb-4 text-2xl max-w-[500px] mx-auto break-words"
                      dangerouslySetInnerHTML={{
                        __html: "In this mentorship<br /> program mentors <br />typically provide <br />guidance, advice and <br />feedback to mentees<br /> based on their own<br /> experiences and <br />expertise"
                      }}
                    />
                   
                  </div>
                  
                </div>
                
              </div>
              <button className="bg-green-500 text-white px-4 py-2 ml-32  rounded ">
                      Read More
                    </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutServices;
