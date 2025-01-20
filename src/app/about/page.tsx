"use client"

import Image from "next/image";
import hands from "@/assets/hands.jpeg"
import rocket from "@/assets/rocket.jpeg"
import telescope from "@/assets/telescope.jpeg"

const Page = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen text-black">
        <div className="absolute top-[-90] right-0 w-[50%] h-[50%] bg-green-100 z-0 hidden sm:block">
          <Image
            src={hands}
            alt="Hands Image"
            layout="fit"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">
            Who we are: <span className="text-gray-700">Innovators</span> in Robotics
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering the Future with Robotics Innovation
          </p>
        </div>
        <div className="relative z-10 mt-8">
          <a
            href="#contact"
            className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-800"
          >
            Get in touch
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>



      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-white text-black lg:px-36 lg:py-16">
        <div className="w-[70%]">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            Our vision is to revolutionize the world by leveraging robotics technology to automate various industries and domains. We strive to make robots affordable and accessible to everyone, enabling them to do work for us and advance our quality of life.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="rounded-full p-8 flex items-center justify-center shadow-md">
            <Image
              src={telescope} // Replace with the correct path to the telescope icon
              alt="Telescope Icon"
              className="rounded-full h-52 w-52"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center h-[80%] bg-white text-black px-8 py-16">
        <div className="mb-4">
          <div className="rounded-full bg-gray-100 p-8 flex items-center justify-center shadow-md">
            <Image
              src={rocket} // Replace with the correct path to the telescope icon
              alt="Telescope Icon"
              className="rounded-full h-52 w-52"
            />
          </div>
        </div>
        <div className="w-[70%]">
          <h2 className="text-4xl font-bold mb-4 text-right">Our Mission</h2>
          <p className="text-lg text-gray-600 text-right">
            Our mission is to design and develop advanced robotics technology that serves the needs of our clients, while providing top-notch services, including IoT projects, app development, and web design. We intend to create a world where robots work alongside humans to enhance productivity, efficiency, and safety in various industries, and become a global leader in delivering quality robots from India to the world.
          </p>
        </div>
      </section>

    </>
  );
};

export default Page;

