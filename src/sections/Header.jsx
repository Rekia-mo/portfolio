import React from 'react'

function Header() {

  const navLinks = [
    { herf: '', label: 'Home' },
    { herf: '#About', label: 'About' },
    { herf: '#projcts', label: 'Projcts' },
    { herf: '#Contact', label: 'Contact' },
  ];

  return (
    <>
      <header className='fixed top-0 left-0 z-50 sm:px-15 px-4 py-4 w-full bg-white'>
        <nav className='flex flex-row justify-between items-center'>
          <a href="" className='font-bold text-[20px]'>
            Rekia.dev
          </a>

          <ul className='flex flex-row justify-center items-center gap-5 font-bold text-[15]'>
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={link.herf}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header