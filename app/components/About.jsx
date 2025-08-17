import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Conoce más</h4>
      <h2 className="text-center text-5xl ">Sobre mí</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="User Image"
            className="w-full rounded-4xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Soy Albert Castro, desarrollador web, enfocado en aprender y
            profundizar en React, MongoDB y SQL, y Node.js con Express. He
            realizado prácticas en Kennwort Consulting & Technologies, donde
            trabajé en proyectos Saas reales enfocados en la venta de entradas y
            control de acceso de gimnasios. Con 10 años de experiencia previa
            como modelista en el sector automovilistico, con un entorno
            exigente, destaco por mi capacidad de trabajo en equipo y resolución
            de problemas. Siempre dispuesto a mejorar.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map((item, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 hover:-translate-y-1 duration-500 hover:[box-shadow:var(--shadow-light)]"
                key={index}
              >
                <Image src={item.icon} alt={item.title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
								<p className='text-gray-600 text-sm font-semibold mt-3'>{item.subdescription}</p>
								<a
									href={item.document}
									download
									className="text-sm text-gray-600 border-[0.5px] border-gray-400 rounded-xl px-3 py-2 cursor-pointer flex items-center justify-center gap-2 mt-3 overflow-hidden hover:[background-color:var(--color-light-hover)]"
								>
									{item.button}
									<Image
										src={assets.download_icon}
										alt="Right Arrow Icon"
										className="h-4 w-4 text-gray-600"
									/>
								</a>
              </li>
            ))}
          </ul>

					<h4 className='my-6 text-gray-700'>Entorno de Desarrollo</h4>

					<ul className='flex items-center gap-3 sm:gap-5'>
						{toolsData.map((tool, index) => (
							<li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:[box-shadow:var(--shadow-light)]'>
								<Image src={tool} alt='Tool icon' className="w-5 sm:w-7" />
							</li>
						))}
					</ul>
        </div>	
      </div>
    </div>
  )
}

export default About
