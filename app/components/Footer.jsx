import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
          albertus1291@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
          Desarrollado por BeruzDev
          <Image
            src={assets.heart_icon}
            alt="Heart Icon"
            className="w-4 inline-block ml-2"
          />
        </p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              href="https://github.com/BeruzDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/albert-castro-albacete-38204615a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
