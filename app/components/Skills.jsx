import React from 'react'
import { skillsData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20 mb-40">
      <h4 className="text-center mb-2 text-lg">Estas son mis</h4>
      <h2 className="text-center text-5xl ">Habilidades</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        He adquirido solidas habilidades blandas durante mi etapa como
        modelista. Ahora estoy listo para aplicarlas y combinarlas con mis
        habilidades técnicas en el desarrollo web.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10 justify-center max-w-4xl mx-auto ">
        {skillsData.map((skills, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 hover:[box-shadow:var(--shadow-light)] cursor-pointer hover:[background-color:var(--color-light-hover)]"
          >
            <Image src={skills.icon} alt={skills.title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{skills.title}</h3>
            <ul className="space-y-2">
              {skills.skills.map((skill, index) => (
                <li key={index} className="text-sm text-gray-600 leading-5">
                  {skill}
                </li>
              ))}
            </ul>
            <a
              href={skills.link}
              target={skills.title === 'Soft Skills' ? '_blank' : undefined}
              rel={
                skills.title === 'Soft Skills'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="flex items-center gap-2 text-sm mt-5"
            >
              Ver más{' '}
              <Image
                src={assets.right_arrow}
                alt="Right Arrow"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
