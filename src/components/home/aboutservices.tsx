import React from 'react';
import logo from '@/assets/logo.png';
import bg from "@/assets/dust.png";

const AboutServices = () => {
  return (
    <div className="w-full py-10 sm:py-20 sm:w-full md:w-full overflow-hidden">
      <div className="relative w-full">
        <div
          className="absolute inset-0 bg-black w-screen"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: 'fit',
            opacity: 1,
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '100vw'
          }}
        />

        <div className="relative pt-10 sm:pt-20 pb-20 sm:pb-80">
          <div className="container mx-auto px-4 max-w-[1440px]">
            <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-10 sm:mb-40">About Us</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-20">
              <div className="w-full sm:w-1/3 relative h-[300px] sm:h-[500px] flex items-center justify-center mb-10 sm:mb-0">
                <img
                  src={logo.src}
                  alt="KKR Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-full sm:w-2/3 text-white sm:pl-16">
                <h3 className="text-3xl sm:text-5xl font-bold mb-4 text-center">We are here to Change the Future</h3>
                <p className="text-3xl sm:text-5xl mb-10 sm:mb-20 text-center">
                  <span className="text-green-500">I</span>magine -
                  <span className="text-green-500">I</span>nnovate -
                  <span className="text-green-500">I</span>mplement
                </p>
                <p className="text-gray-300 text-xl sm:text-3xl text-center">
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

      <div className="bg-white py-8 sm:py-16">
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-20">
            {/* Service 1 */}
            <div className="relative p-4 sm:p-10 rounded-2xl shadow-2xl mx-auto w-full max-w-[400px]">
              <div className="relative flex h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl">
                <div className="w-1/2 bg-[#222121]"></div>
                <div className="w-1/2 bg-[#444444]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white relative">
                    <div className="text-gray-300 text-[100px] sm:text-[150px] font-bold absolute -top-[60px] left-1/2 -translate-x-1/2 opacity-30">
                      01
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{
                      __html: "AUTONOMOUS <br/>ROBOT"
                    }}></h3>
                    <p
                      className="text-gray-300 mb-4 text-xl sm:text-2xl max-w-[500px] mx-auto break-words"
                      dangerouslySetInnerHTML={{
                        __html: "Autonomous robots <br /> represents the <br />cutting edge of <br /> modern technology,<br /> designed to operate <br />independently <br />without human <br />intervention"
                      }}
                    />
                  </div>
                </div>
              </div>
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded">
                Read More
              </button>
            </div>

            {/* Service 2 */}
            <div className="relative p-4 sm:p-10 rounded-2xl shadow-2xl mx-auto w-full max-w-[400px]">
              <div className="relative flex h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl">
                <div className="w-1/2 bg-[#222121]"></div>
                <div className="w-1/2 bg-[#444444]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white relative">
                    <div className="text-gray-300 text-[100px] sm:text-[147px] font-bold absolute -top-[60px] left-1/2 -translate-x-1/2 opacity-30">
                      02
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{
                      __html: "IOT <br/>SOLUTION"
                    }}></h3>
                    <p
                      className="text-gray-300 mb-4 text-xl sm:text-2xl max-w-[500px] mx-auto break-words"
                      dangerouslySetInnerHTML={{
                        __html: "By connecting everyday <br /> objects to the internet <br />and enabling them to <br />communicate and share <br /> lot solution offer <br />unprecedented levels of <br /> insights, efficiency and <br />convenience"
                      }}
                    />
                  </div>
                </div>
              </div>
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded">
                Read More
              </button>
            </div>

            {/* Service 3 */}
            <div className="relative p-4 sm:p-10 rounded-2xl shadow-2xl mx-auto w-full max-w-[400px]">
              <div className="relative flex h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl">
                <div className="w-1/2 bg-[#222121]"></div>
                <div className="w-1/2 bg-[#444444]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div className="text-white relative">
                    <div className="text-gray-300 text-[100px] sm:text-[147px] font-bold absolute -top-[60px] left-1/2 -translate-x-1/2 opacity-30">
                      03
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{
                      __html: "MENTORSHIP <br/>PROGRAM"
                    }}></h3>
                    <p
                      className="text-gray-300 mb-4 text-xl sm:text-2xl max-w-[500px] mx-auto break-words"
                      dangerouslySetInnerHTML={{
                        __html: "In this mentorship<br /> program mentors <br />typically provide <br />guidance, advice and <br />feedback to mentees<br /> based on their own<br /> experiences and <br />expertise"
                      }}
                    />
                  </div>
                </div>
              </div>
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded">
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