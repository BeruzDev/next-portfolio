import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hola! Soy Albert Castro{' '}
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
        Desarrollador Fullstack
      </h1>

      <p className="max-w-2xl mx-auto">
        Soy un desarrollador web con experiencia en la creación de aplicaciones
        modernas y eficientes. En busca de mi primer trabajo en el sector
        tecnológico.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contáctame{' '}
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow Icon"
            className="w-4"
          />
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Descargar CV{' '}
          <Image
            src={assets.download_icon}
            alt="Right Arrow Icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  )
}

export default Header
