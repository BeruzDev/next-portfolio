import { projectData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = ({isDarkMode}) => {
	return (
		<div id="projects" className="w-full px-[12%] py-10 scroll-mt-35 mb-55">
			<h4 className="text-center mb-2 text-lg">Mis últimos</h4>
      <h2 className="text-center text-5xl ">Proyectos</h2>

			<p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Bienvenidos a mi portafolio, donde podrás explorar mis proyectos más recientes y ver cómo he aplicado mis habilidades en el desarrollo web.
				Desde un acortador de enlaces, hasta un traductor que utiliza inteligencia artificial para traducir y detectar idiomas, pasando por juego de mecanografía o una extension para Visual Studio Code.
      </p>

			<div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-items-center gap-5 my-20 '>
				{projectData.map((project, index) => (
					<div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group [width:350px] [height:250px]' style={{ backgroundImage: `url(${project.bgImage})` }}>
						<div className='[background-color:rgba(255,255,255,0.0)] backdrop-blur-sm w-8/13 rounded-md absolute bottom-5 right-2 -translate-x-1/2 py-3 px-5 flex flex-col gap-3 duration-500 group-hover:bottom-7 '> 
							<div>
								<h2 className='font-semibold text-white'>{project.title}</h2>
							</div>
							<div className='flex flex-row items-start gap-2'> 
								{project.techIcons.map((icon, index) => (
									<Image key={index} src={icon} alt={`Tech Icon ${index}`} className='w-6' />
								))}
							</div>
							<div className='flex flex-row items-center gap-2'>
								<a href={project.githubLink} target="_blank" rel="noopener noreferrer"><Image src={project.githubIcon} alt="GitHub Icon" className='w-6 transition-transform duration-200 hover:scale-110 hover:-translate-y-1' /></a>
								<a href={project.link} target="_blank" rel="noopener noreferrer"><Image src={project.linkIcon} alt="Link Icon" className='w-6 transition-transform duration-200 hover:scale-110 hover:-translate-y-1' /></a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
