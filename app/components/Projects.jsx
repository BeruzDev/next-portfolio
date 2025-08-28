import { projectData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Projects = ({ isDarkMode }) => {
  const handleLinkClick = (project) => {
    if (project.title === 'Chat en tiempo real') {
      const width = Math.floor(window.innerWidth / 2)
      const height = Math.floor(window.innerHeight)
      window.open(
        project.link,
        '_blank',
        `width=${width},height=${height}, left=0, top=0, noopener, noreferrer`
      )
      window.open(
        project.link,
        '_blank',
        `width=${width},height=${height}, left=${width}, top=0, noopener, noreferrer`
      )
    } else {
      window.open(project.link, '_blank', `noopener, noreferrer`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-35 mb-55"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        Mis últimos
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl "
      >
        Proyectos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Bienvenidos a mi portafolio, donde podrás explorar mis proyectos más
        recientes y ver cómo he aplicado mis habilidades en el desarrollo web.
        Desde un acortador de enlaces, hasta un traductor que utiliza
        inteligencia artificial para traducir y detectar idiomas, pasando por
        juego de mecanografía o una extension para Visual Studio Code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-items-center gap-5 my-20 "
      >
        {projectData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group [width:350px] [height:250px]"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="[background-color:rgba(255,255,255,0.0)] backdrop-blur-sm w-8/13 rounded-md absolute bottom-5 right-2 -translate-x-1/2 py-3 px-5 flex flex-col gap-3 duration-500 group-hover:bottom-7 "
            >
              <div>
                <h2 className={`font-semibold ${project.textColor}`}>
                  {project.title}
                </h2>
              </div>
              <div className="flex flex-row items-start gap-2">
                {project.techIcons.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt={`Tech Icon ${index}`}
                    className="w-6"
                  />
                ))}
              </div>
              <div className="flex flex-row items-center gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.githubIcon}
                    alt="GitHub Icon"
                    className="w-6 transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => handleLinkClick(project)}
                  className="bg-transparent p-0 border-none cursor-pointer"
                >
                  <Image
                    src={project.linkIcon}
                    alt="Link Icon"
                    className="w-6 transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects
