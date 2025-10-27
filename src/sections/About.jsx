import React from 'react'
import deskImg from '../assets/desk.jpg'

function About() {
  return (
    <>
      <section id='About' className='h-[90vh] w-full flex justify-center items-center '>
        <div className='flex flex-row justify-center items-center gap-10 max-lg:mt-150 max-lg:flex-col-reverse  max-lg:gap-10'>

          <div className='rounded-4xl overflow-hidden w-80 h-70 flex justify-center items-center max-lg:w-95 max-lg:h-60 '>
            <img src={deskImg} alt="deskImg" className='w-full h-full object-cover' />
          </div>

          <div className='flex flex-col justify-center items-start w-110 gap-2 max-lg:w-95 '>
            <p className='font-extrabold text-teal-500 text-[15px]'>
              ABOUT ME
            </p>

            <p className='font-bold text-[23px] max-lg:text-[19px]'>
              A dedicated Full-Stack Developer based in Algiers, Algeria 📍
            </p>

            <p className='text-gray-600 text-[16px]'>
              As a Full-Stack Developer, I have strong skills in HTML, CSS, JavaScript, React, Tailwind, Node.js, Express, and MongoDB. I build and maintain responsive websites that give users a smooth and enjoyable experience.
              My focus is on creating dynamic and engaging interfaces by writing clean, optimized code and using modern tools and techniques.
              I also enjoy working with other developers and teams to build high-quality and powerful web applications.
            </p>
          </div>
        </div>   
      </section>
    </>
  )
}

export default About