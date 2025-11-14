import React from 'react';
import Projct from '../components/Projct';
import restPrjct from '../assets/restPrjct.png';
import mvprjct from '../assets/mvprjct.png';


function Projcts() {
  const data = [
    {
      img: restPrjct,
      title: 'RESTAURANT WEB APP — Full-Stack',
      descrption: 'A complete restaurant web application that lets customers signIn and explore the menu, add dishes to a cart, complete checkout, and see their past orders. The admin panel (protected by JWT roles) allows admins to add, edit, and delete menu items and categories, and to manage all orders. The app is responsive and optimized for a smooth user experience on mobile and desktop',
      tech: ['React', ' Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/Rekia-mo/RESTAURANT-WEB-APP-Full-Stack',
      liveDemo: 'https://github.com/Rekia-mo/RESTAURANT-WEB-APP-Full-Stack'
    },
    {
      img: mvprjct,
      title: 'MOVIES EXPLORER — React + API Integration',
      descrption: 'A dynamic movie discovery web application built with React and Tailwind CSS. It fetches real-time data from TMDB (a movies API) to display trending films and popular series. Users can search for any movie or show using a responsive search system, view ratings, descriptions, and explore categories. The UI is fully responsive, clean, and optimized for fast browsing.',
      tech: ['React', 'Tailwind CSS', 'TMDB API'],
      githubUrl: 'https://github.com/Rekia-mo/movies-explorer',
      liveDemo: 'https://rekia-mo.github.io/movies-explorer/'
    }

  ]
  return (
    <section id='projcts' className='h-full w-full flex justify-center items-center max-lg:mb-30'>

      <div className='flex flex-col justify-center items-center gap-8 ml-2'>
        <div className='flex flex-col justify-center items-start gap-2 mb-7 w-full px-2'>
          <p className='font-extrabold text-teal-500 text-[15px] max-lg:text-[20px]'>
            PORTFOLIO
          </p>
          <p className='font-extrabold text-[23px]'>
            Each project is a unique piece of development 🧩
          </p>
        </div>

        <div className='flex flex-col justify-center items-center gap-30 w-full'>
          {
            data.map((item, i) => (
              <Projct key={i} {...item} index={i}/>
            ))
          }


        </div>
      </div>
    </section>
  )
}

export default Projcts