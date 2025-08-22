import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef()
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? '[background-color:rgba(255,255,255,0.0)] backdrop-blur-lg'
            : ''
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 [background-color:var(--color-nav)] [color:var(--color-text)] shadow-sm  ${
            isScroll
              ? ''
              : '[background-color:rgba(255,255,255,0.0)] backdrop-blur-lg'
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li> 
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
        </ul>


        <div className="flex items-center gap-4">

          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Change theme"
              className="w-6 cursor-pointer"
            />
          </button>
          
          <a href='https://github.com/BeruzDev' target="_blank" rel="noopener noreferrer">
            <Image
              src={isDarkMode ? assets.github_icon_dark : assets.github_icon}
              alt="GitHub Icon"
              className='w-6 cursor-pointer'
            />
          </a>

          <a href='https://www.linkedin.com/in/albert-castro-albacete-38204615a/' target="_blank" rel="noopener noreferrer">
            <Image
              src={assets.linkedin}
              alt="Link Icon"
              className='w-6 cursor-pointer'
            />
          </a>
          
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contáctame{' '}
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Contact" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-60 top-5 rounded-2xl
				w-64 z-50 [background-color:var(--color-nav-small)] backdrop-blur-lg transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer"
            />
          </div>

          <li onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">Sobre mí</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#skills">Habilidades</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#projects">Proyectos</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contáctame</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
