import React from 'react';
import image1 from '@/assets/ROS.png'; // Replace with actual image paths
import image2 from '@/assets/Raspbeery.png';
import image3 from '@/assets/Arduino.png';
import image4 from '@/assets/iot.png';

const Techstack = () => {
  return (
    <div className="w-full h-[181px] flex justify-center items-center bg-[#FAFAFA] pt-48 py-64">
      <div className="flex gap-32">
        {/* Image 1 */}
        <img
          src={image1.src}
          alt="Image 1"
          className="h-24 w-full object-contain"
        />
        {/* Image 2 */}
        <img
          src={image2.src}
          alt="Image 2"
          className="h-24 w-full object-contain"
        />
        {/* Image 3 */}
        <img
          src={image3.src}
          alt="Image 3"
          className="h-24 w-full object-contain"
        />
        {/* Image 4 */}
        <img
          src={image4.src}
          alt="Image 4"
          className="h-24 w-full object-contain"
        />
        {/* Image 5 */}
        <img
          src={image1.src}
          alt="Image 5"
          className="h-24 w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Techstack;
