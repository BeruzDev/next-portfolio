import React from 'react'
import { skillsData } from '@/assets/assets'
import { assets, skillsLang } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Skills = ({ isDarkMode, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-35 mb-55"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        {skillsLang[language].title}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl "
      >
        {skillsLang[language].subtitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        {skillsLang[language].text}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10 justify-center max-w-4xl mx-auto "
      >
        {skillsData.map((skills, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 hover:[box-shadow:var(--shadow)] cursor-pointer hover:[background-color:var(--color-light-hover)]"
          >
            <Image
              src={isDarkMode ? skills.iconDark : skills.icon}
              alt={skills.title}
              className="w-10"
            />
            <h3 className="text-lg my-4 [color:var(--color-text)]">
              {skills.title}
            </h3>
            <ul className="space-y-2">
              {(skills.title === 'Soft Skills'
                ? skillsLang[language].softSkills
                : skills.skills
              ).map((skill, index) => (
                <li
                  key={index}
                  className="text-sm [color:var(--color-text)] leading-5"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <a
              href={
                skills.title === 'Soft Skills'
                  ? skillsLang[language].softSkillsLink
                  : skills.link
              }
              target={skills.title === 'Soft Skills' ? '_blank' : undefined}
              rel={
                skills.title === 'Soft Skills'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="flex items-center gap-2 text-sm mt-5 hover:[color:var(--color-hover)]"
            >
              {skillsLang[language].button}{' '}
              <Image
                src={
                  isDarkMode
                    ? assets.right_arrow_bold_dark
                    : assets.right_arrow_bold
                }
                alt="Right Arrow"
                className="w-4 "
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills
