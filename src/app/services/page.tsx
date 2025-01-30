import Image from 'next/image';
import iotstudent from "@/assets/big-iot-student.png"
import mentorship from "@/assets/mentorship.png"
import walle from "@/assets/wall-E.png"
import robot from "@/assets/robot.png"

const Sections = () => {
  return (
    <div className="space-y-8">
      {/* First Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto bg-gray-100 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Paragraph) */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Autonomous Robots</h2>
              <p className="text-lg">
                Autonomous robots represent the forefront of technological innovation, designed to perform tasks and make decisions without human intervention. These advanced machines are equipped with cutting-edge sensors such as lidar, radar, cameras, and infrared sensors that allow them to perceive and navigate their environment in three dimensions. Artificial intelligence plays a crucial role, with machine learning enabling robots to learn from their experiences and improve over time, while computer vision and natural language processing allow them to interpret visual information and understand human speech. These capabilities are complemented by sophisticated navigation systems that include path planning.
              </p>
            </div>
            {/* Right Column (Image) */}
            <div className="flex justify-center">
              <Image src={walle.src} alt="Robot" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section (Custom Background rgba(217, 217, 217, 0.25)) */}
      <section className="py-16" style={{ backgroundColor: 'rgba(217, 217, 217, 0.25)' }}>
        <div className="max-w-screen-xl mx-auto bg-gray-900 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Image) */}
            <div className="flex justify-center">
              <Image src="/path-to-your-image.jpg" alt="Robot" width={500} height={500} />
            </div>
            {/* Right Column (Paragraph) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Autonomous Robots</h2>
              <p className="text-lg text-gray-300">
                Autonomous robots represent the forefront of technological innovation, designed to perform tasks and make decisions without human intervention. These advanced machines are equipped with cutting-edge sensors such as lidar, radar, cameras, and infrared sensors that allow them to perceive and navigate their environment in three dimensions. Artificial intelligence plays a crucial role, with machine learning enabling robots to learn from their experiences and improve over time, while computer vision and natural language processing allow them to interpret visual information and understand human speech. These capabilities are complemented by sophisticated navigation systems that include path planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto bg-gray-100 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column (Paragraph) */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Autonomous Robots</h2>
              <p className="text-lg">
                Autonomous robots represent the forefront of technological innovation, designed to perform tasks and make decisions without human intervention. These advanced machines are equipped with cutting-edge sensors such as lidar, radar, cameras, and infrared sensors that allow them to perceive and navigate their environment in three dimensions. Artificial intelligence plays a crucial role, with machine learning enabling robots to learn from their experiences and improve over time, while computer vision and natural language processing allow them to interpret visual information and understand human speech. These capabilities are complemented by sophisticated navigation systems that include path planning.
              </p>
            </div>
            {/* Right Column (Image) */}
            <div className="flex justify-center">
              <Image src="/path-to-your-image.jpg" alt="Robot" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
