import React from 'react'
import location from '../assets/location.png';
import email from '../assets/email.png';
import linkdinC from '../assets/linkdinC.png';
import github from '../assets/githubC.png'

function Contact() {
  return (
    <section id='Contact' className='w-full flex justify-center items-center mb-10 mt-20'>

      <div className='flex flex-col justify-center items-start gap-6'>

        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='font-extrabold text-teal-500 text-[15px] max-lg:text-[20px]'>
            CONTACT
          </p>
          <p className='font-extrabold  text-[20px]'>
            Don't be shy! Hit me up!  👇
          </p>
        </div>

        <div className='flex flex-row justify-start items-start gap-5 max-lg:flex-col'>

          <div className='flex flex-row justify-center items-center gap-4 py-2 px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer'>
            <img
              src={email}
              alt="locationIcon"
              width={32}
            />

            <a href='mailto:rmansourouahchia@gmail.com' className='flex flex-col justify-start items-start gap-1'>
              <p className='font-bold text-[19px]'>
                Mail
              </p>
              <p className='text-gray-600 text-[15px]'>
                rmansourouahchia@gmail.com
              </p>
            </a>
          </div>

          <div className='flex flex-row justify-center items-center gap-4 py-2 px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer'>
            <img
              src={linkdinC}
              alt="locationIcon"
              width={28}
            />

            <a href='https://www.linkedin.com/in/rekia-mansour-ouahchia-810bb82b4/'
              target='_blanc'
              rel="noopener noreferrer"
              className='flex flex-col justify-start items-start gap-1'>
              <p className='font-bold text-[19px]'>
                LinkdIn
              </p>
              <p className='text-gray-600 text-[15px]'>
                Rekia Mansour ouahchia
              </p>
            </a>
          </div>

          <div className='flex flex-row justify-center items-center gap-4 py-2 px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer'>
            <img
              src={github}
              alt="githubIcon"
              width={40}
            />

            <a href='https://github.com/Rekia-mo' target='_blanc' rel="noopener noreferrer" className='flex flex-col justify-start items-start gap-1'>
              <p className='font-bold text-[19px]'>
                Github
              </p>
              <p className='text-gray-600 text-[15px]'>
                Rekia-mo
              </p>
            </a>
          </div>

          <div className='flex flex-row justify-center items-center gap-4 py-2 px-5 rounded-xl hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer'>
            <img
              src={location}
              alt="locationIcon"
              width={38}
            />

            <div className='flex flex-col justify-start items-start gap-1'>
              <p className='font-bold text-[18px]'>
                Location
              </p>
              <p className='text-gray-600 text-[14px]'>
                Algiers, Algeria
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact