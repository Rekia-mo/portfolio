import React from 'react'
import projcts from '../assets/prjct.jpg'

function Projcts() {
  return (
    <section id='projcts' className='h-[99vh] w-full flex justify-center items-center max-lg:mt-95'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className='flex flex-col justify-center items-start gap-2 '>
          <p className='font-extrabold text-teal-500 text-[15px]'>
            PORTFOLIO
          </p>
          <p className='font-extrabold text-[20px] max-lg:text-[18px]'>
            Each project is a unique piece of development 🧩
          </p>
        </div>

        <div>
          <img src={projcts} alt="prjct" width={300}/>
        </div>

        <p className='font-bold  text-[18px] text-center'>
          projcts comming very soon~~<br /> 
          i just need to deploy them
        </p>
      </div>
    </section>
  )
}

export default Projcts