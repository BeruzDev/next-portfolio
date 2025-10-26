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
import materialui from './materialui.png'
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
  materialui,
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
    title: 'Javascript Quiz',
    textColor: 'text-white',
    bgImage: '/work-7.png',
    githubLink: 'https://github.com/BeruzDev/java-script-quiz',
    githubIcon: assets.github_icon_dark,
    link: 'https://java-script-quiz-kappa.vercel.app/',
    linkIcon: assets.link_icon_dark,
    techIcons: [assets.react_dark, assets.typescript, assets.materialui],
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
    techIcons: [
      assets.node,
      assets.express_dark,
      assets.shocketio_dark,
      assets.mysql,
    ],
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
    description: 'Un año de prácticas',
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
  { icon: assets.github_icon, iconDark: assets.github_icon_dark },
]

//Language options

export const navbarLang = {
  es: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contáctame',
  },
  en: {
    home: 'Home',
    about: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact Me',
  },
}

export const headerLang = {
  es: {
    title: 'Hola! Soy Albert Castro',
    subtitle: 'Desarrollador Web',
    text: 'Enfocado en crear interfaces limpias, rápidas y usables. Trabajo con React y Node.js, disfruto transformando ideas en aplicaciones reales. Actualmente busco unirme a un equipo donde seguir aprendiendo y aportando desde el primer día.',
    contactBtn: 'Contáctame',
    downloadBtn: 'Descargar CV',
  },
  en: {
    title: 'Hello! I am Albert Castro',
    subtitle: 'Web Developer',
    text: 'Focused on creating clean, fast, and user-friendly interfaces. I work with React and Node.js, enjoying transforming ideas into real applications. I am currently looking to join a team where I can continue learning and contributing from day one.',
    contactBtn: 'Contact Me',
    downloadBtn: 'Download CV',
  }
}

export const aboutLang = {
  es: {
    title: 'Conoce más',
    subtitle: 'Sobre mí',
    text:'Soy Albert Castro, desarrollador web especializado en React, Node.js con Express, Supabase y SQL. He participado en proyectos SaaS reales durante mis prácticas en Kennwort Consulting & Technologies, trabajando en aplicaciones para venta de entradas y gestión de acceso en gimnasios. Con 10 años de experiencia previa en el sector automovilístico como modelista, en entornos altamente exigentes, destaco por mi capacidad para trabajar en equipo, resolver problemas y adaptarme rápidamente a nuevas tecnologías. Me apasiona seguir aprendiendo y crear soluciones web eficientes y escalables.',
    cards: [
      {
        title: 'Experiencia En Desarrollo Web',
        description: 'Un año de prácticas',
        subdescription: 'Kennwort Consulting',
        button: 'Referencias',
        document: '/KENNWORT_CartaRecomendacionCastellano_AlbertCastroAlbacete.pdf'
      },
      {
        title: 'Experiencia como Modelista',
        description: 'Diez años como Clay Modeler',
        subdescription: 'EDAG Engineering Spain S.L.',
        button: 'Recomendación',
        document: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf'
      },
      {
        title: 'Educación Formación Profesional',
        description: 'ILERNA',
        subdescription: 'Desarrollo Aplicaciones Web',
        button: 'Expediente',
        document: '/finished_grade_certificate_CENSORED.pdf'
      }
    ],
    stack: 'Stack Tecnológico',
  },
  en: {
    title: 'Learn More',
    subtitle: 'About Me',
    text:'I am Albert Castro, a web developer specialized in React, Node.js with Express, Supabase, and SQL. I have participated in real SaaS projects during my internship at Kennwort Consulting & Technologies, working on applications for ticket sales and access management in gyms. With 10 years of previous experience in the automotive sector as a modeler, in highly demanding environments, I stand out for my ability to work in a team, solve problems, and quickly adapt to new technologies. I am passionate about continuing to learn and creating efficient and scalable web solutions.',
    cards: [
      {
        title: 'Web Development',
        description: 'One year of internship',
        subdescription: 'Kennwort Consulting',
        button: 'References',
        document: '/KENNWORT_CartaRecomendacionCastellano_AlbertCastroAlbacete-EN.pdf'
      },
      {
        title: 'Clay Modeller',
        description: 'Ten years experience',
        subdescription: 'EDAG Engineering Spain S.L.',
        button: 'Recommendation',
        document: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED-EN.pdf'
      },
      {
        title: 'Higher Grade Vocational',
        description: 'ILERNA',
        subdescription: 'Web Development',
        button: 'Transcript',
        document: '/finished_grade_certificate_CENSORED.pdf'
      }
    ],
    stack: 'Technology Stack',
  }
}

export const skillsLang = {
  es: {
    title: 'Estas son mis',
    subtitle: 'Habilidades',
    text: 'Mi experiencia en entornos exigentes me ha permitido fortalecer habilidades blandas clave como liderazgo, adaptabilidad y colaboración, que junto a mis conocimientos en front-end y back-end me convierten en un desarrollador web completo y orientado a resultados',
    softSkills: [
      'Trabajo en equipo',
      'Pensamiento crítico',
      'Resolución de problemas',
      'Adaptabilidad',
      'Comunicación efectiva',
    ],
    button: 'Ver más',
    softSkillsLink: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED.pdf',
  },
  en: {
    title: 'These are my',
    subtitle: 'Skills',
    text: 'My experience in demanding environments has allowed me to strengthen key soft skills such as leadership, adaptability and collaboration, which together with my front-end and back-end knowledge make me a complete and results-oriented web developer',
    softSkills: [
      'Teamwork',
      'Critical thinking',
      'Problem solving',
      'Adaptability',
      'Effective communication',
    ],
    button: 'See more',
    softSkillsLink: '/EDAG_CartaRecomendacion_AlbertCastroAlbacete_CENSORED-EN.pdf',
  }
}

export const projectsLang = {
  es: {
    title: 'Mis últimos',
    subtitle: 'Proyectos',
    text: 'En este portafolio encontrarás una selección de proyectos que muestran mi enfoque práctico en desarrollo web. Desde un acortador de enlaces hasta un traductor impulsado por inteligencia artificial, así como un juego de mecanografía y una extensión para Visual Studio Code, cada proyecto refleja mis habilidades técnicas y mi capacidad para resolver problemas reales.',
    projectsTitle: [
      'Acortador de URLs',
      'Juego de JavaScript',
      'Traductor con IA',
      'Chat en tiempo real',
      'Animación de scroll',
      'Juego de mecanografía',
      'Extensión VSCode',
    ]
  },
  en: {
    title: 'My Latest',
    subtitle: 'Projects',
    text: 'In this portfolio you will find a selection of projects that showcase my hands-on approach to web development. From a link shortener to an AI-powered translator, as well as a typing game and a Visual Studio Code extension, each project reflects my technical skills and my ability to solve real-world problems.',
    projectsTitle: [
      'URL Shortener',
      'JavaScript Quiz',
      'AI Translator',
      'Real-time Chat',
      'Scroll Animation',
      'Typing Game',
      'VSCode Extension',
    ]
  }
}

export const contactLang = {
  es: {
    title: 'Quedo a tu disposición',
    subtitle: 'Contáctame',
    text: 'Si tienes alguna pregunta, consulta o feedback, no dudes en contactarme.',
    namePlaceholder: 'Introduce tu nombre',
    emailPlaceholder: 'Introduce tu correo electrónico',
    messagePlaceholder: 'Introduce tu mensaje',
    button: 'Enviar'
  },
  en: {
    title: 'I am at your disposal',
    subtitle: 'Contact Me',
    text: 'If you have any questions, inquiries, or feedback, please feel free to reach out to me.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    button: 'Send'
  }
}

export const footerLang = {
  es: 'Desarrollado por BeruzDev',
  en: 'Developed by BeruzDev',
}