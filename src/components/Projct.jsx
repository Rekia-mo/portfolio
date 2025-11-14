import React from 'react';
import githubImg from '../assets/github.png';
import liveDEmo from '../assets/liveDEmo.png';

const Projct = ({ img, title, descrption, tech, githubUrl, liveDemo, index }) => {
  return (
    <div
      className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} justify-center items-center gap-10 w-full px-3`}
    >
      <div className='rounded-2xl overflow-hidden flex justify-center items-center border shadow-2xl'>
        <img src={img} alt="prjct" width={500} />
      </div>


      <div className='flex flex-col justify-center items-start w-110 gap-6'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <p className='font-bold text-xl'>
            {title}
          </p>

          <p className='text-gray-600 text-[16px] max-lg:text-[18px] font-semibold text-center'>
            {descrption}
          </p>

          <div className='flex flex-wrap gap-4 justify-center items-center font-extrabold w-80 '>
            {
              tech.map((item, i) => (
                <p key={i}>
                  {item}
                </p>
              ))
            }
          </div>
        </div>

        <div className='flex justify-center items-center w-full font-bold gap-10'>
          <a
            className='flex justify-center items-center gap-2 cursor-pointer hover:opacity-70'
            href={githubUrl}
            target='_blank'
          >
            <p>Code</p>
            <img src={githubImg} alt="githubImg" width={20} />
          </a>

          <a
            className='flex justify-center items-center gap-2 cursor-pointer hover:opacity-70'
            href={liveDemo}
            target='_blank'
          >
            <p>Live Demo</p>
            <img src={liveDEmo} alt="githubImg" width={20} />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Projct