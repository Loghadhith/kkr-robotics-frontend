"use client"

import Image from "next/image";
import hands from "@/assets/hands.png"
import rocket from "@/assets/rocket.gif"
import telescope from "@/assets/telescope.gif"

const Page = () => {
  return (
    <>
      <section className="relative top-[-20] flex flex-col items-center justify-center min-h-screen text-black overflow-x-clip">
        <div className="max-w-full h-[200px] sm:w-[500px]">
          <div
            className="absolute top-14 left-[-12%] h-[180px] bg-gradient-to-r from-[#50D210] to-[#50D210] z-[-3]"
            style={{
              transform: 'rotate(30deg)',
              width: '160%',
              transformOrigin: 'left center',
            }}
          >
            {/* Optionally add any content inside the ribbon */}
          </div>
        </div>



        <div className="relative flex flex-col items-center justify-center z-10 text-center h-fit">
          <h1 className="text-4xl font-bold">
            Who we are: <span className="text-gray-700">Innovators</span> in Robotics
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering the Future with Robotics Innovation
          </p>
        </div>
        <div className="relative block z-10 mt-14">
          <a
            href="#contact"
            className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-800"
          >
            Get in touch
            <span className="ml-2">→</span>
          </a>
        </div>

        <div className="absolute top-[-40] right-0 w-[50%] min-h-screen z-0 hidden md:block sm:block">
          <Image
            src={hands}
            alt="Hands Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>



      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen text-black lg:px-36 lg:py-16 overflow-x-clip">


        <div
          className="absolute min-w-full h-[200px] top-[-10%]"
        >
          <div
            className="relative right-[50%] h-[180px] bg-gradient-to-l from-[#50D210] to-[#50D210] z-[-2] shadow-md"
            style={{
              transform: 'rotate(150deg) scaleX(-1)',
              width: '180%',
              transformOrigin: 'right center',
            }}
          >
            {/* Optionally add any content inside the mirrored ribbon */}
          </div>
        </div>

        <div className="top-[20%] pl-4 flex flex-col max-w-full left-16">
          <div className="w-full pr-16 lg:w-1/2">
            <h2 className="text-6xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600">
            Our mission is to revolutionize homes and industries with cutting-edge robotic technology that enhances and automates everyday tasks, ensuring improved safety, productivity, and ease of use. We offer exceptional services, including autonomous robots, IoT projects, workshops, and mentorship, all tailored to meet our customers&apos; needs at budget-friendly prices. Our e-commerce platform provides affordable access to robotic components, making technology more accessible. Additionally, we aim to ignite the passion of enthusiasts through mentorship, empowering them to explore and excel in the world of robotics.            </p>
          </div>
          <div className="relative w-fit left-[6%] rounded-full p-8 flex items-center justify-center shadow-md sm:top-[100%]">
            <Image
              src={telescope} // Replace with the correct path to the telescope icon
              alt="Telescope Icon"
              className="rounded-full h-52 w-52"
            />
          </div>
        </div>
      </section>

      <section className="relative flex md:flex-row text-right h-[80%] mt-16 text-black pt-10 lg:px-16 lg:py-16">


        <div className="relative flex flex-col max-w-full pr-10 pb-10 justify-end lg:pr-20">
          <div className="lg:w-1/2">
            <h2 className="text-6xl font-bold mb-4 text-right right-0">Our Mission</h2>
            <p className="text-lg text-gray-600 text-right">
              Our mission is to design and develop advanced robotics technology that serves the needs of our clients, while providing top-notch services, including IoT projects, app development, and web design. We intend to create a world where robots work alongside humans to enhance productivity, efficiency, and safety in various industries, and become a global leader in delivering quality robots from India to the world.
            </p>
          </div>
          <div className="mb-4 flex justify-end">
            <div className="relative w-fit rounded-full bg-gray-100 p-8 flex items-center justify-center shadow-md">
              <Image
                src={rocket} // Replace with the correct path to the telescope icon
                alt="Telescope Icon"
                className="rounded-full h-52 w-52"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Page;
