import { useState } from 'react';

import {
  Header,
  Hero,
  About,
  Projcts,
  Contact
} from './sections/index.js';


function App() {

  return (
    <>
      <Header />
      <main className='overflow-scroll overflow-x-hidden w-full [&::-webkit-scrollbar]:hidden mt-15 '>
        <Hero />
        <About/>
        <Projcts />
        <Contact />
      </main>

    </>
  )
}

export default App
