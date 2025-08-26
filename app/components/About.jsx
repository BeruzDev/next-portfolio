import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 mb-24"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Conoce más
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl "
      >
        Sobre mí
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="User Image"
            className="w-full rounded-4xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl">
            Soy Albert Castro, desarrollador web, enfocado en aprender y
            profundizar en React, Supabase y SQL, y Node.js con Express. He
            realizado prácticas en Kennwort Consulting & Technologies, donde
            trabajé en proyectos Saas reales enfocados en la venta de entradas y
            control de acceso de gimnasios. Con 10 años de experiencia previa
            como modelista en el sector automovilistico, con un entorno
            exigente, destaco por mi capacidad de trabajo en equipo y resolución
            de problemas. Siempre dispuesto a mejorar.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
          >
            {infoList.map((item, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 hover:-translate-y-1 duration-500 hover:[box-shadow:var(--shadow)]"
                key={index}
              >
                <Image
                  src={isDarkMode ? item.iconDark : item.icon}
                  alt={item.title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold [color:var(--color-text)]">
                  {item.title}
                </h3>
                <p className="[color:var(--color-text)] text-sm">
                  {item.description}
                </p>
                <p className="[color:var(--color-text)] text-sm font-semibold mt-3">
                  {item.subdescription}
                </p>
                <a
                  href={item.document}
                  download
                  className="text-sm [color:var(--color-text)] border-[0.5px] border-gray-400 rounded-xl px-3 py-2 cursor-pointer flex items-center justify-center gap-2 mt-3 overflow-hidden hover:[background-color:var(--color-hover)] hover:[color:var(--color-text)] hover:border-none"
                >
                  {item.button}
                  <Image
                    src={
                      isDarkMode
                        ? assets.download_icon_dark
                        : assets.download_icon
                    }
                    alt="Right Arrow Icon"
                    className="h-4 w-4 [color:var(--color-text)]"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, duration: 0.5 }}
            className="my-6 [color:var(--color-text)]"
          >
            Stack Tecnológico
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:[box-shadow:var(--shadow)]"
              >
                <Image src={tool} alt="Tool icon" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
