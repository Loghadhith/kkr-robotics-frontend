import Image from 'next/image';
import iotstudent from "@/assets/iot-student.png"
import mentorship from "@/assets/mentorship.png"
import robot from "@/assets/robots.png"

const Sections = () => {
  return (
    <div className="space-y-8">
      {/* First Section */}
      <section className="bg-white pt-16 pb-10 max-w-full relative">
        <div className="max-w-screen-full mx-24 bg-gray-100 pb-44 pt-8 pl-4 shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Paragraph) */}
            <div>
              <h2 className="text-5xl font-bold ml-24 mt-10">Autonomous Robots</h2>
              <p className="text-2xl mt-10 ml-[140px]">
                <span className='block'>Autonomous robots represent the forefront of</span><span className='block'> technological innovation, designed to perform tasks and</span><span className='block'>make decisions without human intervention. These </span>
                <span className='block'>advanced machines are equipped with cutting-edge</span><span className='block'></span>sensors such as lidar, radar, cameras, and infrared<span className='block'>sensors that allow them to perceive and navigate their</span>
                <span className='block'></span>environment in three dimensions. Artificial intelligence<span className='block'> plays a crucial role, with machine learning enabling</span><span className='block'>robots to learn from their experiences and improve over</span>
                <span className='block'> time, while computer vision and natural language</span>
                <span className='block'>processing allow them to interpret visual information and</span>
                <span className='block'>understand human speech. These capabilities are</span>
                <span className='block'>complemented by sophisticated navigation systems that </span>
                <span className='block'>include path plan.</span>


                        
              </p>
            </div>
            {/* Right Column (Image) */}
            <div className="flex justify-center -mt-12 pl-48">
              <div className="relative w-full h-0 pb-[100%] bg-gray-100">
                <Image
                  src={robot.src}
                  alt="Robot"
                  width={500}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Second Section (Custom Background rgba(217, 217, 217, 0.25)) */}
      <section className="mt-0 py-16 max-x-full bg-[#202020]">
      <div className="max-w-screen-full mx-24 pb-44 pt-8 pl-4 shadow-lg rounded-lg overflow-hidden bg-[rgba(217,217,217,0.25)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Image) */}
            <div className="flex justify-center mt-10">
              <Image src={iotstudent.src} alt="Robot" width={700} height={400} />
            </div>
            {/* Right Column (Paragraph) */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-20 md:text-right mt-20 mr-32">Internet of Things</h2>
              <p className="text-2xl text-gray-300 md:text-right mr-40">
              <span className='block'>Autonomous robots represent the forefront of</span><span className='block'> technological innovation, designed to perform tasks and</span><span className='block'>make decisions without human intervention. These </span>
                <span className='block'>advanced machines are equipped with cutting-edge</span><span className='block'></span>sensors such as lidar, radar, cameras, and infrared<span className='block'>sensors that allow them to perceive and navigate their</span>
                <span className='block'></span>environment in three dimensions. Artificial intelligence<span className='block'> plays a crucial role, with machine learning enabling</span><span className='block'>robots to learn from their experiences and improve over</span>
                <span className='block'> time, while computer vision and natural language</span>
                <span className='block'>processing allow them to interpret visual information and</span>
                <span className='block'>understand human speech. These capabilities are</span>
                <span className='block'>complemented by sophisticated navigation systems that </span>
                <span className='block'>include path plan.</span>              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-white pt-16 pb-10 max-w-full relative">
        <div className="max-w-screen-full mx-24 bg-gray-100 pb-44 pt-8 pl-4 shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Paragraph) */}
            <div>
              <h2 className="text-5xl font-bold ml-24 mt-10">Mentorship Program</h2>
              <p className="text-2xl mt-10 ml-[140px]">
                <span className='block'>Autonomous robots represent the forefront of</span><span className='block'> technological innovation, designed to perform tasks and</span><span className='block'>make decisions without human intervention. These </span>
                <span className='block'>advanced machines are equipped with cutting-edge</span><span className='block'></span>sensors such as lidar, radar, cameras, and infrared<span className='block'>sensors that allow them to perceive and navigate their</span>
                <span className='block'></span>environment in three dimensions. Artificial intelligence<span className='block'> plays a crucial role, with machine learning enabling</span><span className='block'>robots to learn from their experiences and improve over</span>
                <span className='block'> time, while computer vision and natural language</span>
                <span className='block'>processing allow them to interpret visual information and</span>
                <span className='block'>understand human speech. These capabilities are</span>
                <span className='block'>complemented by sophisticated navigation systems that </span>
                <span className='block'>include path plan.</span>


                        
              </p>
            </div>
            {/* Right Column (Image) */}
            <div className="flex justify-center mt-32 pl-5">
              <div className="relative w-full h-0 pb-[50%] bg-gray-100">
                <Image
                  src={mentorship.src}
                  alt="Mentorship"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
