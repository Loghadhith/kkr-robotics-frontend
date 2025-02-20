import React from 'react';
import Image from 'next/image';
import students from "@/assets/student.png"
import aurdino from "@/assets/Logo/arduino.png"
import robotics from "@/assets/Logo/robotarm.png"
import terminal from "@/assets/Logo/terminal.png"
import ros from "@/assets/Logo/ros.png"
import experiment from "@/assets/Logo/experiment.png"
import rasberrypi from "@/assets/Logo/rasberrypi.png"

const RookiesCommunity: React.FC = () => {
    const icons = [
        { src: experiment, alt: "Desktop" },
        { src: robotics, alt: "Robotic Arm" },
        { src: terminal, alt: "Terminal" },
        { src: ros, alt: "ROS" },
        { src: aurdino, alt: "Arduino" },
        { src: rasberrypi, alt: "Raspberry Pi" },
    ];

    return (
        <div className="min-h-screen bg-[#202020]">
            <div className="w-full bg-white py-16 md:py-32 px-4">
                <p className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Let&apos;s Create Rookies Community!!!
                </p>
                <p className="text-center text-gray-700 max-w-full mx-auto text-lg md:text-2xl pb-6 md:pb-10">
                    Join Our Robotics E-Commerce Community For The Latest Technologies, Expert Discussions, And Convenient Shopping.
                </p>
            </div>
            <div className="relative w-full px-2"> 
                <div className="relative max-w-[2000px]">
                    <div className="relative w-full aspect-[5/4] bg-transparent">
                        {/* Icons container - hidden on mobile */}
                        <div className="absolute w-full h-full -left-0 right-0 hidden md:block"> 
                            {icons.map((icon, index) => (
                                <div
                                    key={icon.alt}
                                    className={`absolute w-20 lg:w-32 h-20 lg:h-32 rounded-full bg-white flex items-center justify-center transform -translate-y-1/2
                                        ${index === 0 ? 'left-[5%] lg:left-40 top-32' : ''}
                                        ${index === 1 ? 'left-[25%] lg:left-[350px] top-[390px]' : ''}
                                        ${index === 2 ? 'left-[2%] lg:left-10 top-[650px]' : ''}
                                        ${index === 3 ? 'right-[15%] lg:right-64 top-32' : ''}
                                        ${index === 4 ? 'right-[2%] lg:right-10 top-[390px]' : ''}
                                        ${index === 5 ? 'right-[30%] lg:right-96 top-[650px]' : ''}`}
                                >
                                    <div className="w-full h-full rounded-full bg-black/10 flex items-center justify-center p-4">
                                        <Image
                                            src={icon.src}
                                            alt={icon.alt}
                                            width={100}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Central image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full md:w-4/5 h-4/5">
                                <div className="relative w-full h-full md:pl-[300px]">
                                    <Image
                                        src={students.src} 
                                        alt="Book Stack Illustration"
                                        width={999}
                                        height={999}
                                        style={{ objectFit: 'contain' }} 
                                        className="rounded-lg -mt-[150px] md:-mt-[330px]" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-white max-w-full mx-auto -mt-[400px] md:-mt-[660px] px-4">
                    <p className="mb-8 text-lg md:text-2xl">
                        <span className='block'>Join our ROS Community at <span className="text-[#0EE20E]">karthikesh Robotics!</span> Connect & create projects with fellow enthusiasts, share</span>
                        <span className='block'>knowledge, and collaborate on projects in robotics and AI. Be a beginner or a seasoned professional, our</span>
                        <span className='block'>community offers a platform for growth, innovation, and making impactful contributions. Team up with us to play</span>
                        <span className='block'>an inevitable role in the future of robotics!</span>
                    </p>

                    <button className="bg-[#0EE20E] hover:bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold transition-colors">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RookiesCommunity;