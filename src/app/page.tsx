"use client";

import Image from "next/image";
import vector from "@/assets/Logo/Vector.svg";
import robot from "@/assets/robot.png";
import settings from "@/assets/settings.gif";
import logo from "@/assets/logo.png"

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between pl-40 py-16 bg-[url('/assets/background.svg')] bg-cover">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 space-y-4">
            <span className="block">Our Autonomous</span>
            <span className="block">Robots</span>
            <span className="block">Will Simplify</span>
            <span className="block">Your Work!</span>
          </h1>
          <a
            href="#explore"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-[#50D210] rounded-full hover:bg-green-600"
          >
            Explore
          </a>
        </div>
      </section>

      <section>
        {/* Ensure the image container has the same size as the image */}
        <div
          className="relative flex justify-center items-center"
          style={{
            width: '900px',
            height: '900px',
            position: 'absolute',
            top: '0px', // Top space to the border
            bottom: '170px', // Bottom space to the next section
            left: '800px', // Left space to the border
            right: '97px', // Right space to the border
          }}
        >
          <Image
            src={robot} // Replace with your actual robot image name in the assets folder
            alt="Autonomous Robot"
            fill={true}
            style={{ objectFit: 'contain' }} // Ensures the image covers the container without distortion
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="flex flex-wrap justify-center gap-8 py-16 bg-gray-50">
        {[
          { title: "10+", subtitle: "Team", icon: vector },
          { title: "06+", subtitle: "Workshops", icon: vector },
          { title: "01+", subtitle: "Bootcamps", icon: vector },
          { title: "571+", subtitle: "Students", icon: vector },
        ].map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-40 p-4"
          >
            <Image
              src={stat.icon} // Using the imported vector SVG
              alt={`${stat.subtitle} Icon`}
              width={48} // Adjust the width as needed
              height={48} // Adjust the height as needed
              className="mb-4"
            />
            <h2 className="text-4xl font-bold text-[#50D210]">{stat.title}</h2>
            <p className="text-gray-700">{stat.subtitle}</p>
          </div>
        ))}
      </section>


      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose <span className="text-green-500">KKR</span>?</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          KarthikKesh Robotics Private Limited offers user-friendly robotic solutions designed to enhance safety, productivity, and efficiency. Join hands with us to push the boundaries of technology and elevate your living and industrial standards.
        </p>
      </section>

      <section className="px-20 py-1 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-40 max-w-5xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-[#50D210] p-6 rounded-lg shadow-md text-center w-[365px] h-[380px] flex-shrink-0 px-20">
            <h3 className="text-xl font-bold text-[#202020] mb-4">
              Cost-Effective Robotics Solutions
            </h3>
            <p className="text-[#202020]">
              <span className="block">Our budget-friendly</span>
              <span className="block">Autonomous robots and IoT</span>
              <span className="block">projects are tailored to meet</span>
              <span className="block">diverse needs, ensuring</span>
              <span className="block">accessibility without compromising quality across</span>
              <span className="block">various sectors.</span>
            </p>
          </div>

          {/* GIF in the center */}
          <div className="flex justify-center items-center w-full md:w-auto mx-4">
            <div className="w-[343px] h-[80px] flex justify-center items-center">
              <Image
                src={settings} // Replace with the correct path to your GIF
                alt="Robotics GIF"
                width={343} // Set appropriate width
                height={80} // Set appropriate height
                className="max-w-full h-auto rounded-full"
              />
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-[#50D210] p-6 rounded-lg shadow-md text-center w-[365px] h-[380px] flex-shrink-0 px-20">
            <h3 className="text-xl font-bold text-[#202020] mb-4">
              Empowering Future Innovators
            </h3>
            <p className="text-[#202020]">
              <span className="block">Committed to education and</span>
              <span className="block">innovation, we empower the</span>
              <span className="block">next generation through</span>
              <span className="block">specialized mentorship</span>
              <span className="block">programs like bootcamps & workshops.</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
