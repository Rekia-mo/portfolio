import { useState } from 'react';

import {
  Header,
  Hero,
  About,
  Projcts,
  Contact
} from './sections/index.js';

//just to push dep
function App() {

  return (
    <>
      <Header />
      <main className='overflow-scroll overflow-x-hidden w-full [&::-webkit-scrollbar]:hidden  max-lg:mt-15 px-4'>
        <Hero />
        <About/>
        <Projcts />
        <Contact />
      </main>
    </>
  )
}

export default App
