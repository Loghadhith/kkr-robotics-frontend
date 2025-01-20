"use client";

import Image from "next/image";
import vector from "@/assets/Logo/Vector.svg";
import robot from "@/assets/robot.png";

const Home = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-[url('/assets/background.svg')] bg-cover">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Autonomous Robots Will Simplify Your Work!
          </h1>
          <p className="text-gray-700 mb-6">
            Explore advanced robotic solutions tailored to enhance productivity and efficiency.
          </p>
          <a
            href="#explore"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-full hover:bg-green-600"
          >
            Explore
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          {/* Using layout="intrinsic" to maintain exact dimensions */}
          <Image
            src={robot} // Replace with your actual robot image name in the assets folder
            alt="Autonomous Robot"
            width={463} // Set width from Figma design
            height={646} // Set height from Figma design
            style={{ flexShrink: 0 }} // Prevent shrinking
            layout="intrinsic" // Ensures the image respects its aspect ratio
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
            <h2 className="text-4xl font-bold text-green-500">{stat.title}</h2>
            <p className="text-gray-700">{stat.subtitle}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose <span className="text-green-500">KKR</span>?</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          KarthikKesh Robotics Private Limited offers user-friendly robotic solutions designed to enhance safety, productivity, and efficiency. Join hands with us to push the boundaries of technology and elevate your living and industrial standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-bold text-green-500 mb-4">
              Cost-Effective Robotics Solutions
            </h3>
            <p className="text-gray-700">
              Our budget-friendly Autonomous robots and IoT projects are tailored to meet diverse needs, ensuring accessibility without compromising quality across various sectors.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-bold text-green-500 mb-4">
              Empowering Future Innovators
            </h3>
            <p className="text-gray-700">
              Committed to education and innovation, we empower the next generation through specialized mentorship programs like bootcamps & workshops.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
