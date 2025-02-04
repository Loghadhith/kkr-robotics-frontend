import React from 'react';
import image1 from '@/assets/ROS.png';
import image2 from '@/assets/Raspbeery.png';
import image3 from '@/assets/Arduino.png';
import image4 from '@/assets/iot.png';

const Techstack = () => {
  return (
    <div className="w-full py-16 md:py-64 flex justify-center items-center bg-[#FAFAFA]">
      <div className="px-4 md:px-0 overflow-x-auto w-full">
        <div className="flex flex-nowrap md:flex-row justify-start md:justify-center gap-8 md:gap-32 min-w-max md:min-w-0">
          {/* Image 1 */}
          <img
            src={image1.src}
            alt="Image 1"
            className="h-16 md:h-24 w-auto object-contain"
          />
          {/* Image 2 */}
          <img
            src={image2.src}
            alt="Image 2"
            className="h-16 md:h-24 w-auto object-contain"
          />
          {/* Image 3 */}
          <img
            src={image3.src}
            alt="Image 3"
            className="h-16 md:h-24 w-auto object-contain"
          />
          {/* Image 4 */}
          <img
            src={image4.src}
            alt="Image 4"
            className="h-16 md:h-24 w-auto object-contain"
          />
          {/* Image 5 */}
          <img
            src={image1.src}
            alt="Image 5"
            className="h-16 md:h-24 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Techstack;

