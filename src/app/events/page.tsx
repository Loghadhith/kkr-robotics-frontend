"use client"

import Image from "next/image";
import eventsBg from "@/assets/events-bg.jpeg"

const Page = () => {
  return (
    <>
      <section className="">
        <Image src={eventsBg} alt="bg" className="w-full" style={{zIndex: -1}} />
        <div className="relative">
        </div>
      </section>
    </>
  )
}

export default Page;
