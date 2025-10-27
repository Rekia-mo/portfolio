import React from 'react';
import githubIcon from '../assets/github.png';
import linkdinIcon from '../assets/linkdin.png';
import prsonImg from '../assets/images.jpeg';
import {
  html,
  css,
  js,
  react,
  ts,
  tailwind,
  node,
  express,
  mongodb,
  sql,
  git
} from '../assets/index.js';

function Hero() {

  const techStack = [
    { icon: html, name: 'HTML', w: 42 },
    { icon: css, name: 'CSS', w: 29 },
    { icon: js, name: 'JS', w: 23 },
    { icon: react, name: 'React', w: 26 },
    { icon: ts, name: 'TS', w: 22 },
    { icon: tailwind, name: 'Tailwind', w: 30 },
    { icon: node, name: 'Node JS', w: 27 },
    { icon: express, name: 'Express', w: 30 },
    { icon: mongodb, name: 'MongoDB', w: 30 },
    { icon: sql, name: 'SQL', w: 30 },
    { icon: git, name: 'Git', w: 30 }
  ]
  return (
    <>
      <section className='h-[90vh] w-full flex justify-center items-center '>

        <div className='flex flex-col gap-6 justify-center items-center max-lg:mt-50 max-lg:gap-2'>

          <div className='flex flex-row justify-center items-center gap-10 max-lg:flex-col-reverse '>

            <div className='flex flex-col items-start justify-center gap-7 w-100 max-lg:gap-5'>
              <p className='font-extrabold text-4xl max-lg:text-3xl'>
                Full-Stack Developer
              </p>

              <p className='text-gray-500 text-[14px] max-lg:[12px]'>
                Hi, I’m Rekia Mansour Ouahchia, a passionate Full-Stack Developer based in Algiers, Algeria 📍.
              </p>

              <div className='flex flex-row gap-4'>
                <a href="">
                  <img
                    src={githubIcon}
                    alt="icon1"
                    width={20}
                  />
                </a>
                <a className='' href="">
                  <img
                    src={linkdinIcon}
                    alt="icon2"
                    width={20}
                  />
                </a>
              </div>

            </div>

            <div className="relative w-56 h-56 border-[3px] border-black overflow-hidden animate-blob">
              <img
                src={prsonImg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className='flex flex-row items-center justify-center gap-5 max-lg:flex-col max-lg:gap-3 max-lg:mx-11  '>

            <p className='font-bold mt-7 text-[18px]'>
              Tech Stack &nbsp;&nbsp; |
            </p>

            <ul className="flex flex-wrap justify-center items-center sm:justify-start gap-5">
              {techStack.map((tech, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-end  h-18 transition-transform hover:scale-110"
                >
                  <div className="flex items-center justify-center w-12 h-12 ">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="max-w-full max-h-full object-contain"
                      width={tech.w}
                    />
                  </div>

                  <p className="font-bold text-[10px] text-gray-800 text-center">
                    {tech.name}
                  </p>
                </li>
              ))}
            </ul>


          </div>
        </div>
      </section>
    </>
  )
}

export default Hero