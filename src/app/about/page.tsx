"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import hands from "@/assets/hands.png"
import rocket from "@/assets/rocket.gif"
import bgImage from "@/assets/LooperBG.svg"
import telescope from "@/assets/telescope.gif"
import explorers from "@/assets/curious_explorers.gif"

type TeamDetail = Array<{
  name: string;
  role: string;
  url: string;
  instagram: string;
  linkedin: string;
}>

const Page = () => {

  const [data, setData] = useState<TeamDetail | null>(null);

  useEffect(() => {
    const GET = async () => {
      if (!data) {
        const res = await fetch("https://raw.githubusercontent.com/Sample-hub-hue/kkr/refs/heads/main/team.json", {
          headers: {
            Accept: "application/json",
          },
        });
        const html = await res.text();
        const info = JSON.parse(html);
        console.log(info);
        setData(info);
      }
    };
    GET();
  }, [data])

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen text-black overflow-x-clip">
        <div className="absolute inset-0 w-full h-full z-35 lg:hidden">
          <Image
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          style={{ transform: 'scaleX(-1)' }}
          className="absolute top-[30%] right-0 inset-0 w-full h-full z-35 lg:hidden"
        >
          <Image
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-full sm:w-[500px] hidden lg:block">
          <div
            className="absolute top-10 shadow-lg left-[-12%] h-[180px] bg-gradient-to-r from-[#50D210] to-[#50D210] z-[-3]"
            style={{
              transform: 'rotate(30deg)',
              width: '200%',
              transformOrigin: 'left center',
            }}
          >
          </div>
        </div>


        <div className="relative flex flex-col items-center justify-center z-10 text-center h-fit">
          <h1 className="text-6xl font-bold">
            Who we are: <span className="text-gray-700">Innovators</span> in Robotics
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering the Future with Robotics Innovation
          </p>
        </div>

        <div className="relative block z-10 pt-4">
          <a
            href="#contact"
            className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-800"
          >
            Get in touch
            <span className="ml-2">→</span>
          </a>
        </div>


        <div className="absolute top-10 right-0 w-[50%] min-h-screen z-0 hidden md:block sm:block">
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
          style={{ transform: 'scaleX(-1)' }}
          className="absolute right-0 inset-0 w-full h-full z-35 lg:hidden"
        >
          <Image
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute min-w-full h-[200px] top-[-10%] hidden lg:block"
        >
          <div
            className="relative top-[-90%] right-[50%] h-[180px] bg-gradient-to-l from-[#50D210] to-[#50D210] z-[-2] shadow-above"
            style={{
              transform: 'rotate(-30deg) scaleX(1)',
              width: '200%',
              transformOrigin: 'right center',
            }}
          >
          </div>
        </div>

        <div className="top-[20%] pl-4 flex flex-col max-w-full left-16 mt-10">
          <div className="w-full pr-16 lg:w-3/5">
            <h2 className="text-6xl font-bold mb-10">Our Vision</h2>
            <p className="text-2xl lg:text-4xl text-gray-600">
              We envision engineering robotic solutions that are user-friendly, safe, and economical. Our vision is to  elevate the standard of living and boost industries with unprecedented levels of efficiency. By  overstepping the frontiers of possibilities, we foster a vibrant community of empowered robotics  enthusiasts who drive innovation and exploration. Additionally, we offer a seamless e-commerce  experience, providing affordable robotic products with easy purchasing options.
            </p>
          </div>
          <div className="relative w-fit left-[6%] rounded-full p-8 flex items-center justify-center shadow-md sm:top-[100%]">
            <Image
              src={telescope}
              alt="Telescope Icon"
              className="rounded-full h-52 w-52"
            />
          </div>
        </div>
      </section>

      <section className="relative flex md:flex-row text-right h-[80%] text-black lg:px-16 lg:py-16">

        <div className="absolute inset-0 w-full h-full z-35 lg:hidden">
          <Image
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex flex-col max-w-full pr-10 pb-0 lg:pb-10 items-end justify-end mt-20 lg:mt-60 lg:pr-20">
          <div className="lg:w-3/5">
            <h2 className="text-6xl font-bold mb-4 text-right right-0">Our Mission</h2>
            <p className="text-2xl lg:text-4xl text-gray-600 text-right sm:text-xl">
              Our mission is to revolutionize homes and industries with cutting-edge robotic technology that enhances and automates everyday tasks, ensuring improved safety, productivity, and ease of use. We offer exceptional services, including autonomous robots, IoT projects, workshops, and mentorship, all tailored to meet our customers&apos; needs at budget-friendly prices. Our e-commerce platform provides affordable access to robotic components, making technology more accessible. Additionally, we aim to ignite the passion of enthusiasts through mentorship, empowering them to explore and excel in the world of robotics.
            </p>
          </div>
          <div className="mb-0 lg:mb-4 flex mt-10 justify-end">
            <div className="relative w-fit rounded-full bg-gray-100 p-8 flex items-center justify-center shadow-md">
              <Image
                src={rocket}
                alt="Telescope Icon"
                className="rounded-full h-52 w-52"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-between min-h-screen text-black lg:px-36 overflow-x-clip pb-20">

        <div
          style={{ transform: 'scaleX(-1)' }}
          className="absolute right-0 inset-0 w-full h-full z-35 lg:hidden"
        >
          <Image
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-full sm:w-[500px] hidden lg:block">
          <div
            className="absolute shadow-above top-[-90%] left-[-12%] h-[180px] bg-gradient-to-r from-[#50D210] to-[#50D210] z-[-1]"
            style={{
              transform: 'rotate(30deg)',
              width: '200%',
              transformOrigin: 'left center',
            }}
          >
          </div>
        </div>

        <div className="mt-20 lg:mt-40 pl-4 flex flex-col max-w-full left-16">
          <div className="w-full pr-16 mb-10 lg:w-3/5">
            <h2 className="text-6xl font-bold mb-10">Our Values</h2>
            <p className="text-xl lg:text-4xl text-gray-600 font-bold">&quot;Making Robotics Easy, Safe, and Affordable!&quot;</p>
            <p className="text-xl lg:text-4xl text-gray-600 sm:text-xl">
              is not just a slogan; it is our guiding principle. We believe  that technology should be accessible to everyone, regardless of any barriers. By providing affordable,  superior technology mentorship to student communities, we intend to empower aspiring robotics  enthusiasts. Join us in our mission to democratize technology and create a more equitable future for all.
            </p>
          </div>
          <div className="relative pt-4 w-fit left-[6%] rounded-full flex items-center justify-center shadow-md sm:top-[100%]">
            <Image
              src={explorers}
              alt="Telescope Icon"
              className="rounded-full h-64 w-64"
            />
          </div>
        </div>
      </section>


      <section style={{ background: '#202020' }} className="relative flex flex-col z-[-10]">
        <div className="2-100vw pt-10 items-center justify-center">
          <p style={{
            background: 'transparent',
            color: '#FFF',
            fontFamily: 'Raleway',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: 'normal',
            letterSpacing: '4px'
          }}
            className="text-center">Meet our</p>
        </div>
        <div>
          <p style={{
            color: '#FFF',
            fontFamily: 'Raleway',
            fontSize: '80px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '16px'
          }} className="text-center">Team</p>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="w-3/5 text-white text-center text-2xl">KarthiKesh Robotics Private Limited was incorporated on March 22, 2024, under the Companies Act,  2013 (18 of 2013). Our primary focus is on seamlessly integrating robotics and AI technologies into  societal frameworks.</p>
        </div>


        <div className="overflow-x-clip">
          <div
            style={{
              position: 'relative',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgba(255, 255, 255, 0.20)',
              fontFamily: 'Raleway',
              fontSize: '300px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              letterSpacing: '15px',
              zIndex: -2,
            }}
            className="pt-20 w-[100%] text-center flex justify-center flex-wrap"
          >
            <span className="team-letter">T</span>
            <span className="team-letter">E</span>
            <span className="team-letter">A</span>
            <span className="team-letter">M</span>
          </div>
        </div>


      </section>


    </>
  );
};

export default Page;
