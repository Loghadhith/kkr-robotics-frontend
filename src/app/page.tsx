"use client";

import AboutServices from "@/components/home/aboutservices";
import JoinOurCommunity from "@/components/home/joinourcommunity";
import BookWorkshops from "@/components/home/bookworkshop";
import Testimonial from "@/components/home/testimonals";
import Internship from "@/components/home/internship";
import Contact from "@/components/home/contact";
import Techstack from "@/components/home/techstack";
import Hero from "@/components/home/header";
import Whykrr from "@/components/home/whykrr";

const Home = () => {
  return (
    <div className="bg-white text-black w-full overflow-x-hidden">
      <Hero/>
      <Whykrr/>
      <AboutServices />
      <JoinOurCommunity />
      <BookWorkshops />
      <Testimonial />
      <Internship />
      <Contact />
      <Techstack />
      
    </div>
  );
};

export default Home;
