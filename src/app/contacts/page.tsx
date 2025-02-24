"use client"

import { useState } from 'react';
import contactImage from "@/assets/contact_image.jpeg"
import arrow from "@/assets/Image 17.svg"
import Image from 'next/image';
import { FileMinus, MailIcon, MapPin, PhoneCallIcon } from 'lucide-react';

interface ContDetail {
  name: string,
  mail: string,
  ques: string
}

function Page() {
  const [formData, setFormData] = useState<ContDetail>({
    mail: '',
    name: '',
    ques: ''
  });

  const handleChange = (r: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = r.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (r: React.FormEvent) => {
    r.preventDefault();
    console.log(formData)
  }


  return (
    <>
      <section className="relative flex flex-col overflow-x-clip" >
        <div style={{ zIndex: -2, background: "#50D210" }} className="min-h-screen">
          <div
            style={{
              zIndex: 1,
              background: 'linear-gradient(138deg, #D9D9D9 0%, #297C00 55.76%)',
            }}
            className="absolute left-[-5%] top-[-5%] h-64 w-64 rounded-full"
          >

          </div>
          <div
            style={{
              zIndex: 1,
              background: 'linear-gradient(138deg, #D9D9D9 0%, #297C00 55.76%)',
            }}
            className="absolute left-[40%] top-[40%] h-64 w-64 rounded-full"
          >

            <div
              style={{
                zIndex: 2,
                background: 'linear-gradient(138deg, #D9D9D9 0%, #297C00 55.76%)',
              }}
              className="absolute left-[65%] top-[35%] h-48 w-48 rounded-full"
            >
            </div>
          </div>

          <div style={{ zIndex: 3 }} className="relative flex flex-col min-h-screen w-full items-center justify-center">
            <div className="relative flex flex-wrap bg-white bg-opacity-50 backdrop-blur-lg shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-[90%] border-white justify-between">
              <div className='realtive flex flex-col w-[100%] lg:max-w-[50%]'>
                <div className="p-6 rounded-xl border-black backdrop-blur-lg w-auto">
                  <h1 className="text-[#202020] font-lexend text-5xl font-bold leading-[56px] mb-4">Get in touch</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="text-white text-xl mb-2" >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.mail}
                        className="shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-white font-xl mb-2" >
                        Your Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.mail}
                        className="shadow border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
                        placeholder="example@mail.com"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-white text-xl mb-2" >
                        How can we help?
                      </label>
                      <input
                        name="ques"
                        onChange={handleChange}
                        className="shadow border rounded-md w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-200"
                        id="ques"
                        type="text"
                        placeholder="Enter your message here"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-[#46B013] hover:bg-green-700 text-white text-xl w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-green-600" type="submit">
                        Send my message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='relative flex-col w-fit hidden md:hidden lg:block'>
                <h2 className='bg-white text-green-400 rounded-xl text-2xl font-bold m-2 w-fit'>Grop us a line</h2>
                <Image src={arrow} alt="arrow" objectFit='fit' layout='fit' objectPosition='center' loading='lazy' className='w-32 h-32' />
              </div>
              <div className="w-512 h-512 hidden lg:block">
                <Image src={contactImage} alt="contact_image" objectFit="fit" layout="fit" objectPosition='center' loading='lazy' className='rounded-xl shadow-xl' />
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="relative flex flex-col items-center justify-center z-3">
      </section>
      <section className='relative bg-white min-h-[10%] z-3 pb-4'>
        <h1 className='text-center text-4xl font-bold font-lexend pt-10'>Get in touch anytime</h1>

        <div className='relative flex flex-col sm:flex-row lg:flex-wrap md:flex-wrap justify-between p-10'>

          <div className='relative pb-4'>
            <p className='font-lexend pb-2'>Email</p>
            <div className='relative flex flex-wrap shadow-lg h-8'>
              <MailIcon className='pr-2'/> <p className='font-lexend w-64'>yourcompany@email.com</p>
            </div>
          </div>

          <div className='relative pb-4'>
            <p className='font-lexend pb-2'>Phone</p>
            <div className='relative flex flex-wrap shadow-lg h-8'>
              <PhoneCallIcon className='pr-2'/> <p className='font-lexend w-64'>+1 (123) 456-7893</p>
            </div>
          </div>


          <div className='relative pb-4'>
            <p className='font-lexend pb-2'>Fax</p>
            <div className='relative flex flex-wrap shadow-lg h-8'>
              <FileMinus className='pr-2'/> <p className='font-lexend w-64'>(123) 456-6782</p>
            </div>
          </div>


          <div className='relative pb-4'>
            <p className='font-lexend pb-2'>Address</p>
            <div className='relative flex flex-wrap shadow-lg h-8'>
              <MapPin className='pr-2'/> <p className='font-lexend w-64'>US</p>
            </div>
          </div>

        </div>



      </section>
    </>
  )
}

export default Page;
