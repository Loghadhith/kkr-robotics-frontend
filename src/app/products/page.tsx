import React from 'react'
import prodRobo from "@/assets/products_robot.png"
import Image from 'next/image'

function Page() {
  return (
    <>
      <section style={{ background: '#202020' }} className="relative flex flex-col items-center bg-gradient-to-b from-green-600 to-black">
        <div className='overflow-x-clip'>
          <div
            style={{ zIndex: 2, background: 'conic-gradient(from 90deg at 50% 50%, #0EE20E 0.05257763550616801deg, #0A790A 86.385857462883deg, #202020 123.18552374839783deg, #202020 142.77533769607544deg, #202020 179.57043886184692deg, #202020 219.23985958099365deg, #202020 260.6398630142212deg, #202020 296.63987159729004deg, #202020 323.6398673057556deg, #202020 358.95511865615845deg, #D8FFC5 359.53808069229126deg)' }}
            className='absolute left-[-30%] top-[-60%] h-[120%] w-[80%]'
          >
          </div>

          <div
            style={{ transform: 'scaleX(-1)', zIndex: 2, background: 'conic-gradient(from 90deg at 50% 50%, #0EE20E 0.05257763550616801deg, #0A790A 86.385857462883deg, #202020 123.18552374839783deg, #202020 142.77533769607544deg, #202020 179.57043886184692deg, #202020 219.23985958099365deg, #202020 260.6398630142212deg, #202020 296.63987159729004deg, #202020 323.6398673057556deg, #202020 358.95511865615845deg, #D8FFC5 359.53808069229126deg)' }}
            className='absolute left-[50%] top-[-60%] h-[120%] w-[80%]'
          >
          </div>
        </div>
        <div className='z-10 top-24 min-h-screen w-[100%] text-center justify-center'>
          <p style={{ fontFamily: 'Jacques_Francois' }} className="text-white/50 text-[250px] font-normal leading-normal tracking-[25px]">
            Shhh!
          </p>

        </div>
        <div style={{ zIndex: 10 }} className='absolute top-[-20%] max-h-[90%] max-w-[50%] hidden lg:block'>
          <Image
            src={prodRobo}
            alt="prod Robo"
            layout="fit"
            objectFit="fit"
            objectPosition="center"
            loading="lazy"
          />
        </div>
        <div className=" items-center justify-center text-center h-fit">
          <p
            className="text-6xl font-bold"
            style={{
              color: "#FFF",
              fontFamily: "Jacques François",
              fontSize: "50px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              letterSpacing: "5px",
            }}
          >
            We are launching soon
          </p>

        </div>
      </section >
    </>
  )
}

export default Page

//background: 'conic-gradient(from 180deg at 50% 50%, #0EE20E 0.05257763550616801deg, #0A790A 86.385857462883deg, #202020 123.18552374839783deg, #202020 142.77533769607544deg, #202020 179.57043886184692deg, #202020 219.23985958099365deg, #202020 260.6398630142212deg, #202020 296.63987159729004deg, #202020 323.6398673057556deg, #202020 358.95511865615845deg, #D8FFC5 359.53808069229126deg)',
