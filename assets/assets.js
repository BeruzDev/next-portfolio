import user_image from './user-image.png'
import code_icon from './code-icon.png'
import code_icon_dark from './code-icon-dark.png'
import edu_icon from './edu-icon.png'
import edu_icon_dark from './edu-icon-dark.png'
import project_icon from './project-icon.png'
import project_icon_dark from './project-icon-dark.png'
import linkedin from './linkedin.png'
import vscode from './vscode.png'
import supabase from './supabase.png'
import git from './git.png'
import github from './github.png'
import react from './react.png'
import react_dark from './react_dark.png'
import html from './HTML5.png'
import css from './CSS.png'
import js from './JavaScript.png'
import shocketio from './Socket.io.png'
import shocketio_dark from './Socket.io_dark.png'
import sass from './Sass.png'
import openai from './OpenAi.png'
import typescript from './typescript.png'
import mysql from './mysql.png'
import node from './nodejs.png'
import express from './express.png'
import express_dark from './express_dark.png'
import mongodb from './mongodb.png'
import right_arrow_white from './right-arrow-white.png'
import logo from './logo.png'
import logo_dark from './logo_dark.png'
import mail_icon from './mail_icon.png'
import mail_icon_dark from './mail_icon_dark.png'
import profile_img from './profile-img.png'
import download_icon from './download-icon.png'
import download_icon_dark from './download-icon-dark.png'
import moon_icon from './moon-icon.png'
import sun_icon from './sun-icon.png'
import arrow_icon from './arrow-icon.png'
import arrow_icon_dark from './arrow-icon-dark.png'
import menu_black from './menu-black.png'
import menu_white from './menu-white.png'
import close_black from './close-black.png'
import close_white from './close-white.png'
import softskills_icon from './softskills-icon.png'
import softskills_icon_dark from './softskills-icon-dark.png'
import frontend_icon from './frontend-icon.png'
import frontend_icon_dark from './frontend-icon-dark.png'
import backend_icon from './backend-icon.png'
import backend_icon_dark from './backend-icon-dark.png'
import right_arrow from './right-arrow.png'
import send_icon from './send-icon.png'
import right_arrow_bold from './right-arrow-bold.png'
import right_arrow_bold_dark from './right-arrow-bold-dark.png'
import link_icon from './link-icon.png'
import github_icon from './github-icon.png'
import github_icon_dark from './github-icon-dark.png'
import link_icon_dark from './link-icon-dark.png'
import copy_check from './copy-check.png'
import copy_check_dark from './copy-check-dark.png'
import heart_icon from './heart-icon.png'

export const assets = {
  arrow_icon,
  arrow_icon_dark,
  backend_icon,
  backend_icon_dark,
  close_black,
  close_white,
  code_icon,
  code_icon_dark,
  copy_check,
  copy_check_dark,
  css,
  download_icon,
  download_icon_dark,
  edu_icon,
  edu_icon_dark,
  express,
  express_dark,
  frontend_icon,
  frontend_icon_dark,
  git,
  github,
  github_icon,
  github_icon_dark,
  heart_icon,
  html,
  js,
  link_icon,
  link_icon_dark,
  linkedin,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  menu_black,
  menu_white,
  moon_icon,
  mongodb,
  mysql,
  node,
  openai,
  profile_img,
  project_icon,
  project_icon_dark,
  react,
  react_dark,
  right_arrow,
  right_arrow_bold,
  right_arrow_bold_dark,
  right_arrow_white,
  sass,
  send_icon,
  shocketio,
  shocketio_dark,
  softskills_icon,
  softskills_icon_dark,
  sun_icon,
  supabase,
  typescript,
  user_image,
  vscode,
}

export const projectData = [
  {
    title: 'Acortador de URLs',
    textColor: 'text-white',
    bgImage: '/work-1.png',
    githubLink: 'https://github.com/BeruzDev/link-shortener',
    githubIcon: assets.github_icon_dark,
    link: 'https://craftit.vercel.app/',
    linkIcon: assets.link_icon_dark,
    techIcons: [
      assets.node,
      assets.express_dark,
      assets.supabase,
      assets.react_dark,
      assets.css,
    ],
  },
  {
    title: 'Traductor con IA',
    textColor: 'text-black',
    bgImage: '/work-2.png',
    githubLink: 'https://github.com/BeruzDev/ai-translate',
    githubIcon: assets.github_icon,
    link: 'https://ai-translate-project.vercel.app/',
    linkIcon: assets.link_icon,
    techIcons: [assets.react, assets.typescript, assets.openai],
  },
  {
    title: 'Chat en tiempo real',
    textColor: 'text-white',
    bgImage: '/work-3.png',
    githubLink: 'https://github.com/BeruzDev/Chat-node.js',
    githubIcon: assets.github_icon_dark,
    link: 'https://chat-node-js-2u1m.onrender.com/',
    linkIcon: assets.link_icon_dark,
    techIcons: [assets.node, assets.express_dark, assets.shocketio_dark, assets.mysql],
  },
  {
    title: 'Animación de scroll',
    textColor: 'text-black',
    bgImage: '/work-4.png',
    githubLink: 'https://github.com/BeruzDev/ichiban-scroll',
    githubIcon: assets.github_icon,
    link: 'https://ichiban-clone.netlify.app/',
    linkIcon: assets.link_icon,
    techIcons: [assets.html, assets.css, assets.js],
  },
  {
    title: 'Juego de mecanografía',
    textColor: 'text-white',
    bgImage: '/work-5.png',
    githubLink: 'https://github.com/BeruzDev/a-typing-game',
    githubIcon: assets.github_icon_dark,
    link: 'https://atypinggame.netlify.app/',
    linkIcon: assets.link_icon_dark,
    techIcons: [assets.react_dark, assets.sass],
  },
  {
    title: 'Extensión VSCode',
    textColor: 'text-white',
    bgImage: '/work-6.png',
    githubLink: 'https://github.com/BeruzDev/vsc_extension_toggle_comments',
    githubIcon: assets.github_icon_dark,
    link: 'https://marketplace.visualstudio.com/items?itemName=BeruzDev.toggle-comments-visibility',
    linkIcon: assets.link_icon_dark,
    techIcons: [assets.typescript],
  },
]

export const skillsData = [
  {
    icon: assets.softskills_icon,
    iconDark: assets.softskills_icon_dark,
    title: 'Soft Skills',
    skills: [
      'Trabajo en equipo',
      'Pensamiento crítico',
      'Resolución de problemas',
      'Adaptabilidad',
      'Comunicación efectiva',
    ],
    link: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf',
  },
  {
    icon: assets.frontend_icon,
    iconDark: assets.frontend_icon_dark,
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    link: '#projects',
  },
  {
    icon: assets.backend_icon,
    iconDark: assets.backend_icon_dark,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Supabase', 'MySQL', 'Git & GitHub'],
    link: '#projects',
  },
]

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Experiencia En Desarrollo Web',
    description: 'Cuatro meses de practicas',
    subdescription: 'Kennwort Consulting',
    document: '/KENNWORT_CartaRecomendacionCastellano_AlbertCastroAlbacete.pdf',
    button: 'Referencias',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Experiencia como Modelista',
    description: 'Diez años como Clay Modeler',
    subdescription: 'EDAG Engineering Spain S.L.',
    document: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf',
    button: 'Recomendación',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Educación Formación Profesional',
    description: 'ILERNA',
    subdescription: 'Desarrollo Aplicaciones Web',
    document: '/finished_grade_certificate_CENSORED.pdf',
    button: 'Expediente',
  },
]

export const toolsData = [
  { icon: assets.react, iconDark: assets.react_dark },
  { icon: assets.node, iconDark: assets.node },
  { icon: assets.express, iconDark: assets.express_dark },
  { icon: assets.supabase, iconDark: assets.supabase },
  { icon: assets.mysql, iconDark: assets.mysql },
  { icon: assets.vscode, iconDark: assets.vscode },
  { icon: assets.git, iconDark: assets.git },
  { icon: assets.github, iconDark: assets.github_icon_dark },
]
